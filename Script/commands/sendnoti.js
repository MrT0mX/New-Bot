/*
» Có lỗi LH FB: fb.com/MrTomXxX
*/
module.exports.config = {
    name: "sendnoti",
    version: "1.1.1",
    hasPermssion: 2,
    credits: "B52",
    description: "Gửi tin nhắn đến tấy cả nhóm và reply để phản hồi",
    commandCategory: "Hệ thống",
    usages: "text",
    cooldowns: 2
};
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Dhaka").format("HH:mm:ss || DD/MM/YYYY");
module.exports.run = async({ api,
    event, Users }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, messageReply: mR, type, body, args } = event; 
    const allTid = global.data.allThreadID || [];
    const atm = await type == "message_reply" ? mR.attachments : atms.length != 0 ? atms : "nofile";
    const content = !args[1] ? "chỉ có tệp" : body.slice(body.indexOf(args[1]));
    if (!args[1] && atm == "nofile") return api.sendMessage(`‼️ Bạn chưa nhập nội dung`, tid, mid);
    var msg = `»🌸 𝐍𝐨𝐭𝐢𝐜𝐞 𝐅𝐫𝐨𝐦 𝐀𝐝𝐦𝐢𝐧 🌸«\n\n👥 𝐆𝐮̛̉𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧: ${(await Users.getData(sid)).name}\n⏱ 𝐓𝐢𝐦𝐞: ${fullTime()}\n━━━━━━━━━━━━\n${content}\n━━━━━━━━━━━━\n\n» 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐯𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧 💬`
    const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
    };
var c1 = 0, c2 = 0;
    for (var idT of allTid) {
      var promise = new Promise (async(r1, r2) => {
 await api.sendMessage(uwu, idT, async(e, i) => {
   if (e) r2(++c2); else r1(++c1)
      return global.client.handleReply.push({
            name: this.config.name,
            messageID: i.messageID,
            author: sid,
            type: "userReply"
        })
      });
    })
  }
promise.then(async(r) => api.sendMessage(`✅ 𝐆𝐮̛̉𝐢 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨̛́𝐢 ${r} 𝐧𝐡𝐨́𝐦`, tid, mid)).catch(async(err) => api.sendMessage(`❌ 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐠𝐮̛̉𝐢 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐨̛́𝐢 ${err} 𝐧𝐡𝐨́𝐦`, tid, mid))
};
module.exports.handleReply = async({ api, event, handleReply: h, Users, Threads }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
    const { ADMINBOT } = global.config;
    switch (h.type) {
        case "userReply": {
            const atm = atms.length != 0 ? atms : "nofile";
            var msg = `📩 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐮̛̀ 𝐔𝐬𝐞𝐫: ${(await Users.getData(sid)).name}\n🎀 𝐍𝐡𝐨́𝐦: ${(await Threads.getData(tid)).threadInfo.threadName}\n⏱ 𝐓𝐢𝐦𝐞: ${fullTime()}\n\n📝 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${atm == "nofile" ? body : "𝐂𝐡𝐢̉ 𝐜𝐨́ 𝐭𝐞̣̂𝐩 𝐭𝐨̛́𝐢 𝐛𝐚̣𝐧"}\n\n» 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐨̛́𝐢 𝐔𝐬𝐞𝐫 💬`
            const uwu = atm == "nofile" ? msg : {
                body: msg,
                attachment: await DownLoad(atm)
            };
          var c1 = 0, c2 = 0;
            for (var idA of ADMINBOT) {
              var promise = new Promise (async(r1, r2) => {
                await api.sendMessage(uwu, idA, async(e, i) => {
     if (e) r2(++c2); else r1(++c1)
                    return global.client.handleReply.push({
                        name: this.config.name,
                        messageID: i.messageID,
                        author: h.author, idThread: tid, idMessage: mid, idUser: sid,
                        type: "adminReply"
                    })
                });
            });
       }; 
          promise.then(async(r1) => api.sendMessage(`📨 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨̛́𝐢 𝐀𝐝𝐦𝐢𝐧 ${(await Users.getData(h.author)).name} 𝐯𝐚̀ ${+r1-1} 𝐀𝐝𝐦𝐢𝐧 𝐤𝐡𝐚́𝐜`, tid, mid)).catch(async(err) => api.sendMessage(`📨 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨̛́𝐢 𝐀𝐝𝐦𝐢𝐧`, tid, mid))
            break;
        };
    case "adminReply": {
        const atm = atms.length != 0 ? atms : "nofile";
        var msg = `📩 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧 ${(await Users.getData(sid)).name}\n⏱ 𝐓𝐢𝐦𝐞: ${fullTime()}\n\n📝 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${atm == "nofile" ? body : "𝐂𝐡𝐢̉ 𝐜𝐨́ 𝐭𝐞̣̂𝐩 𝐭𝐨̛́𝐢 𝐛𝐚̣𝐧"}\n\n» 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐯𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧 💬`
        const uwu = atm == "nofile" ? msg : {
            body: msg,
            attachment: await DownLoad(atm)
        };
        await api.sendMessage(uwu, h.idThread, async(e, i) => {
            if (e) return api.sendMessage(`Error`, tid, mid);
            else api.sendMessage(`📨 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨̛́𝐢 𝐔𝐬𝐞𝐫 ${(await Users.getData(h.idUser)).name} 𝐭𝐚̣𝐢 𝐧𝐡𝐨́𝐦 ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
            return global.client.handleReply.push({
                name: this.config.name,
                messageID: i.messageID,
                author: sid,
                type: "userReply"
            })
        }, h.idMessage);
        break;
    };
  }
};

const DownLoad = async(atm) => {
    var arr = [];
    for (var i = 0; i < atm.length; i++) {
        const nameUrl = request.get(atm[i].url).uri.pathname
        const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
        const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
        await imageDownload.image({
            url: atm[i].url,
            dest: path
        });
        arr.push(fse.createReadStream(path));
        fse.unlinkSync(path);
    }
    return arr;
};