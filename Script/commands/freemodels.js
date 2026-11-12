const getFreeOpenRouterModels = require("../../utils/openRouterModels");
const splitAiMessage = require("../../utils/splitAiMessage");

module.exports.config = {
  name: "freemodels",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "List currently available free OpenRouter models",
  commandCategory: "ai",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  try {
    const models = await getFreeOpenRouterModels();
    const modelList = models.map(model => model.id).join("\n");
    const message = modelList
      ? `Current free OpenRouter models:\n${modelList}\n\nAsk using #model <model-id> <question>`
      : "OpenRouter currently lists no free models.";
    splitAiMessage(message).forEach((chunk, index) => {
      if (index === 0) api.sendMessage(chunk, event.threadID, event.messageID);
      else api.sendMessage(chunk, event.threadID);
    });
  } catch (error) {
    const status = error.response?.status;
    const message = status
      ? `Could not load free models (HTTP ${status}). Try again later.`
      : "Could not load free models. Check the bot's network connection.";
    return api.sendMessage(message, event.threadID, event.messageID);
  }
};
