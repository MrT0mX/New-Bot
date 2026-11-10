const fs = require("fs-extra");

module.exports.config = {
  name: "help",
  version: "6.1.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "All commands in one serial list + command info",
  commandCategory: "system",
  usages: "[command name]",
  cooldowns: 5
};

// ── 𝙼𝚘𝚗𝚘 𝙵𝚘𝚗𝚝 (𝙰𝙱𝙲𝙳 / 𝚊𝚋𝚌𝚍 / 𝟶𝟷𝟸𝟹) ──
function toMono(text) {
  return Array.from(String(text)).map(c => {
    const code = c.codePointAt(0);
    if (code >= 65 && code <= 90)  return String.fromCodePoint(0x1D670 + code - 65); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D68A + code - 97); // a-z
    if (code >= 48 && code <= 57)  return String.fromCodePoint(0x1D7F6 + code - 48); // 0-9
    return c;
  }).join("");
}

const AUTO_DELETE   = 5 * 60 * 1000;   // ৫ মিনিট পর মেসেজ অটো ডিলিট
const MAX_PAGE_CONTENT_LENGTH = 1400;

// ── 🗑️ অটো ডিলিট ──
function scheduleDelete(api, info) {
  if (!info || !info.messageID) return;
  const timer = setTimeout(() => {
    try { api.unsendMessage(info.messageID); } catch (e) {}
  }, AUTO_DELETE);
  if (timer.unref) timer.unref();
}

function sendAutoDelete(api, msg, threadID, replyID) {
  return api.sendMessage(msg, threadID, (err, info) => {
    if (err) {
      console.error("[HELP] Failed to send help response:", err);
      return;
    }
    scheduleDelete(api, info);
  }, replyID);
}

// ── config.json পড়া ──
function readConfig() {
  try {
    const configPath = __dirname + "/../../config.json";
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, "utf-8"));
    }
  } catch (e) {}
  return {};
}

function getPrefix() {
  const cfgJson = readConfig();
  return cfgJson.PREFIX || global.config?.PREFIX || "!";
}

// ── 📋 নির্দিষ্ট কমান্ডের তথ্য ──
async function sendCommandInfo(api, event, commandName) {
  const { threadID, messageID } = event;
  const { commands } = global.client;
  const prefix = getPrefix();

  const cmd = typeof global.client.resolveCommand === "function"
    ? global.client.resolveCommand(commandName)
    : [...commands.entries()].find(([name]) => name.toLowerCase() === commandName.toLowerCase())?.[1];
  if (!cmd) {
    return sendAutoDelete(api,
      `╔════════════════╗\n║  ❌ ${toMono("NOT FOUND")} ❌  ║\n╚════════════════╝\n\n` +
      `「 ${toMono(commandName)} 」 নামে কোনো কমান্ড নেই!\n\n` +
      `📌 ${toMono("All commands")}: ${toMono(prefix + "help")}`,
      threadID, messageID
    );
  }

  const cfg = cmd.config || {};
  const cfgJson = readConfig();
  const botName = cfgJson.BOTNAME || "⎯꯭𓆩꯭𝆺𝅥😻⃞𝐑⃞𝐈⃞𝐘⃞𝐀⃞༢࿐";
  const ownerName = cfgJson.OWNER_NAME || "FukeyBot";

  const permMap = {
    0: "👤 " + toMono("All User"),
    1: "🛡️ " + toMono("Group Admin"),
    2: "👑 " + toMono("Bot Admin"),
    3: "🔱 " + toMono("Owner")
  };
  const perm = permMap[cfg.hasPermssion] || permMap[0];

  const infoText =
`╔════════════════╗
║  ✨ ${toMono("COMMAND INFO")} ✨
╠════════════════╣
║ 🔖 ${toMono("Name")} ⇢ ${toMono(cfg.name || commandName)}
║ 📄 ${toMono("Usage")} ⇢ ${toMono(cfg.usages || "No usage")}
║ 📜 ${toMono("Desc")} ⇢ ${toMono(cfg.description || "No description")}
║ 🔑 ${toMono("Perm")} ⇢ ${perm}
║ 👨‍💻 ${toMono("Credit")} ⇢ ${cfg.credits || "Unknown"}
║ 📂 ${toMono("Category")} ⇢ ${toMono(cfg.commandCategory || "system")}
║ ⏳ ${toMono("Cooldown")} ⇢ ${toMono(cfg.cooldowns || 0)}s
╠════════════════╣
║ ⚙ ${toMono("Prefix")} ⇢ ${toMono(prefix)}
║ 🤖 ${toMono("Bot")} ⇢ ${botName}
║ 👑 ${toMono("Owner")} ⇢ ${ownerName}
╚════════════════╝`;

  return sendAutoDelete(api, infoText, threadID, messageID);
}

