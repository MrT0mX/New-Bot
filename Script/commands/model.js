require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateOpenRouterAnswer = require("../../utils/openRouterApi");
const getFreeOpenRouterModels = require("../../utils/openRouterModels");
const splitAiMessage = require("../../utils/splitAiMessage");

const API_KEY = (process.env.OPENROUTER_API_KEY || "").trim();
const MAX_PROMPT_LENGTH = 12000;

module.exports.config = {
  name: "model",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Choose an available free OpenRouter model",
  commandCategory: "ai",
  usages: "<model-id> <your question>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const modelID = args.shift();
  const prompt = args.join(" ").trim();
  if (!modelID || !prompt) {
    return api.sendMessage(
      "Usage: #model <model-id> <your question>\nList models with #freemodels.",
      event.threadID,
      event.messageID
    );
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return api.sendMessage(`Keep your question under ${MAX_PROMPT_LENGTH} characters.`, event.threadID, event.messageID);
  }
  if (!API_KEY) {
    return api.sendMessage("OpenRouter is not configured. Add OPENROUTER_API_KEY to .env.", event.threadID, event.messageID);
  }

  try {
    const models = await getFreeOpenRouterModels();
    if (!models.some(model => model.id === modelID)) {
      return api.sendMessage(
        "That model is not currently listed as free. Use #freemodels to see free choices; paid models are blocked.",
        event.threadID,
        event.messageID
      );
    }
    const answer = await generateOpenRouterAnswer(prompt, API_KEY, 25000, modelID);
    splitAiMessage(answer).forEach((chunk, index) => {
      if (index === 0) api.sendMessage(chunk, event.threadID, event.messageID);
      else api.sendMessage(chunk, event.threadID);
    });
  } catch (error) {
    const status = error.response?.status;
    const message = status === 401
      ? "OpenRouter rejected the API key. Check OPENROUTER_API_KEY."
      : status === 429
        ? "OpenRouter free-model rate limit reached. Try again later."
        : status
          ? `OpenRouter request failed (HTTP ${status}).`
          : "Could not reach OpenRouter. Check the connection and try again.";
    return api.sendMessage(message, event.threadID, event.messageID);
  }
};
