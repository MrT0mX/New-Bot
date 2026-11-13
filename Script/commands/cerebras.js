require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateCerebrasAnswer = require("../../utils/cerebrasApi");
const getAiProviderError = require("../../utils/aiProviderError");
const splitAiMessage = require("../../utils/splitAiMessage");

const API_KEY = (process.env.CEREBRAS_API_KEY || "").trim();
const MAX_PROMPT_LENGTH = 12000;

module.exports.config = {
  name: "cerebras",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆: ─꯭─⃝‌‌𝐌𝐫𝐓𝐨𝐦𝐗𝐱𝐗",
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
    return api.sendMessage(
      getAiProviderError(error, "Cerebras"),
      event.threadID,
      event.messageID
    );
  }
};
