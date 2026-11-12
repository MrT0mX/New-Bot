const axios = require("axios");
const getAiLanguageInstruction = require("./aiLanguage");

module.exports = async function generateCompatibleAnswer(
  prompt,
  apiKey,
  timeout,
  endpoint,
  model
) {
  const response = await axios.post(
    endpoint,
    {
      model,
      messages: [
        { role: "system", content: getAiLanguageInstruction(prompt) },
        { role: "user", content: prompt }
      ],
      max_completion_tokens: 1000
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      timeout
    }
  );

  const answer = response.data?.choices?.[0]?.message?.content?.trim();
  if (!answer) {
    throw new Error("AI provider returned an empty response.");
  }
  return answer;
};
