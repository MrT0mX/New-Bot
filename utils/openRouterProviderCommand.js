require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const generateOpenRouterAnswer = require("./openRouterApi");
const getFreeOpenRouterModels = require("./openRouterModels");
const splitAiMessage = require("./splitAiMessage");

const MAX_PROMPT_LENGTH = 12000;

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

        const model = matchingModels[Math.floor(Math.random() * matchingModels.length)];
        const answer = await generateOpenRouterAnswer(
          prompt,
          apiKey,
          25000,
          model.id
        );
        splitAiMessage(answer).forEach((chunk, index) => {
          if (index === 0) {
            api.sendMessage(chunk, event.threadID, event.messageID);
          } else {
            api.sendMessage(chunk, event.threadID);
          }
        });
      } catch (error) {
        const status = error.response?.status;
        const message = status === 401
          ? "OpenRouter rejected the API key. Check OPENROUTER_API_KEY."
          : status === 429
            ? "OpenRouter free-model rate limit reached. Try again later."
            : status
              ? `OpenRouter request failed (HTTP ${status}). Try again later.`
              : "Could not reach OpenRouter. Check the connection and try again.";
        return api.sendMessage(message, event.threadID, event.messageID);
      }
    }
  };
};
