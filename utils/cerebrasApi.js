const generateCompatibleAnswer = require("./openAICompatibleApi");

module.exports = (prompt, apiKey, timeout = 25000) =>
  generateCompatibleAnswer(
    prompt,
    apiKey,
    timeout,
    "https://api.cerebras.ai/v1/chat/completions",
    "gpt-oss-120b"
  );
