const axios = require("axios");
const fs = require("fs");
const os = require("os");
const path = require("path");

const MAX_TEXT_LENGTH = 180;
const MAX_AUDIO_BYTES = 5 * 1024 * 1024;
const TTS_URL = "https://translate.google.com/translate_tts";

module.exports = function createTextToSpeechCommand({ name, language, languageName }) {
  return {
    config: {
      name,
      version: "1.0.0",
      hasPermssion: 0,
      credits: "FukeyBot",
      description: `Generate ${languageName} speech from command text or a replied message`,
      commandCategory: "media",
      usages: "<text> or reply to a text message",
      cooldowns: 5
    },

    run: async function ({ api, event, args }) {
      const commandText = Array.isArray(args) ? args.join(" ").trim() : "";
      const repliedText = typeof event.messageReply?.body === "string"
        ? event.messageReply.body.trim()
        : "";
      const text = commandText || repliedText;

      if (!text) {
        return api.sendMessage(
          `Usage: #${name} <text>, or reply to a text message with #${name}.`,
          event.threadID,
          event.messageID
        );
      }
      if (text.length > MAX_TEXT_LENGTH) {
        return api.sendMessage(
          `Please keep text under ${MAX_TEXT_LENGTH} characters for ${languageName} voice.`,
          event.threadID,
          event.messageID
        );
      }

      let directory;
      try {
        const audio = await requestSpeech(text, language);
        directory = await fs.promises.mkdtemp(path.join(os.tmpdir(), "fukeybot-tts-"));
        const audioPath = path.join(directory, `${name}.mp3`);
        await fs.promises.writeFile(audioPath, audio);
        await sendAudio(api, event, audioPath);
      } catch (error) {
        console.error(`[${name}] Text-to-speech failed:`, error.message);
        return api.sendMessage(
          `Could not generate ${languageName} voice right now. Please try again later.`,
          event.threadID,
          event.messageID
        );
      } finally {
        if (directory) {
          await fs.promises.rm(directory, { recursive: true, force: true });
        }
      }
    }
  };
};

async function requestSpeech(text, language) {
  const response = await axios.get(TTS_URL, {
    params: {
      ie: "UTF-8",
      q: text,
      tl: language,
      client: "tw-ob"
    },
    headers: {
      Accept: "audio/mpeg, audio/*;q=0.9, */*;q=0.8",
      "User-Agent": "Mozilla/5.0"
    },
    responseType: "arraybuffer",
    timeout: 20000,
    maxContentLength: MAX_AUDIO_BYTES,
    maxBodyLength: MAX_AUDIO_BYTES
  });

  const contentType = String(response.headers?.["content-type"] || "").toLowerCase();
  const audio = Buffer.from(response.data);
  if (
    audio.length < 128 ||
    audio.length > MAX_AUDIO_BYTES ||
    (!contentType.startsWith("audio/") && !contentType.includes("octet-stream"))
  ) {
    throw new Error("TTS service returned an invalid audio response.");
  }
  return audio;
}

function sendAudio(api, event, audioPath) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(audioPath);
    let settled = false;
    const finish = error => {
      if (settled) return;
      settled = true;
      if (error) reject(error);
      else resolve();
    };

    stream.once("error", finish);
    try {
      api.sendMessage(
        { attachment: stream },
        event.threadID,
        error => finish(error || null),
        event.messageID
      );
    } catch (error) {
      stream.destroy();
      finish(error);
    }
  });
}
