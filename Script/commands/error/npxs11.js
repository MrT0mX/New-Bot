const fs = require("fs");
module.exports.config = {
	name: "npxs11",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs11",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😷")==0 || event.body.indexOf("🤧")==0 || event.body.indexOf("🤐")==0 || event.body.indexOf("🤧")==0) {
		var msg = {
				body: "এ তুই এমন করস কিল্লায়🙄😝তোর কি ঠান্ডা লাইগা সর্দি হয়েছে নাকি🥱\n",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs11.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
