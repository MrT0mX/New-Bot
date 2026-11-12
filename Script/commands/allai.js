require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateGeminiAnswer = require("../../utils/geminiApi");
const generateOpenRouterAnswer = require("../../utils/openRouterApi");
const generateGroqAnswer = require("../../utils/groqApi");
const generateCerebrasAnswer = require("../../utils/cerebrasApi");
const getAiProviderError = require("../../utils/aiProviderError");
const splitAiMessage = require("../../utils/splitAiMessage");

const MAX_PROMPT_LENGTH = 12000;
const PROVIDER_TIMEOUT_MS = 25000;
let nextProviderIndex = 0;

module.exports.config = {
  name: "ai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Ask available free AI providers with automatic fallback",
  commandCategory: "ai",
  usages: "<your question>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  return answerQuestion(api, event, args.join(" "));
};

async function answerQuestion(api, event, rawPrompt) {
  const prompt = String(rawPrompt || "").trim();
  if (!prompt) {
    return api.sendMessage(
      "ব্যবহার: #ai আপনার প্রশ্ন লিখুন",
      event.threadID,
      event.messageID
    );
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return api.sendMessage(
      `প্রশ্নটি অনেক বড়। ${MAX_PROMPT_LENGTH} অক্ষরের মধ্যে লিখুন।`,
      event.threadID,
      event.messageID
    );
  }

  const providers = getConfiguredProviders();
  if (providers.length === 0) {
    return api.sendMessage(
      "কোনো AI API key সেট করা নেই। .env-এ Gemini, OpenRouter, Groq, অথবা Cerebras-এর key যোগ করুন।",
      event.threadID,
      event.messageID
    );
  }

  const startIndex = nextProviderIndex++ % providers.length;
  const orderedProviders = providers
    .slice(startIndex)
    .concat(providers.slice(0, startIndex));
  const failures = [];

  for (const provider of orderedProviders) {
    try {
      const answer = await provider.generate(
        prompt,
        provider.apiKey,
        PROVIDER_TIMEOUT_MS
      );
      splitAiMessage(answer).forEach((chunk, index) => {
        if (index === 0) {
          api.sendMessage(chunk, event.threadID, event.messageID);
        } else {
          api.sendMessage(chunk, event.threadID);
        }
      });
      return;
    } catch (error) {
      failures.push(getAiProviderError(error, provider.name));
    }
  }

  console.warn(`[allai] All configured free providers failed (${failures.join(", ")}).`);
  return api.sendMessage(
    `সব configured free AI provider ব্যর্থ হয়েছে। কোনো paid model ব্যবহার করা হয়নি।\n${failures.join("\n")}`,
    event.threadID,
    event.messageID
  );
}

function getConfiguredProviders() {
  const providers = [];
  const openRouterKey = (process.env.OPENROUTER_API_KEY || "").trim();
  const geminiKey = (process.env.GEMINI_API_KEY || "").trim();
  const groqKey = (process.env.GROQ_API_KEY || "").trim();
  const cerebrasKey = (process.env.CEREBRAS_API_KEY || "").trim();

  if (openRouterKey) {
    providers.push({
      name: "OpenRouter free models",
      apiKey: openRouterKey,
      generate: generateOpenRouterAnswer
    });
  }
  if (geminiKey) {
    providers.push({
      name: "Gemini free tier",
      apiKey: geminiKey,
      generate: generateGeminiAnswer
    });
  }
  if (groqKey) {
    providers.push({
      name: "Groq free tier",
      apiKey: groqKey,
      generate: generateGroqAnswer
    });
  }
  if (cerebrasKey) {
    providers.push({
      name: "Cerebras Free Trial",
      apiKey: cerebrasKey,
      generate: generateCerebrasAnswer
    });
  }
  return providers;
}
