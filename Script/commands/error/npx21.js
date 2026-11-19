const fs = require("fs");
module.exports.config = {
	name: "npx21",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx21v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤔")==0 || event.body.indexOf("😌")==0 || event.body.indexOf("🤔")==0 || event.body.indexOf("😅")==0) {
		var msg = {
				body: "এতো না ভেবে শিবলু কে গফ দে😚🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx21.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
