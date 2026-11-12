const axios = require("axios");
require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateGeminiAnswer = require("../../utils/geminiApi");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const MAX_PROMPT_LENGTH = 12000;
const MAX_MESSAGE_LENGTH = 1800;

module.exports.config = {
  name: "chatgpt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Ask ChatGPT a question using the OpenAI API",
  commandCategory: "ai",
  usages: "<your question>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = args.join(" ").trim();

  if (!prompt) {
    return api.sendMessage(
      "Usage: #chatgpt <your question>",
      event.threadID,
      event.messageID
    );
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    return api.sendMessage(
      `Your prompt is too long. Keep it under ${MAX_PROMPT_LENGTH} characters.`,
      event.threadID,
      event.messageID
    );
  }

  if (!OPENAI_API_KEY.trim() && !GEMINI_API_KEY.trim()) {
    return api.sendMessage(
      "AI is not configured. Set OPENAI_API_KEY or GEMINI_API_KEY in the bot environment.",
      event.threadID,
      event.messageID
    );
  }

  try {
    let answer;
    if (OPENAI_API_KEY.trim()) {
      try {
        const response = await axios.post(
          OPENAI_API_URL,
          {
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_completion_tokens: 1000
          },
          {
            headers: {
              Authorization: `Bearer ${OPENAI_API_KEY.trim()}`,
              "Content-Type": "application/json"
            },
            timeout: 60000
          }
        );
        answer = response.data?.choices?.[0]?.message?.content?.trim();
      } catch (error) {
        if (error.response?.status !== 429 || !GEMINI_API_KEY.trim()) {
          throw error;
        }
        answer = await generateGeminiAnswer(prompt, GEMINI_API_KEY.trim());
      }
    } else {
      answer = await generateGeminiAnswer(prompt, GEMINI_API_KEY.trim());
    }

    if (!answer) {
      throw new Error("AI returned an empty response.");
    }

    const chunks = splitMessage(answer);
    chunks.forEach((chunk, index) => {
      if (index === 0) {
        api.sendMessage(chunk, event.threadID, event.messageID);
      } else {
        api.sendMessage(chunk, event.threadID);
      }
    });
  } catch (error) {
    const status = error.response?.status;
    let message = "Could not reach the AI service. Check the bot's network connection and try again.";

    if (status === 401) {
      message = "The AI provider rejected its API key. Check OPENAI_API_KEY or GEMINI_API_KEY.";
    } else if (status === 429) {
      message = GEMINI_API_KEY.trim()
        ? "OpenAI is rate-limited and Gemini fallback also reached its quota. Try again later or check both API accounts."
        : "OpenAI rate limit or usage quota reached. Set GEMINI_API_KEY to enable automatic Gemini fallback.";
    } else if (status) {
      message = `AI request failed (HTTP ${status}). Try again later.`;
    } else if (error.message === "AI returned an empty response." || error.message === "Gemini returned an empty response.") {
      message = error.message;
    }

    return api.sendMessage(message, event.threadID, event.messageID);
  }
};

function splitMessage(text) {
  const chunks = [];
  let remaining = text;

  while (remaining.length > MAX_MESSAGE_LENGTH) {
    let splitAt = remaining.lastIndexOf("\n", MAX_MESSAGE_LENGTH);
    if (splitAt < MAX_MESSAGE_LENGTH * 0.6) {
      splitAt = remaining.lastIndexOf(" ", MAX_MESSAGE_LENGTH);
    }
    if (splitAt < MAX_MESSAGE_LENGTH * 0.6) {
      splitAt = MAX_MESSAGE_LENGTH;
    }
    if (
      splitAt > 0 &&
      splitAt < remaining.length &&
      remaining.charCodeAt(splitAt - 1) >= 0xd800 &&
      remaining.charCodeAt(splitAt - 1) <= 0xdbff &&
      remaining.charCodeAt(splitAt) >= 0xdc00 &&
      remaining.charCodeAt(splitAt) <= 0xdfff
    ) {
      splitAt += 1;
    }

    chunks.push(remaining.slice(0, splitAt).trimEnd());
    remaining = remaining.slice(splitAt).trimStart();
  }

  if (remaining) {
    chunks.push(remaining);
  }
  return chunks;
}
