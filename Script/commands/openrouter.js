require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateOpenRouterAnswer = require("../../utils/openRouterApi");
const getAiProviderError = require("../../utils/aiProviderError");
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
    return api.sendMessage(
      getAiProviderError(error, "OpenRouter"),
      event.threadID,
      event.messageID
    );
  }
};
