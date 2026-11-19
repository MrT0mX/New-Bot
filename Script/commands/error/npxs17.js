const fs = require("fs");
module.exports.config = {
	name: "npxs17",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs17",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😺")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("👊")==0 || event.body.indexOf("🤧")==0) {
		var msg = {
				body: "রেগে গেলা তো হেরে গেলা কন্টোল করতে শেখো প্রিয়😚🖤-!",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs17.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {
  }