// ── 🔥 Main Help Function ──
async function sendHelp(api, event, args) {
  const helpArgs = (Array.isArray(args) ? args : [])
    .map((arg) => String(arg).trim())
    .filter(Boolean);
  const firstArg = helpArgs[0] ? helpArgs[0].toLowerCase() : "";
  if (firstArg === "page") {
    const requestedPage = Number(helpArgs[1]);
    if (!Number.isInteger(requestedPage) || requestedPage < 1) {
      return sendAutoDelete(api, `ব্যবহার: ${toMono(getPrefix())}help page <number>`, event.threadID, event.messageID);
    }
    return sendCommandPage(api, event, requestedPage);
  }

  if (helpArgs.length > 0) {
    return sendCommandInfo(api, event, helpArgs[0]);
  }

  return sendCommandPage(api, event, 1);
}

function sendCommandPage(api, event, requestedPage) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const prefix = getPrefix();

  // সব কমান্ড A-Z সিরিয়ালে
  const allCmds = [...new Set(
    [...commands.keys()].map(n => (n || "").trim()).filter(Boolean)
  )].sort((a, b) => a.localeCompare(b));

  const rows = allCmds.map((cmd, index) =>
    `【${toMono(String(index + 1))}】 ➜ ${toMono(cmd)}`
  );
  const pages = [];
  let pageRows = [];
  let pageLength = 0;

  for (const row of rows) {
    if (pageRows.length > 0 && pageLength + row.length + 1 > MAX_PAGE_CONTENT_LENGTH) {
      pages.push(pageRows);
      pageRows = [];
      pageLength = 0;
    }
    pageRows.push(row);
    pageLength += row.length + 1;
  }
  if (pageRows.length > 0 || pages.length === 0) pages.push(pageRows);

  if (requestedPage > pages.length) {
    return sendAutoDelete(
      api,
      `এই পেজটি নেই। মোট ${pages.length}টি পেজ আছে।\nব্যবহার: ${toMono(prefix)}help page <1-${pages.length}>`,
      threadID,
      messageID
    );
  }

  const page = pages[requestedPage - 1];
  const finalText =
`┏━━━━━━━━━━━━━━━━┓
   ✿ ${toMono("COMMAND LIST")} ✿
┗━━━━━━━━━━━━━━━━┛
${page.join("\n")}
┏━━━━━━━━━━━━━━━━┓
  ✦ ${toMono("Total")}: ${toMono(allCmds.length)} ${toMono("Commands")} ✦
  ✦ ${toMono("Page")} ${toMono(requestedPage)}/${toMono(pages.length)} ✦
  📌 ${toMono("Info")}: ${toMono(prefix)}${toMono("help")} ${toMono("<cmd>")}
  📖 ${toMono("More")}: ${toMono(prefix)}${toMono("help page")} ${toMono("<number>")}
┗━━━━━━━━━━━━━━━━┛`;

  return sendAutoDelete(api, finalText, threadID, messageID);
}

// ── শুধু prefix দিয়ে চলবে ──
module.exports.run = async function ({ api, event, args }) {
  return sendHelp(api, event, args);
};
