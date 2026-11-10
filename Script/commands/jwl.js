module.exports.config = {
  name: "jwl",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "FukeyBot লিখলে ☠️ রিয়েক্ট দিবে",
  commandCategory: "no prefix",
  usages: "FukeyBot",
  cooldowns: 5
};

const clean = s => String(s)
  .normalize("NFC")
  .replace(/[\u200B-\u200D\uFEFF]/g, "")
  .toLowerCase();

const triggers = [
  "FukeyBot", "FukeyBot ভাই", "FukeyBot ভাইয়া", "FukeyBot বস",
  "fukeybot", "fukeybot vai", "fukeybot bhai", "jewel", "jwl",
  "FukeyBot"
].map(clean);

module.exports.handleEvent = function ({ api, event }) {
  const { messageID, body } = event;
  if (!body) return;

  console.log("[jwl] message:", body);

  const text = clean(body);
  if (triggers.some(t => text.includes(t))) {
    console.log("[jwl] matched, reacting");
    api.setMessageReaction("☠️", messageID, err => {
      if (err) console.log("[jwl] react error:", err);
    }, true);
  }
};

module.exports.run = function () {};
