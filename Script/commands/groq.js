require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateGroqAnswer = require("../../utils/groqApi");
const splitAiMessage = require("../../utils/splitAiMessage");

const API_KEY = (process.env.GROQ_API_KEY || "").trim();
const MAX_PROMPT_LENGTH = 12000;

module.exports.config = {
  name: "groq",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Ask Groq's free-tier GPT-OSS-20B model",
  commandCategory: "ai",
  usages: "<your question>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = args.join(" ").trim();
  if (!prompt) {
    return api.sendMessage("Usage: #groq <your question>", event.threadID, event.messageID);
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return api.sendMessage(`Keep your question under ${MAX_PROMPT_LENGTH} characters.`, event.threadID, event.messageID);
  }
  if (!API_KEY) {
    return api.sendMessage("Groq is not configured. Add GROQ_API_KEY to .env.", event.threadID, event.messageID);
  }

  try {
    const answer = await generateGroqAnswer(prompt, API_KEY);
    splitAiMessage(answer).forEach((chunk, index) => {
      if (index === 0) api.sendMessage(chunk, event.threadID, event.messageID);
      else api.sendMessage(chunk, event.threadID);
    });
  } catch (error) {
    const status = error.response?.status;
    const message = status === 401
      ? "Groq rejected the API key. Check GROQ_API_KEY."
      : status === 429
        ? "Groq free-tier limit reached. Try again later."
        : status
          ? `Groq request failed (HTTP ${status}).`
          : "Could not reach Groq. Check the connection and try again.";
    return api.sendMessage(message, event.threadID, event.messageID);
  }
};
