const axios = require("axios");
const languageInstruction = require("./aiLanguage");

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

module.exports = async function generateGeminiAnswer(
  prompt,
  apiKey,
  timeout = 60000
) {
  const response = await axios.post(
    GEMINI_API_URL,
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

  const answer = response.data?.candidates?.[0]?.content?.parts
    ?.map(part => part.text || "")
    .join("")
    .trim();

  if (!answer) {
    throw new Error("Gemini returned an empty response.");
  }
  return answer;
};
