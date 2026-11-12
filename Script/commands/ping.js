module.exports.config = {
	name: "ping",
	version: "0.0.3",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Tag toàn bộ thành viên trong nhóm",
	commandCategory: "Box chat",
	usages: "< nội dung >",
	cooldowns: 20
};

module.exports.run = async function({ api, event, args, Threads }) { 
  const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Dhaka").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Dhaka').format('dddd');
  if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝟮'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝟯'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝟰'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝟱'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝟲'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝟳'
const res = await axios.get("https://apiuwuapi.ducdz999.repl.co/images/girl");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
	try {
		var all = (await Threads.getInfo(event.threadID)).participantIDs;
    all.splice(all.indexOf(api.getCurrentUserID()), 1);
	  all.splice(all.indexOf(event.senderID), 1);
		var body = (args.length != 0) ? args.join(" "):"𝗗𝗮̣̂𝘆 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗻𝗮̀𝗼 𝗺𝗮̂́𝘆 𝗰𝗼𝗻 𝗹𝗼̛̣𝗻 🐷", mentions = [], index = 0;
		
    for (let i = 0; i < all.length; i++) {
		    if (i == body.length) body += body.charAt(body.length );
		    mentions.push({
		  	  tag: body,
		  	  id: all[i],
		  	  fromIndex: i
		    });
	    }

		return api.sendMessage({ body: `📣===[ 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 ]===📣\n\n[💬] 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠: ${body}\n\n[⏰] 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${thu} ${gio}\n━━━━━━━━━━━━\n🌸 𝔹𝕆𝕋 ℕ𝕘𝕦𝕪𝕖𝕟 𝕄𝕚𝕟𝕙 𝕋𝕦𝕒𝕟 🌸`, attachment: download, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}