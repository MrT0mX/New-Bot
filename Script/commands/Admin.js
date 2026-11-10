const fs = require("fs-extra");
const axios = require("axios");
const moment = require("moment-timezone");

module.exports.config = {
  name: "admin",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Show Owner Info as Text with Image",
  commandCategory: "info",
  usages: "admin",
  cooldowns: 5
};

const IMAGE_URL = "https://i.imgur.com/elZgt87.jpeg";

// A-Z, a-z, 0-9 -> 𝐀𝐁𝐂𝐃 (Mathematical Bold)
function bold(text) {
  return Array.from(text).map(ch => {
    const c = ch.codePointAt(0);
    if (c >= 65 && c <= 90) return String.fromCodePoint(0x1D400 + (c - 65));
    if (c >= 97 && c <= 122) return String.fromCodePoint(0x1D41A + (c - 97));
    if (c >= 48 && c <= 57) return String.fromCodePoint(0x1D7CE + (c - 48));
    return ch;
  }).join("");
}

module.exports.run = async function ({ api, event }) {
  const time = moment().tz("Asia/Dhaka").format("hh:mm:ss A • DD/MM/YYYY");

  const design = `
╔═══════════════════════════╗
║   👑 ${bold("FukeyBot")} 👑   ║
╚═══════════════════════════╝

  ┌─❰ 👤 ${bold("IDENTITY")} ❱─┐
  │  🧑 Name     ➺ ${bold("FukeyBot")}
  │  🤖 Type     ➺ ${bold("MESSENGER BOT")}
  │  ⚙️ Runtime  ➺ ${bold("NODE.JS")}
  └───────────────┘

  ┌─❰ 🌐 ${bold("CONTACT")} ❱─┐
  │  Contact details are not configured.
  └───────────────┘

╔═══════════════════════════╗
║  🕒 ${bold(time)}  ║
║  👑 ${bold("POWERED BY FUKEYBOT")} 👑  ║
╚═══════════════════════════╝
`;

  const cacheDir = __dirname + "/cache";
  const path = cacheDir + "/admin.jpg";
  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });

  try {
    const res = await axios.get(IMAGE_URL, {
      responseType: "arraybuffer",
      timeout: 20000,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
    });
    fs.writeFileSync(path, Buffer.from(res.data));

    return api.sendMessage(
      { body: design, attachment: fs.createReadStream(path) },
      event.threadID,
      () => fs.existsSync(path) && fs.unlinkSync(path),
      event.messageID
    );
  } catch (e) {
    console.log("Image load failed:", e.message);
    return api.sendMessage(design, event.threadID, event.messageID);
  }
};
