const fs = require("fs");
module.exports.config = {
	name: "npxs16",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs16",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙆‍♀️")==0 || event.body.indexOf("🙋‍♀️")==0 || event.body.indexOf("🙆‍♂️")==0 || event.body.indexOf("🤦‍♂️")==0) {
		var msg = {
				body: "কি গো মাথায় হাত কেনো🐸আমার ঐটা দেখে ভয় পাইছো নাকি জান💚😚-!",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs16.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

