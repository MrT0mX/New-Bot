require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateGroqAnswer = require("../../utils/groqApi");
const getAiProviderError = require("../../utils/aiProviderError");
const splitAiMessage = require("../../utils/splitAiMessage");

const API_KEY = (process.env.GROQ_API_KEY || "").trim();
const MAX_PROMPT_LENGTH = 12000;

module.exports.config = {
  name: "groq",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆: ─꯭─⃝‌‌𝐌𝐫𝐓𝐨𝐦𝐗𝐱𝐗",
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
    return api.sendMessage(
      getAiProviderError(error, "Groq"),
      event.threadID,
      event.messageID
    );
  }
};
