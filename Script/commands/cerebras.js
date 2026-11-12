require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateCerebrasAnswer = require("../../utils/cerebrasApi");
const splitAiMessage = require("../../utils/splitAiMessage");

const API_KEY = (process.env.CEREBRAS_API_KEY || "").trim();
const MAX_PROMPT_LENGTH = 12000;

module.exports.config = {
  name: "cerebras",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Ask Cerebras Free Trial's GPT-OSS-120B model",
  commandCategory: "ai",
  usages: "<your question>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = args.join(" ").trim();
  if (!prompt) {
    return api.sendMessage("Usage: #cerebras <your question>", event.threadID, event.messageID);
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return api.sendMessage(`Keep your question under ${MAX_PROMPT_LENGTH} characters.`, event.threadID, event.messageID);
  }
  if (!API_KEY) {
    return api.sendMessage("Cerebras is not configured. Add CEREBRAS_API_KEY to .env.", event.threadID, event.messageID);
  }

  try {
    const answer = await generateCerebrasAnswer(prompt, API_KEY);
    splitAiMessage(answer).forEach((chunk, index) => {
      if (index === 0) api.sendMessage(chunk, event.threadID, event.messageID);
      else api.sendMessage(chunk, event.threadID);
    });
  } catch (error) {
    const status = error.response?.status;
    const message = status === 401
      ? "Cerebras rejected the API key. Check CEREBRAS_API_KEY."
      : status === 429
        ? "Cerebras free-trial limit reached. Try again later."
        : status
          ? `Cerebras request failed (HTTP ${status}).`
          : "Could not reach Cerebras. Check the connection and try again.";
    return api.sendMessage(message, event.threadID, event.messageID);
  }
};
