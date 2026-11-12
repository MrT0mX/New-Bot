const fs = require("fs");
require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const generateGeminiAnswer = require("../../utils/geminiApi");

const dbPath = __dirname + "/gemini_db.json";

// ====== ORIGINAL CREDIT (এটা লক করা) ======
const ORIGINAL_CREDIT = "FukeyBot";

function isCreditValid() {
  return module.exports.config.credits === ORIGINAL_CREDIT;
}

function creditWarning() {
  return (
    "⚠️ 𝗖𝗥𝗘𝗗𝗜𝗧 𝗖𝗛𝗔𝗡𝗚𝗘𝗗!\n\n" +
    "❌ এই কোডের ক্রেডিট পরিবর্তন করা হয়েছে, তাই কমান্ড কাজ করবে না।\n\n" +
    "👑 Original Credit:\n" + ORIGINAL_CREDIT + "\n\n" +
    "✅ ক্রেডিট ঠিক করলে কমান্ড আবার চলবে।"
  );
}

function loadDB() {
  if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, "{}");
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

function saveDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// ====== API কল (fallback সহ) ======
async function fetchAnswer(content) {
  const geminiApiKey = (process.env.GEMINI_API_KEY || "").trim();
  if (!geminiApiKey) {
    throw new Error("Set GEMINI_API_KEY in the .env file to use #gemini.");
  }
  return generateGeminiAnswer(content, geminiApiKey);
}

module.exports.config = {
  name: "gemini",
  version: "1.2",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Ask Gemini 2.5 Flash and reply to answers (free tier)",
  commandCategory: "ai",
  usages: "[question]",
  cooldowns: 5,
  aliases: ["gem"]
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;

  if (!isCreditValid()) {
    return api.sendMessage(creditWarning(), threadID, messageID);
  }

  const content = args.join(" ");

  if (!content) {
    return api.sendMessage("❌ কিছু জিজ্ঞেস করো বেবি ❤️", threadID, messageID);
  }

  return askAI(api, threadID, messageID, senderID, content);
};

// Reply handler
module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, messageReply, body } = event;

  if (!messageReply || !body) return;

  if (!isCreditValid()) {
    return api.sendMessage(creditWarning(), threadID, messageID);
  }

  const db = loadDB();
  if (!db[messageReply.messageID]) return;

  return askAI(api, threadID, messageID, senderID, body);
};

async function askAI(api, threadID, messageID, senderID, content) {
  api.sendMessage(
    "🔎 প্রশ্ন খুঁজতেছি...\n⏳ অপেক্ষা করো বেবি...",
    threadID,
    async (err, info) => {
      if (err) return;
      try {
        const answer = await fetchAnswer(content);

        const ui = `
╭─❍
│ 🤖 AI ASSISTANT
╰───────────────⧕

📝 𝗬𝗼𝘂𝗿 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻:
╭─────────────
${content}
╰─────────────

💬 𝗔𝗜 𝗥𝗲𝗽𝗹𝘆:
╭─────────────
${answer}
╰─────────────

╭─────────────
│ ❤️ Gemini AI Chat
│ 👑 Credits: ${ORIGINAL_CREDIT}
╰─────────────
`;

        api.editMessage(ui, info.messageID);

        const db = loadDB();
        db[info.messageID] = { threadID, senderID, prompt: content };
        saveDB(db);

      } catch (e) {
        api.editMessage("❌ Error: " + e.message, info.messageID);
      }
    },
    messageID
  );
  }
