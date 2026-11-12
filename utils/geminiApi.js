const axios = require("axios");
const getAiLanguageInstruction = require("./aiLanguage");

const GEMINI_API_BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta";
const PREFERRED_MODEL = "models/gemini-2.5-flash";
const MODEL_LIST_TTL_MS = 30 * 60 * 1000;
let cachedModels;
let cachedModelsAt = 0;

module.exports = async function generateGeminiAnswer(
  prompt,
  apiKey,
  timeout = 60000
) {
  const instruction = getAiLanguageInstruction(prompt);
  let response;
  try {
    response = await generateWithModel(PREFERRED_MODEL, prompt, instruction, apiKey, timeout);
  } catch (error) {
    if (!isModelUnavailable(error)) {
      throw formatGeminiError(error);
    }

    let models;
    try {
      models = await getAvailableFlashModels(apiKey, timeout);
    } catch (modelListError) {
      throw formatGeminiError(modelListError);
    }
    let lastError = error;
    for (const model of models) {
      if (model === PREFERRED_MODEL) continue;
      try {
        response = await generateWithModel(model, prompt, instruction, apiKey, timeout);
        break;
      } catch (retryError) {
        lastError = retryError;
        if (!isModelUnavailable(retryError)) {
          throw formatGeminiError(retryError);
        }
      }
    }
    if (!response) {
      throw new Error(
        "Gemini did not return an available Flash model for this API key.",
        { cause: lastError }
      );
    }
  }

  const answer = response.data?.candidates?.[0]?.content?.parts
    ?.map(part => part.text || "")
    .join("")
    .trim();

  if (!answer) {
    const blockReason = response.data?.promptFeedback?.blockReason;
    throw new Error(
      blockReason
        ? `Gemini blocked this prompt (${blockReason}). Please rephrase it.`
        : "Gemini returned no text for this question."
    );
  }
  return answer;
};

async function generateWithModel(model, prompt, languageInstruction, apiKey, timeout) {
  return axios.post(
    `${GEMINI_API_BASE_URL}/${model}:generateContent`,
    {
      systemInstruction: { parts: [{ text: languageInstruction }] },
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 1000 }
    },
    {
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json"
      },
      timeout
    }
  );
}

async function getAvailableFlashModels(apiKey, timeout) {
  if (cachedModels && Date.now() - cachedModelsAt < MODEL_LIST_TTL_MS) {
    return cachedModels;
  }

  const response = await axios.get(`${GEMINI_API_BASE_URL}/models`, {
    headers: { "x-goog-api-key": apiKey },
    timeout
  });
  const models = response.data?.models;
  if (!Array.isArray(models)) {
    throw new Error("Gemini returned an invalid model list.");
  }

  cachedModels = models
    .filter(model =>
      typeof model.name === "string" &&
      model.name.startsWith("models/gemini-") &&
      /-flash(?:-|$)/i.test(model.name) &&
      !/lite|embedding|image|audio|tts/i.test(model.name) &&
      Array.isArray(model.supportedGenerationMethods) &&
      model.supportedGenerationMethods.includes("generateContent")
    )
    .map(model => model.name)
    .sort((left, right) => right.localeCompare(left, undefined, { numeric: true }));
  cachedModelsAt = Date.now();
  return cachedModels;
}

function isModelUnavailable(error) {
  const status = error.response?.status;
  const message = error.response?.data?.error?.message || error.message || "";
  return status === 404 || (status === 400 && /model.*(not found|not supported|unavailable)/i.test(message));
}

function formatGeminiError(error) {
  const status = error.response?.status;
  if (status === 400) {
    return new Error("Gemini rejected the request. Check the question or the selected model.");
  }
  if (status === 401 || status === 403) {
    return new Error("Gemini rejected the API key or access. Check GEMINI_API_KEY and enable the Gemini API.");
  }
  if (status === 429) {
    return new Error("Gemini free-tier quota/rate limit reached. Try again later.");
  }
  if (status >= 500) {
    return new Error("Gemini is temporarily unavailable. Try again later.");
  }
  if (error.code === "ECONNABORTED") {
    return new Error("Gemini request timed out. Try again shortly.");
  }
  return error;
}
