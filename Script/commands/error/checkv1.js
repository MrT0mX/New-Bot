
const moment = require('moment-timezone');
const fs = require('fs');
module.exports.config = {
	name: "checkv1", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "beta", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "MrTomXxX", // Công nhận module sở hữu là ai
	description: "JUST CHECKTT", // Thông tin chi tiết về lệnh
	commandCategory: "For users", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[all]", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
};

const monthToMSObj = {
	1: 31 * 24 * 60 * 60 * 1000,
	2: 28 * 24 * 60 * 60 * 1000,
	3: 31 * 24 * 60 * 60 * 1000,
	4: 30 * 24 * 60 * 60 * 1000,
	5: 31 * 24 * 60 * 60 * 1000,
	6: 30 * 24 * 60 * 60 * 1000,
	7: 31 * 24 * 60 * 60 * 1000,
	8: 31 * 24 * 60 * 60 * 1000,
	9: 30 * 24 * 60 * 60 * 1000,
	10: 31 * 24 * 60 * 60 * 1000,
	11: 30 * 24 * 60 * 60 * 1000,
	12: 31 * 24 * 60 * 60 * 1000
}


//FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ
const checkTime = (time) => new Promise((resolve) => {
	time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
	const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
	yr = time[2] - 1970;
	yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
	yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
	monthToMS = 0;
	for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
	if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
	dayToMS = time[0] * 24 * 60 * 60 * 1000;
	hourToMS = time[3] * 60 * 60 * 1000;
	minuteToMS = time[4] * 60 * 1000;
	secondToMS = time[5] * 1000;
	oneDayToMS = 24 * 60 * 60 * 1000;
	timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
	resolve(timeMs);
});

const tt = (yesterDay, toDay, time) => new Promise((resolve) => {
	if(yesterDay == 0) resolve("No stats yet");
	if(toDay == 0) resolve("No stats yet");
	let hqua = yesterDay % 24;
	let hnay = toDay % time;
	let kqua = hqua % hnay * 100;
	resolve(kqua.toFixed(2) + "%");
});

