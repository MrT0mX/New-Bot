const axios = require("axios");
const getAiLanguageInstruction = require("./aiLanguage");
const getFreeOpenRouterModels = require("./openRouterModels");

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const FREE_MODEL_RETRIES = 3;

module.exports = async function generateOpenRouterAnswer(
  prompt,
  apiKey,
  timeout = 60000,
  model = "openrouter/free"
) {
  let response;
  try {
    response = await requestModel(prompt, apiKey, timeout, model);
  } catch (error) {
    if (model !== "openrouter/free" || error.response?.status !== 429) {
      throw error;
    }

    let freeModels;
    try {
      freeModels = await getFreeOpenRouterModels(timeout);
    } catch {
      throw error;
    }

    const candidates = freeModels
      .map(item => item.id)
      .filter(id => id !== model)
      .sort(() => Math.random() - 0.5)
      .slice(0, FREE_MODEL_RETRIES);
    let lastError = error;

    for (const freeModel of candidates) {
      try {
        response = await requestModel(prompt, apiKey, timeout, freeModel);
        break;
      } catch (retryError) {
        lastError = retryError;
        if (![404, 429].includes(retryError.response?.status)) {
          throw retryError;
        }
      }
    }
    if (!response) throw lastError;
  }

  const content = response.data?.choices?.[0]?.message?.content;
  const answer = Array.isArray(content)
    ? content.map(part => part.text || "").join("").trim()
    : String(content || "").trim();

  if (!answer) {
    throw new Error("OpenRouter returned an empty response.");
  }
  return answer;
};

function requestModel(prompt, apiKey, timeout, model) {
  return axios.post(
    OPENROUTER_API_URL,
    {
      model,
      messages: [
        { role: "system", content: getAiLanguageInstruction(prompt) },
        { role: "user", content: prompt }
      ],
      max_tokens: 1000
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      timeout
    }
  );
}
