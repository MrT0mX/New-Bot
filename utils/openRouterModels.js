const axios = require("axios");

const OPENROUTER_MODELS_URL = "https://openrouter.ai/api/v1/models";

module.exports = async function getFreeOpenRouterModels(timeout = 15000) {
  const response = await axios.get(OPENROUTER_MODELS_URL, { timeout });
  const models = response.data?.data;
  if (!Array.isArray(models)) {
    throw new Error("OpenRouter returned an invalid model list.");
  }
  return models.filter(model => typeof model.id === "string" && model.id.endsWith(":free"));
};
