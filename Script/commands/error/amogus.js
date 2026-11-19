const fs = require("fs");
const path = require("path");

module.exports.config = {
	name: "sus",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sus",
    cooldowns: 5, 
};

function sendSus(api, event) {
	if (!api || !event || !event.threadID) return;

	const path = require("path");
	const attachmentPath = path.join(__dirname, "noprefix", "sus.mp3");
	if (!fs.existsSync(attachmentPath)) return;

	const msg = {
		body: "ඞ",
		attachment: fs.createReadStream(attachmentPath)
	};

	api.sendMessage(msg, event.threadID);
	if (event.messageID) {
		api.setMessageReaction("😱", event.messageID, () => {}, true);
	}
}

module.exports.handleEvent = function({ api, event }) {
	if (!event || typeof event.body !== "string") return;

	const body = event.body.trim().toLowerCase();
	if (body === "amogus" || body === "sus" || body.startsWith("amogus ") || body.startsWith("sus ")) {
		sendSus(api, event);
	}
};

module.exports.run = function({ api, event }) {
	sendSus(api, event);
};

fix this