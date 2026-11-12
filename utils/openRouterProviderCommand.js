require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const generateOpenRouterAnswer = require("./openRouterApi");
const getAiProviderError = require("./aiProviderError");
const getFreeOpenRouterModels = require("./openRouterModels");
const splitAiMessage = require("./splitAiMessage");

const MAX_PROMPT_LENGTH = 12000;
const FREE_MODEL_RETRIES = 3;

module.exports = function createOpenRouterProviderCommand({
  name,
  provider,
  displayName
}) {
  const apiKey = (process.env.OPENROUTER_API_KEY || "").trim();

  return {
    config: {
      name,
      version: "1.0.0",
      hasPermssion: 0,
      credits: "FukeyBot",
      description: `Use currently available free ${displayName} models via OpenRouter`,
      commandCategory: "ai",
      usages: "<your question>",
      cooldowns: 5
    },

    run: async function ({ api, event, args }) {
      const prompt = args.join(" ").trim();
      if (!prompt) {
        return api.sendMessage(
          `Usage: #${name} <your question>`,
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
      if (!apiKey) {
        return api.sendMessage(
          "OpenRouter is not configured. Add OPENROUTER_API_KEY to .env.",
          event.threadID,
          event.messageID
        );
      }

      try {
        const models = await getFreeOpenRouterModels();
        const matchingModels = models.filter(model =>
          model.id.toLowerCase().startsWith(`${provider}/`)
        );
        if (matchingModels.length === 0) {
          return api.sendMessage(
            `OpenRouter currently has no listed free ${displayName} model. No paid model was used.`,
            event.threadID,
            event.messageID
          );
        }

        const startIndex = Math.floor(Math.random() * matchingModels.length);
        const candidates = matchingModels
          .slice(startIndex)
          .concat(matchingModels.slice(0, startIndex))
          .slice(0, FREE_MODEL_RETRIES);
        let answer;
        let lastError;

        for (const model of candidates) {
          try {
            answer = await generateOpenRouterAnswer(prompt, apiKey, 25000, model.id);
            break;
          } catch (error) {
            lastError = error;
            if (![404, 429].includes(error.response?.status)) {
              throw error;
            }
          }
        }
        if (!answer) throw lastError;

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
    }
  };
};
