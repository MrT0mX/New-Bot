const axios = require("axios");
const getAiLanguageInstruction = require("./aiLanguage");

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

module.exports = async function generateOpenRouterAnswer(
  prompt,
  apiKey,
  timeout = 60000,
  model = "openrouter/free"
) {
  const response = await axios.post(
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

  const content = response.data?.choices?.[0]?.message?.content;
  const answer = Array.isArray(content)
    ? content.map(part => part.text || "").join("").trim()
    : String(content || "").trim();

  if (!answer) {
    throw new Error("OpenRouter returned an empty response.");
  }
  return answer;
};
