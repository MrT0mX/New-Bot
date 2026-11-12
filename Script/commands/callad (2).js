module.exports.config = {
	name: "callad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "Report bot's error to admin or comment",
	commandCategory: "group",
	usages: "[Error encountered or comments]",
	cooldowns: 5
}, module.exports.handleReply = async function({
	api: e,
	args: n,
	event: a,
	Users: s,
	handleReply: o
}) {
	var i = await s.getNameUser(a.senderID);
	switch (o.type) {
		case "reply":
			var t = global.config.ADMINBOT;
			for (let n of t) e.sendMessage({
				body: "📄Feedback from " + i + ":\n" + a.body,
				mentions: [{
					id: a.senderID,
					tag: i
				}]
			}, n, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				messageID: n.messageID,
				messID: a.messageID,
				author: a.senderID,
				id: a.threadID,
				type: "calladmin"
			})));
			break;
		case "calladmin":
			e.sendMessage({
				body: `📌Feedback from admin ${i} to you:\n--------\n${a.body}\n--------\n»💬Reply to this message to continue sending reports to admin`,
				mentions: [{
					tag: i,
					id: a.senderID
				}]
			}, o.id, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				author: a.senderID,
				messageID: n.messageID,
				type: "reply"
			})), o.messID)
	}
}, module.exports.run = async function({
	api: e,
	event: n,
	args: a,
	Users: s,
	Threads: o
}) {
	if (!a[0]) return e.sendMessage("You have not entered the content to report", n.threadID, n.messageID);
	let i = await s.getNameUser(n.senderID);
	var t = n.senderID,
		d = n.threadID;
	let r = (await o.getData(n.threadID)).threadInfo;
	var l = require("moment-timezone").tz("Asia/Dhaka").format("HH:mm:ss D/MM/YYYY");
	e.sendMessage(`At: ${l}\nYour report has been sent to the bot admins`, n.threadID, (() => {
		var s = global.config.ADMINBOT;
		for (let o of s) {
			let s = r.threadName;
			e.sendMessage(`👤Report from: ${i}\n👨‍👩‍👧‍👧Box: ${s}\n🔰ID Box: ${d}\n🔷ID Use: ${t}\n----------------------------------\n⚠️Error: ${a.join(" ")}\n----------------------------------\nTime: ${l}`, o, ((e, a) => global.client.handleReply.push({
				name: this.config.name,
				messageID: a.messageID,
				author: n.senderID,
				messID: n.messageID,
				id: d,
				type: "calladmin"
			})))
		}
	}))
};\n----------------\n⚠Error: ${args.join(
            " "
          )}\n----------------\nTime: ${gio}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "calladmin"
            })
        );
    }
    }
  );
};vent.senderID,
              id: event.threadID,
              type: "calladmin"
            }));
            for (var b of s) {
              fs.unlinkSync(b);
            }
          }
        }
        break;
      }
      case "calladmin": {
        if (s.length == 0) {
          api.sendMessage({ body: `[📌] Feedback from admin ${name} to you:\n\n[💬] Content: ${(event.body) || "no reply 🌸 "}\n\n» Reply to this message if you want to continue sending admin reports`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            type: "reply"
          }), handleReply.messID);
        }
        else {
          api.sendMessage({ body: `[📌] Feedback from admin ${name} to you:\n\n[💬] Content: ${(event.body) || "only files with no reply 🌸 "}\n[💌] Admin files sent to you\n\n» Reply to this message if you want to continue sending admin reports`, attachment: l, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            type: "reply"
          }), handleReply.messID);
          for (var b of s) {
            fs.unlinkSync(b);
          }
        }
        break;
      }
    }
  }
  catch (ex) {
    console.log(ex);
  }
};

module.exports.run = async function({ api, event, Threads, args, Users }) {
  try {
    var s = [];
    var l = [];
    const fs = require('fs-extra');
    const { join } = require('path');
    const axios = require('axios');
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length || 20;
    if (event.messageReply) {
    if (event.messageReply.attachments.length != 0) {
      for (var p of event.messageReply.attachments) {
        var result = '';
        for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
        if (p.type == 'photo') {
          var e = 'jpg';
        }
        if (p.type == 'video') {
          var e = 'mp4';
        }
        if (p.type == 'audio') {
          var e = 'mp3';
        }
        if (p.type == 'animated_image') {
          var e = 'gif';
        }
        var o = join(__dirname, 'cache', `${result}.${e}`);
        let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
        fs.writeFileSync(o, Buffer.from(m, "utf-8"));
        s.push(o);
        l.push(fs.createReadStream(o));
      }
    }
  }
    if (!args[0] && event.messageReply.attachments.length == 0)
      return api.sendMessage(`You haven't entered what to report 📋`,
        event.threadID,
        event.messageID
      );

    var name = (await Users.getData(event.senderID)).name;
    var idbox = event.threadID;

    var datathread = (await Threads.getData(event.threadID)).threadInfo;
    var namethread = datathread.threadName;
    var uid = event.senderID;

    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Dhaka").format("HH:mm:ss D/MM/YYYY");
    var soad = global.config.ADMINBOT.length;
    api.sendMessage(`[🤖] - Bot has just successfully sent your message to ${soad} Admin 🍄 \n[⏰] - Time: ${gio}`,
      event.threadID,
      () => {
        var idad = global.config.ADMINBOT;
        if (s.length == 0) {
          for (let ad of idad) {
            api.sendMessage({ body: `📱[ CALL ADMIN ]📱 \n\n\n[👤] Report from: ${name}\n[❗] ID User ${uid}\n[🗣️] BOX: ${namethread}\n[🔰] ID BOX: ${idbox}\n\n[💌] Inbox: ${args.join(
              " "
            )}\n[⏰] Time: ${gio}`, mentions: [{ id: event.senderID, tag: name }] },
              ad, (error, info) =>
              global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                messID: event.messageID,
                id: idbox,
                type: "calladmin"
              })
            );
          }
        }
        else {
          for (let ad of idad) {
            api.sendMessage({
              body: `📱 ===[CALL ADMIN]====📱\n\n\n[👤] Report from: ${name}\n[❗] ID User ${uid}\n[ 👧 👩 👧 👨 ] BOX: ${namethread}\n[🔰] ID BOX: ${idbox}\n\n[💌] Inbox: ${(args.join(
                " "
              )) || "only files that do not have report ❤️ content"}\n[⏰] Time: ${gio}\n[📌] Attach a file`, attachment: l, mentions: [{ id: event.senderID, tag: name }]
            },
              ad, (error, info) =>
              global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                messID: event.messageID,
                id: idbox,
                type: "calladmin"
              })
            );
          }
          for (var b of s) {
            fs.unlinkSync(b);
          }
        }
      }
      , event.messageID);
  }
  catch (ex) {
    console.log(ex);
  }
};    , event.messageID);
  }
  catch (ex) {
    console.log(ex);
  }
};