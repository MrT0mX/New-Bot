module.exports.config = {
    name: "restart",
    version: "2.0.2",
    hasPermssion: 3,
    credits: "Mirai Team",
    description: "Khởi động lai bot",
    commandCategory: "Hệ Thống",
    usages: "restart",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
const axios = global.nodemodule["axios"];

const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Dhaka").format("HH");
    var phut = moment.tz("Asia/Dhaka").format("mm");
    var giay = moment.tz("Asia/Dhaka").format("ss");
const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  if (event.senderID != 100017985245260) return api.sendMessage(`[❗] 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐥𝐚̂̀𝐧 𝐬𝐚𝐮`, event.threadID, event.messageID)
if(args.length == 0) api.sendMessage(`💟 𝗖𝗵𝗮̀𝗼 𝗰𝘂𝗻𝗴 𝗰𝗵𝘂̉ ${name}\n🔰 𝗫𝗶𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗿𝗼𝗻𝗴 𝗴𝗶𝗮̂𝘆 𝗹𝗮́𝘁, 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗿𝗲𝘀𝘁𝗮𝗿𝘁 𝗹𝗮̣𝗶 𝘀𝗮𝘂 𝟭𝟬𝘀`,event.threadID, () =>process.exit(1))
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`🔮 𝗕𝗼𝘁 𝘀𝗲̃ 𝗿𝗲𝘀𝘁𝗮𝗿𝘁 𝗹𝗮̣𝗶 𝘀𝗮𝘂 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 𝘀𝗲𝘁\n⏰𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio}:${phut}:${giay} `, threadID), 0)
setTimeout(() =>
api.sendMessage("⌛ 𝗧𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝗾𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝗿𝗲𝘀𝘁𝗮𝗿𝘁",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}