const CREDITS = "FukeyBot";

module.exports.config = {
  name: "fork",
  version: "2.3.0",
  hasPermssion: 0,
  credits: CREDITS,
  description: "Stable fork system with repo link",
  commandCategory: "other",
  usages: "fork",
  cooldowns: 3,
};

const repoLink = String(process.env.FUKEYBOT_REPOSITORY_URL || "").trim();

module.exports.run = async function ({ api, event }) {
  if (
    module.exports.config.credits !== CREDITS
  ) {
    return api.sendMessage(
      "⚠️ ক্রেডিট অথবা রিপো লিংক চেঞ্জ করা হয়েছে, তাই এই কমান্ড কাজ করছে না।",
      event.threadID,
      event.messageID
    );
  }

  const msg = `
🔥 𝗚𝗢𝗔𝗧 𝗠𝗜𝗥𝗔𝗜 𝗠𝗜𝗫 🔥

━━━━━━━━━━━━━━━━━━━━━━
⚡ 𝗚𝗢𝗔𝗧 𝗠𝗜𝗥𝗔𝗜 𝗠𝗜𝗫 𝗘𝗩𝗘𝗡 𝗣𝗟𝗨𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗
✅ 𝗚𝗢𝗔𝗧 𝗕𝗢𝗧 & 𝗠𝗜𝗥𝗔𝗜 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 - 𝗗𝗨𝗜𝗧𝗔𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘 𝗞𝗔𝗔𝗝 𝗞𝗢𝗥𝗘
━━━━━━━━━━━━━━━━━━━━━━
`;

  const setupVideo = "https://youtu.be/kNHDYw8GoQg";
  const repoNotice = repoLink ? `📌 𝗥𝗘𝗣𝗢 𝗟𝗜𝗡𝗞:\n${repoLink}` : "📌 Repository link is not configured.";
  const linkMsg = `${repoNotice}\n\n🎬 𝗦𝗘𝗧-𝗨𝗣 𝗩𝗜𝗗𝗘𝗢:\n${setupVideo}\n\n⚡ Powered By FukeyBot`;

  return api.sendMessage(msg + "\n" + linkMsg, event.threadID, event.messageID);
};