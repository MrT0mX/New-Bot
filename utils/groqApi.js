const generateCompatibleAnswer = require("./openAICompatibleApi");

module.exports = (prompt, apiKey, timeout = 25000) =>
  generateCompatibleAnswer(
    prompt,
    apiKey,
    timeout,
    "https://api.groq.com/openai/v1/chat/completions",
    "openai/gpt-oss-20b"
  );
