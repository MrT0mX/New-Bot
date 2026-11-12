require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateOpenRouterAnswer = require("../../utils/openRouterApi");
const splitAiMessage = require("../../utils/splitAiMessage");

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const MAX_PROMPT_LENGTH = 12000;

module.exports.config = {
  name: "openrouter",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Ask an AI using OpenRouter's free model router",
  commandCategory: "ai",
  usages: "<your question>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = args.join(" ").trim();

  if (!prompt) {
    return api.sendMessage(
      "Usage: #openrouter <your question>",
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
  if (!OPENROUTER_API_KEY.trim()) {
    return api.sendMessage(
      "OpenRouter is not configured. Add OPENROUTER_API_KEY to the .env file.",
      event.threadID,
      event.messageID
    );
  }

  try {
    const answer = await generateOpenRouterAnswer(prompt, OPENROUTER_API_KEY.trim());
    splitAiMessage(answer).forEach((chunk, index) => {
      if (index === 0) {
        api.sendMessage(chunk, event.threadID, event.messageID);
      } else {
        api.sendMessage(chunk, event.threadID);
      }
    });
  } catch (error) {
    const status = error.response?.status;
    let message = "Could not reach OpenRouter. Check the bot's network connection and try again.";
    if (status === 401) {
      message = "OpenRouter rejected the API key. Check OPENROUTER_API_KEY.";
    } else if (status === 429) {
      message = "OpenRouter's free models are temporarily rate-limited or unavailable. Try again later.";
    } else if (status) {
      message = `OpenRouter request failed (HTTP ${status}). Try again later.`;
    } else if (error.message === "OpenRouter returned an empty response.") {
      message = error.message;
    }
    return api.sendMessage(message, event.threadID, event.messageID);
  }
};
