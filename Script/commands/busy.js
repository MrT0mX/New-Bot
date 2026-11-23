module.exports.config = {
	name: "busy",
	version: "1.0.0",
	permissions: 1,
	credits: "Henry",
	description: "𝐄𝐧𝐚𝐛𝐥𝐞 𝐨𝐫 𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐛𝐮𝐬𝐲 𝐦𝐨𝐝𝐞",
  usages: "[𝐫𝐞𝐚𝐬𝐨𝐧]",
  commandCategory: "Box Chat",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(`🎀─── [𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍] ───🎀\n\n[𝙁𝙪𝙠𝙚𝙮𝘽𝙤𝙩] - 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐛𝐚𝐜𝐤, 𝐨𝐰𝐧𝐞𝐫! 🥰\n\n🎀───── •🌸• ─────🎀`, threadID, () => {
            if (info.tag.length == 0) api.sendMessage("[𝙁𝙪𝙠𝙚𝙮𝘽𝙤𝙩] - 𝐖𝐡𝐢𝐥𝐞 𝐭𝐡𝐞 𝐨𝐰𝐧𝐞𝐫 𝐰𝐚𝐬 𝐚𝐰𝐚𝐲, 𝐧𝐨𝐛𝐨𝐝𝐲 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐞𝐝 𝐭𝐡𝐞𝐦. ❤️", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("[𝙁𝙪𝙠𝙚𝙮𝘽𝙤𝙩] - 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐭𝐡𝐞 𝐥𝐢𝐬𝐭 𝐨𝐟 𝐩𝐞𝐨𝐩𝐥𝐞 𝐰𝐡𝐨 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐞𝐝 𝐭𝐡𝐞 𝐨𝐰𝐧𝐞𝐫 🎀:\n\n" + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;

    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "𝐉𝐮𝐬𝐭 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐞𝐝 𝐭𝐡𝐞 𝐨𝐰𝐧𝐞𝐫 𝐨𝐧𝐜𝐞" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`🎀───[𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍]───🎀\n\n${name.replace("@", "")} 𝐢𝐬 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐛𝐮𝐬𝐲${infoBusy.lido ? ` 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐫𝐞𝐚𝐬𝐨𝐧: ${infoBusy.lido}.\n\n🎀───── •🌸• ─────🎀` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
	await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    const { threadID, senderID, messageID, body } = event;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        var msg = (content.length == 0) ? '[𝙁𝙪𝙠𝙚𝙮𝘽𝙤𝙩] - 𝐓𝐡𝐞 𝐨𝐰𝐧𝐞𝐫 𝐡𝐚𝐬 𝐞𝐧𝐚𝐛𝐥𝐞𝐝 𝐛𝐮𝐬𝐲 𝐦𝐨𝐝𝐞 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐚 𝐫𝐞𝐚𝐬𝐨𝐧 🐧' : `[𝙁𝙪𝙠𝙚𝙲𝘽𝙤𝙭] - 𝐓𝐡𝐞 𝐨𝐰𝐧𝐞𝐫 𝐡𝐚𝐬 𝐞𝐧𝐚𝐛𝐥𝐞𝐝 𝐛𝐮𝐬𝐲 𝐦𝐨𝐝𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐫𝐞𝐚𝐬𝐨𝐧 🐧: ${content}`;
        return api.sendMessage(msg, threadID, messageID);
    }
}