module.exports.handleEvent = async ({ api, event, args, handleEvent }) => {
    const { threadID, messageID, senderID } = event;
	const path = __dirname + '/cache/checkttDay.json';
	if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
	let data = JSON.parse(fs.readFileSync(path));
	var timeVN = moment().tz('Asia/Dhaka').format('DD_MM_YYYY_HH_mm_ss');
	var time = timeVN.split("_");
	var time1 = await checkTime(time);
	var time2 = await new Date(time1)
	var time3 = time2.getDay();
	if(!data[threadID]) data[threadID] = {};
	if(!data[threadID][time3]) data[threadID][time3] = {};
	if(!data[threadID][time3].user) data[threadID][time3].user = {};
	if(!data[threadID][time3].user[senderID]) data[threadID][time3].user[senderID] = {yesterDay: 0, today: 0, weekday: 0};
	if(data[threadID][time3 - 1]) {
		for(let i in data[threadID][time3 - 1].user) {
			if(!data[threadID][time3].user[i]) data[threadID][time3].user[i] = {yesterDay: 0, today: 0, weekday: 0};
			data[threadID][time3].user[i].yesterDay = data[threadID][time3 - 1].user[i].today;
			data[threadID][time3].user[i].weekday = data[threadID][time3 - 1].user[i].weekday;
		}
		data[threadID][time3 - 1] = {};
	} else if(data[threadID][time3 + 6]) {
		for(let i in data[threadID][time3 + 6].user) {
			if(!data[threadID][time3].user[i]) data[threadID][time3].user[i] = {yesterDay: 0, today: 0, weekday: 0};
			data[threadID][time3].user[i].yesterDay = data[threadID][time3 + 6].user[i].today;
			data[threadID][time3].user[i].weekday = data[threadID][time3 + 6].user[i].weekday;
		}
		data[threadID][time3 + 6] = {};
	}
	if(time3 - 1 == 0) {
		for(let i in data[threadID][time3].user) {
			data[threadID][time3].user[i].weekday = 0;
		}
	}
	let toDay = data[threadID][time3].user[senderID].today;
	let weekDay = data[threadID][time3].user[senderID].weekday;
	toDay += 1;
	weekDay += 1;
	data[threadID][time3].user[senderID].today = toDay;
	data[threadID][time3].user[senderID].weekday = weekDay;
	fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

module.exports.run = async ({ api, event, args, Currencies, Users }) => {
	const { threadID, messageID, senderID } = event;
	const path = __dirname + '/cache/checkttDay.json';
	if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
	let data = JSON.parse(fs.readFileSync(path));
	var timeVN = moment().tz('Asia/Dhaka').format('DD_MM_YYYY_HH_mm_ss');
	var time = timeVN.split("_");
	var time1 = await checkTime(time);
	var time2 = await new Date(time1)
	var time3 = time2.getDay();
	let mention = Object.keys(event.mentions)
	if(args[0] == "all") {
		var storage = [], exp = [];
		for(let i in data[threadID][time3].user) storage.push({"name": await Users.getNameUser(i), "exp": data[threadID][time3].user[i].weekday});
		storage.sort(function (a, b) { return b.exp - a.exp });
		let msg = "==「INTERACT TEST」==\n";
		msg += `\n👤: The leader is: ${storage[0].name} with ${storage[0].exp} message`;
		for(let i = 1; i < storage.length; i++) {
			msg += `\n${i+1}. ${storage[i].name}: ${storage[i].exp} message`;
		}
		let sum = 0;
		for(let i in data[threadID][time3].user) {
			sum += data[threadID][time3].user[i].weekday;
		} 
		msg += `\n» Total number of messages in the box in the past week: ${sum}`;
		return api.sendMessage(msg, threadID);
	} else if(mention[0]) {
		let idUser = mention[0];
		let nameUser = await Users.getNameUser(idUser);
		const yesterDay = data[threadID][time3].user[idUser].yesterDay;
		const today = data[threadID][time3].user[idUser].today;
		const weekDay = data[threadID][time3].user[idUser].weekday;
		var storage = [], exp = [];
		const dataThread = await api.getThreadInfo(event.threadID);
		for (const value of dataThread.userInfo) storage.push({"id" : value.id, "name": value.name});
		for (const user of storage) {
			const countMess = await Currencies.getData(user.id);
			exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
		}
		exp.sort(function (a, b) { return b.exp - a.exp });
		const rank = exp.findIndex(e => parseInt(e.uid) == parseInt(mention[0])) + 1;
		const infoUser = exp[rank - 1];
		let msg, test = await tt(yesterDay, today, time[3]);
		if(isNaN(test)) {
			msg = "thống kê chưa rõ ràng";
		} else {
			msg = await tt(yesterDay, today, time[3]);
		}
		return api.sendMessage(`=== ${nameUser} ===\n🙆‍♂️ so much news: ${infoUser.exp}\n🐸 𝐌𝐮̛́𝐜 𝐝𝐨̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜: ${msg}\n⏱️ 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒉𝒐̂𝒎 𝒒𝒖𝒂: ${yesterDay}\n⏰ 𝘛𝘰̂̉𝘯𝘨 𝘴𝘰̂́ 𝘵𝘪𝘯 𝘯𝘩𝘢̆́𝘯 𝘩𝘰̂𝘮 𝘯𝘢𝘺: ${today}\n🖤 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒓𝒐𝒏𝒈 𝒕𝒖𝒂̂̀𝒏: ${weekDay}`, threadID, messageID);
	} else {const moment = require('moment-timezone');
const fs = require('fs');
module.exports.config = {
	name: "check", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "beta", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "TruongMini + Adonis", // Công nhận module sở hữu là ai
	description: "JUST CHECKTT", // Thông tin chi tiết về lệnh
	commandCategory: "Dành cho người dùng", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[all]", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
};

const monthToMSObj = {
	1: 31 * 24 * 60 * 60 * 1000,
	2: 28 * 24 * 60 * 60 * 1000,
	3: 31 * 24 * 60 * 60 * 1000,
	4: 30 * 24 * 60 * 60 * 1000,
	5: 31 * 24 * 60 * 60 * 1000,
	6: 30 * 24 * 60 * 60 * 1000,
	7: 31 * 24 * 60 * 60 * 1000,
	8: 31 * 24 * 60 * 60 * 1000,
	9: 30 * 24 * 60 * 60 * 1000,
	10: 31 * 24 * 60 * 60 * 1000,
	11: 30 * 24 * 60 * 60 * 1000,
	12: 31 * 24 * 60 * 60 * 1000
}


//FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ
const checkTime = (time) => new Promise((resolve) => {
	time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
	const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
	yr = time[2] - 1970;
	yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
	yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
	monthToMS = 0;
	for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
	if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
	dayToMS = time[0] * 24 * 60 * 60 * 1000;
	hourToMS = time[3] * 60 * 60 * 1000;
	minuteToMS = time[4] * 60 * 1000;
	secondToMS = time[5] * 1000;
	oneDayToMS = 24 * 60 * 60 * 1000;
	timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
	resolve(timeMs);
});

const tt = (yesterDay, toDay, time) => new Promise((resolve) => {
	if(yesterDay == 0) resolve("chưa có số liệu thống kê");
	if(toDay == 0) resolve("chưa có số liệu thống kê");
	let hqua = yesterDay % 24;
	let hnay = toDay % time;
	let kqua = hqua % hnay * 100;
	resolve(kqua.toFixed(2) + "%");
});

module.exports.handleEvent = async ({ api, event, args, handleEvent }) => {
    const { threadID, messageID, senderID } = event;
	const path = __dirname + '/cache/checkttDay.json';
	if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
	let data = JSON.parse(fs.readFileSync(path));
	var timeVN = moment().tz('Asia/Dhaka').format('DD_MM_YYYY_HH_mm_ss');
	var time = timeVN.split("_");
	var time1 = await checkTime(time);
	var time2 = await new Date(time1)
	var time3 = time2.getDay();
	if(!data[threadID]) data[threadID] = {};
	if(!data[threadID][time3]) data[threadID][time3] = {};
	if(!data[threadID][time3].user) data[threadID][time3].user = {};
	if(!data[threadID][time3].user[senderID]) data[threadID][time3].user[senderID] = {yesterDay: 0, today: 0, weekday: 0};
	if(data[threadID][time3 - 1]) {
		for(let i in data[threadID][time3 - 1].user) {
			if(!data[threadID][time3].user[i]) data[threadID][time3].user[i] = {yesterDay: 0, today: 0, weekday: 0};
			data[threadID][time3].user[i].yesterDay = data[threadID][time3 - 1].user[i].today;
			data[threadID][time3].user[i].weekday = data[threadID][time3 - 1].user[i].weekday;
		}
		data[threadID][time3 - 1] = {};
	} else if(data[threadID][time3 + 6]) {
		for(let i in data[threadID][time3 + 6].user) {
			if(!data[threadID][time3].user[i]) data[threadID][time3].user[i] = {yesterDay: 0, today: 0, weekday: 0};
			data[threadID][time3].user[i].yesterDay = data[threadID][time3 + 6].user[i].today;
			data[threadID][time3].user[i].weekday = data[threadID][time3 + 6].user[i].weekday;
		}
		data[threadID][time3 + 6] = {};
	}
	if(time3 - 1 == 0) {
		for(let i in data[threadID][time3].user) {
			data[threadID][time3].user[i].weekday = 0;
		}
	}
	let toDay = data[threadID][time3].user[senderID].today;
	let weekDay = data[threadID][time3].user[senderID].weekday;
	toDay += 1;
	weekDay += 1;
	data[threadID][time3].user[senderID].today = toDay;
	data[threadID][time3].user[senderID].weekday = weekDay;
	fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

module.exports.run = async ({ api, event, args, Currencies, Users }) => {
	const { threadID, messageID, senderID } = event;
	const path = __dirname + '/cache/checkttDay.json';
	if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
	let data = JSON.parse(fs.readFileSync(path));
	var timeVN = moment().tz('Asia/Dhaka').format('DD_MM_YYYY_HH_mm_ss');
	var time = timeVN.split("_");
	var time1 = await checkTime(time);
	var time2 = await new Date(time1)
	var time3 = time2.getDay();
	let mention = Object.keys(event.mentions)
	if(args[0] == "all") {
		var storage = [], exp = [];
		for(let i in data[threadID][time3].user) storage.push({"name": await Users.getNameUser(i), "exp": data[threadID][time3].user[i].weekday});
		storage.sort(function (a, b) { return b.exp - a.exp });
		let msg = "==「KIỂM TRA TƯƠNG TÁC」==\n";
		msg += `\n👤: Người dẫn đầu là: ${storage[0].name} với ${storage[0].exp} tin nhắn`;
		for(let i = 1; i < storage.length; i++) {
			msg += `\n${i+1}. ${storage[i].name}: ${storage[i].exp} tin nhắn`;
		}
		let sum = 0;
		for(let i in data[threadID][time3].user) {
			sum += data[threadID][time3].user[i].weekday;
		} 
		msg += `\n» Tổng số tin nhắn của box trong tuần qua: ${sum}`;
		return api.sendMessage(msg, threadID);
	} else if(mention[0]) {
		let idUser = mention[0];
		let nameUser = await Users.getNameUser(idUser);
		const yesterDay = data[threadID][time3].user[idUser].yesterDay;
		const today = data[threadID][time3].user[idUser].today;
		const weekDay = data[threadID][time3].user[idUser].weekday;
		var storage = [], exp = [];
		const dataThread = await api.getThreadInfo(event.threadID);
		for (const value of dataThread.userInfo) storage.push({"id" : value.id, "name": value.name});
		for (const user of storage) {
			const countMess = await Currencies.getData(user.id);
			exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
		}
		exp.sort(function (a, b) { return b.exp - a.exp });
		const rank = exp.findIndex(e => parseInt(e.uid) == parseInt(mention[0])) + 1;
		const infoUser = exp[rank - 1];
		let msg, test = await tt(yesterDay, today, time[3]);
		if(isNaN(test)) {
			msg = "thống kê chưa rõ ràng";
		} else {
			msg = await tt(yesterDay, today, time[3]);
		}
		return api.sendMessage(`=== ${nameUser} ===\n🙆‍♂️ 𝘵𝘰̂̉𝘯𝘨 𝘴𝘰̂́ 𝘵𝘪𝘯 𝘯𝘩𝘢̆́𝘯: ${infoUser.exp}\n🐸 𝐌𝐮̛́𝐜 𝐝𝐨̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜: ${msg}\n⏱️ 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒉𝒐̂𝒎 𝒒𝒖𝒂: ${yesterDay}\n⏰ 𝘛𝘰̂̉𝘯𝘨 𝘴𝘰̂́ 𝘵𝘪𝘯 𝘯𝘩𝘢̆́𝘯 𝘩𝘰̂𝘮 𝘯𝘢𝘺: ${today}\n🖤 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒓𝒐𝒏𝒈 𝒕𝒖𝒂̂̀𝒏: ${weekDay}`, threadID, messageID);
	} else {
		const countMess = await Currencies.getData(senderID);
		const yesterDay = data[threadID][time3].user[senderID].yesterDay;
		const today = data[threadID][time3].user[senderID].today;
		const weekDay = data[threadID][time3].user[senderID].weekday;
		let nameUser = await Users.getNameUser(senderID);
		let sum = 0;
		let msg, test = await tt(yesterDay, today, time[3]);
		if(isNaN(test)) {
			msg = "thống kê chưa rõ ràng";
		} else {
			msg = await tt(yesterDay, today, time[3]);
		}
		return api.sendMessage(`=== ${nameUser} ===\n🙆‍♂️ 𝘵𝘰̂̉𝘯𝘨 𝘴𝘰̂́ 𝘵𝘪𝘯 𝘯𝘩𝘢̆́𝘯: ${(typeof countMess.exp == "undefined") ? 0 : countMess.exp}\n🐸 𝐌𝐮̛́𝐜 𝐝𝐨̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜: ${msg}\n⏱️ 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒉𝒐̂𝒎 𝒒𝒖𝒂: ${yesterDay}\n⏰ 𝘛𝘰̂̉𝘯𝘨 𝘴𝘰̂́ 𝘵𝘪𝘯 𝘯𝘩𝘢̆́𝘯 𝘩𝘰̂𝘮 𝘯𝘢𝘺: ${today}\n🖤 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒓𝒐𝒏𝒈 𝒕𝒖𝒂̂̀𝒏: ${weekDay}`, threadID, messageID);
	}
}
		const countMess = await Currencies.getData(senderID);
		const yesterDay = data[threadID][time3].user[senderID].yesterDay;
		const today = data[threadID][time3].user[senderID].today;
		const weekDay = data[threadID][time3].user[senderID].weekday;
		let nameUser = await Users.getNameUser(senderID);
		let sum = 0;
		let msg, test = await tt(yesterDay, today, time[3]);
		if(isNaN(test)) {
			msg = "thống kê chưa rõ ràng";
		} else {
			msg = await tt(yesterDay, today, time[3]);
		}
		return api.sendMessage(`=== ${nameUser} ===\n🙆‍♂️ 𝘵𝘰̂̉𝘯𝘨 𝘴𝘰̂́ 𝘵𝘪𝘯 𝘯𝘩𝘢̆́𝘯: ${(typeof countMess.exp == "undefined") ? 0 : countMess.exp}\n🐸 𝐌𝐮̛́𝐜 𝐝𝐨̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜: ${msg}\n⏱️ 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒉𝒐̂𝒎 𝒒𝒖𝒂: ${yesterDay}\n⏰ 𝘛𝘰̂̉𝘯𝘨 𝘴𝘰̂́ 𝘵𝘪𝘯 𝘯𝘩𝘢̆́𝘯 𝘩𝘰̂𝘮 𝘯𝘢𝘺: ${today}\n🖤 𝑻𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒓𝒐𝒏𝒈 𝒕𝒖𝒂̂̀𝒏: ${weekDay}`, threadID, messageID);
	}
}
𝒐̂̉𝒏𝒈 𝒔𝒐̂́ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒓𝒐𝒏𝒈 𝒕𝒖𝒂̂̀𝒏: ${weekDay}`, threadID, messageID);
	}
}
