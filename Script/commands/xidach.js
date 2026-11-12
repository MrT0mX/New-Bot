'use strict';
module.exports.config = {
	name: "xidach", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.3.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "DungUwU", // Công nhận module sở hữu là ai
	description: "Chơi xì dách", // Thông tin chi tiết về lệnh
	commandCategory: "Trò Chơi", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[create/join/leave/start]\n->\ncreate tiền_cược (tối thiểu 50$)\njoin tiền_cược (tối thiểu 50$)\nleave (rời ván xì dách đang tham gia ở nhóm)\nstart (bắt đầu ván xì dách mà bạn tạo ở nhóm)\n->", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: {
		"fs": "",
		"axios": ""
	}, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	envConfig: {
		"maxPlayers": 5, //khuyến nghị: 5, tối thiểu 2, tối đa 10
		"normalWinBonus": 1, //thưởng 100%
		"superWinBonus": 2, //thưởng 200%
		"epicWinBonus": 4,  //thưởng 400%
	}
};

module.exports.languages = {
	"vi": {
        "missingInput": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗯𝗼̉ 𝘁𝗿𝗼̂́𝗻𝗴 𝗵𝗼𝗮̣̆𝗰 𝗹𝗮̀ 𝘀𝗼̂́ 𝗮̂𝗺 💸",
        "moneyBetNotEnough": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗦𝗼̂́ 𝘀𝗼̂́ 𝗱𝘂̛ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗶𝗲̂́𝘂 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗹𝗮̀𝗺 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝘃𝗼̛́𝗶 𝗺𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰: %1 đô\n𝗕𝗮̣𝗻 𝗰𝗮̂̀𝗻 %2 đô !",
        "limitBet": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗦𝗼̂́ 𝗰𝗼𝗶𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗱𝘂̛𝗼̛́𝗶 𝟱𝟬$ !",
        "noGame": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗡𝗵𝗼́𝗺 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝘃𝗮́𝗻 𝘅𝗶̀ 𝗱𝗮́𝗰𝗵 𝗻𝗮̀𝗼 𝗵𝗶𝗲̣̂𝗻 𝗱𝗶𝗲̂̃𝗻 𝗿𝗮 𝗰𝗮̉ !",
        "xidachRules": "♠️ ==== [ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] ==== ♠️\n\n[ 𝗡𝗢𝗧𝗘 ❗ ]:\n𝗫𝗶̀ 𝗱𝗮́𝗰𝗵 𝗹𝗮̀: 𝟭 𝗔 + 𝟭 𝘁𝗿𝗼𝗻𝗴 𝗝 𝗤 𝗞\n𝗫𝗶̀ 𝗯𝗮̀𝗻𝗴: 𝟮𝗔\n\n[ 𝗥𝗨𝗟𝗘 📝 ]:\n𝗦𝗰𝗼𝗿𝗲 𝘁𝘂̛̀ 𝟭𝟲 𝘁𝗼̛́𝗶 𝟮𝟭:\n𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 > 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶: 𝘄𝗶𝗻 𝘅𝟭 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴\n𝗩𝗮̀ 𝗻𝗴𝘂̛𝗼̛̣𝗰 𝗹𝗮̣𝗶\n\n𝗫𝗶̀ 𝗯𝗮̀𝗻𝗴 > 𝘅𝗶̀ 𝗱𝗮́𝗰𝗵:\n𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗰𝗼́ 𝘅𝗶̀ 𝗯𝗮̀𝗻𝗴 𝗵𝗼𝗮̣̆𝗰 𝘅𝗶̀ 𝗱𝗮́𝗰𝗵, 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝗸𝗼 𝗰𝗼́ -> 𝘅𝟰 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴\n𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗰𝗼́ 𝘅𝗶̀ 𝗯𝗮̀𝗻𝗴, 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝗰𝗼́ 𝘅𝗶̀ 𝗱𝗮́𝗰𝗵 -> 𝘅𝟮 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴\n𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗰𝗼́ 𝘅𝗶̀ 𝗱𝗮́𝗰𝗵, 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝘅𝗶̀ 𝗯𝗮̀𝗻𝗴 -> 𝗟𝗼𝘀𝗲\n\n𝗡𝗴𝘂̃ 𝗹𝗶𝗻𝗵: 𝟱 𝗹𝗮́ 𝗯𝗮̀𝗶 𝗺𝗮̀ 𝘁𝗼̂̉𝗻𝗴 𝘀𝗰𝗼𝗿𝗲 𝗻𝗵𝗼̉ 𝗵𝗼̛𝗻 𝟮𝟭. 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗪𝗶𝗻. 𝗧𝗿𝘂̛𝗼̛̀𝗻𝗴 𝗵𝗼̛̣𝗽 𝗰𝗮̉ 𝟮 𝗯𝗲̂𝗻 𝗻𝗴𝘂̃ 𝗹𝗶𝗻𝗵 𝗵𝗲̂́𝘁, 𝗮𝗶 𝗶́𝘁 𝘀𝗰𝗼𝗿𝗲 𝗵𝗼̛𝗻 𝘀𝗲̃ 𝗪𝗶𝗻.\n\n𝗤𝘂𝗮́ 𝟮𝟭 𝘀𝗰𝗼𝗿𝗲: 𝟮 𝗯𝗲̂𝗻 𝗰𝘂̀𝗻𝗴 𝗾𝘂𝗮́ 𝘁𝗵𝗶̀ 𝗮𝗶 𝗶́𝘁 𝘀𝗰𝗼𝗿𝗲 𝗵𝗼̛𝗻 𝘀𝗲̃ 𝗪𝗶𝗻. 𝗤𝘂𝗮́ 𝟮𝟭 𝘀𝗰𝗼𝗿𝗲 𝘁𝗵𝗶̀ 𝗪𝗶𝗻 𝗯𝗮̀𝗶 𝘁𝗵𝗮̂́𝗽 𝗵𝗼̛𝗻 𝟭𝟲 𝘀𝗰𝗼𝗿𝗲 (𝗻𝗼𝗻).\n\n[ 𝗛𝗗𝗦𝗗 🔍]:\n- 𝘅𝗶𝗱𝗮𝗰𝗵 𝗰𝗿𝗲𝗮𝘁𝗲 𝘁𝗶𝗲̂̀𝗻_𝗰𝘂̛𝗼̛̣𝗰 (𝘁𝗼̂́𝗶 𝘁𝗵𝗶𝗲̂̉𝘂 𝟱𝟬$)\n- 𝘅𝗶𝗱𝗮𝗰𝗵 𝗷𝗼𝗶𝗻 ( 𝘃𝗮̀𝗼 𝗯𝗮̀𝗻 𝘅𝗶𝗱𝗮𝗰𝗵 )\n- 𝘅𝗶𝗱𝗮𝗰𝗵 𝗹𝗲𝗮𝘃𝗲 ( 𝗿𝗼̛̀𝗶 𝗯𝗮̀𝗻 𝘅𝗶𝗱𝗮𝗰𝗵 )\n- 𝘅𝗶𝗱𝗮𝗰𝗵 𝘀𝘁𝗮𝗿𝘁 ( 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶 )",
        "magic_five": "Ngũ Linh",
        "blackJack": "Xì Dách",
        "double_aces": "Xì Bàng (Bàn)",
        "points": " 𝗻𝘂́𝘁",
        "final": "♠️== [ 𝐊𝐄̂́𝐓 𝐐𝐔𝐀̉ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] ==♠️\n\n + %1 ( 𝗡𝗵𝗮̀ 𝗖𝗮́𝗶 ): %2",
        "get_or_ready": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - [ %1 ]\n𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗯𝗮̀𝗶 𝘂́𝗽 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝗹𝗮̀: %2 𝗹𝗮́ 🃏\n%3, 𝗵𝗮̃𝘆 𝗰𝗵𝗼̣𝗻 𝗴𝗲𝘁 𝗻𝗲̂́𝘂 𝗹𝗮̂́𝘆 𝘁𝗵𝗲̂𝗺 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗮𝗱𝘆 𝗱𝗮̆̀𝗻 𝗯𝗮̀𝗶",
        "out_of_time": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - %1, 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗾𝘂𝗮́ 𝟮𝟬𝘀, 𝗯𝗼̉ 𝗾𝘂𝗮 𝗹𝘂̛𝗼̛̣𝘁 ⌛",
        "yourCards": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: %1",
        "cards_limit": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗮̣𝗻 𝗿𝘂́𝘁 𝟱 𝗹𝗮́ 𝗿𝗼̂̀𝗶, 𝗾𝘂𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗲̂́ 𝘁𝗶𝗲̂́𝗽",
        "points_limit": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗮̣𝗻 𝟮𝟭 𝗵𝗼𝗮̣̆𝗰 𝗵𝗼̛𝗻 𝟮𝟭 𝘁𝘂𝗼̂̉𝗶, 𝗾𝘂𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗲̂́ 𝘁𝗶𝗲̂́𝗽",
        "getSuccess": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗯𝗮̀𝗶 𝘂́𝗽 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝗹𝗮̀: %1 𝗹𝗮́\n𝗥𝘂́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴, 𝗰𝗵𝗼̣𝗻 𝗴𝗲𝘁 𝗻𝗲̂́𝘂 𝗹𝗮̂́𝘆 𝘁𝗵𝗲̂𝗺 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗮𝗱𝘆 𝗱𝗮̆̀𝗻 𝗯𝗮̀𝗶",
        "points_notEnough": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗮̂́𝗽 𝗵𝗼̛𝗻 𝟭𝟲, 𝗰𝗵𝗼̛𝗶 𝗺𝗮̀ 𝗱𝗮̆̀𝗻 𝗱𝗼̛, 𝗵𝗮̃𝘆 𝗴𝗲𝘁 𝘁𝗵𝗲̂𝗺 😏",
        "ready": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗱𝗮̆̀𝗻 𝗯𝗮̀𝗶",
        "alreadyHave": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗛𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝟭 𝘃𝗮́𝗻 𝘅𝗶̀ 𝗱𝗮́𝗰𝗵 𝗱𝗶𝗲̂̃𝗻 𝗿𝗮 𝗼̛̉ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆 𝗿𝗼̂̀𝗶",
        "openSuccess": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗠𝗼̛̉ 𝘀𝗼̀𝗻𝗴 𝘅𝗶̀ 𝗱𝗮́𝗰𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 (1/%1)\n𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮, 𝗱𝘂̀𝗻𝗴:\n%2 𝗷𝗼𝗶𝗻 𝘁𝗶𝗲̂̀𝗻_𝗰𝘂̛𝗼̛̣𝗰 💴",
        "alreadyJoined": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗼̛̉ 𝘁𝗿𝗼𝗻𝗴 𝘀𝗼̀𝗻𝗴 𝗻𝗮̀𝘆 𝗿𝗼̂̀𝗶",
        "out_of_room": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗙𝘂𝗹𝗹 𝘀𝗹𝗼𝘁 𝗿𝗼̂̀𝗶, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘃𝗮́𝗻 𝘀𝗮𝘂 𝗻𝗵𝗲́",
        "alreadyStarted_1": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗦𝗼̀𝗻𝗴 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶, 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮",
        "overBet": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 (%1$)!",
        "joinSuccess": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗩𝗮̀𝗼 𝘀𝗼̀𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 (%1/%2)",
        "author_left_before_start": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗩𝗶̀ 𝗰𝗵𝘂̉ 𝗽𝗵𝗼̀𝗻𝗴 𝘃𝘂̛̀𝗮 𝗿𝗼̛̀𝗶 𝗸𝗵𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶, 𝗻𝗲̂𝗻 𝗯𝗼𝘁 𝘀𝗲̃ 𝘅𝗼𝗮́ 𝘀𝗼̀𝗻𝗴 𝗯𝗮̀𝗶 𝗻𝗮̀𝘆\n𝗡𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗮̣𝗶 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵",
        "outSuccess": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗥𝗼̛̀𝗶 𝘀𝗼̀𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 (%1/%2)",
        "not_yet_started": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗩𝗮́𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶 𝗻𝗲̂𝗻 𝗯𝗮̣𝗻 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗮̣𝗶 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰",
        "playersNotEnough": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗵𝗶𝗲̣̂𝗻 𝘁𝗵𝗶𝗲̂́𝘂, 𝘁𝗼̂́𝗶 𝘁𝗵𝗶𝗲̂̉𝘂: 𝟮 𝗻𝗴𝘂̛𝗼̛̀𝗶, 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: 𝟭 𝗻𝗴𝘂̛𝗼̛̀𝗶 ",
        "not_author": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗰𝗵𝘂̉ 𝘀𝗼̀𝗻𝗴 𝗯𝗮̀𝗶",
        "alreadyStarted_2": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗩𝗮́𝗻 𝗯𝗮̀𝗶 𝗵𝗶𝗲̣̂𝗻 𝘁𝗿𝗼𝗻𝗴 𝗾𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝗰𝗵𝗼̛𝗶",
        "testInbox": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗖𝗵𝗼̛̀ 𝗯𝗼𝘁 𝗸𝗶𝗲̂̉𝗺 𝘁𝗿𝗮 𝘁𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴 𝗶𝗻𝗯𝗼𝘅 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶..",
        "checkInbox_noti": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗕𝗼𝘁 𝘀𝗲̃ 𝗴𝘂̛̉𝗶 𝗯𝗮̀𝗶 𝘁𝗼̛́𝗶 𝘁𝘂̛̀𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗲𝗰𝗸 𝗶𝗻𝗯𝗼𝘅/𝘀𝗽𝗮𝗺/𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗵𝗼̛̀ 💬",
        "cannotInbox": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - %1, 𝗯𝗼𝘁 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗶𝗻𝗯𝗼𝘅 𝗯𝗮̣𝗻, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗶𝗻𝗯𝗼𝘅 𝗯𝗼𝘁 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗰𝗵𝗼 𝗳𝗯 𝗺𝗼̛̉ 𝗸𝗵𝗼́𝗮 𝗶𝗻𝗯𝗼𝘅 𝗰𝗵𝗼 𝗯𝗼𝘁",
        "explaining": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗞𝗵𝗶 𝘁𝗼̛́𝗶 𝗹𝘂̛𝗼̛̣𝘁 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵, 𝗵𝗮̃𝘆 𝗻𝗵𝗮̆́𝗻:\n𝗴𝗲𝘁 (𝗹𝗮̂́𝘆 𝘁𝗵𝗲̂𝗺 𝗯𝗮̀𝗶, 𝘁𝗼̂́𝗶 𝘁𝗵𝗶𝗲̂̉𝘂 𝟯 𝗹𝗮̂̀𝗻, 𝗺𝗮𝘅 𝟮𝟭 𝘁𝘂𝗼̂̉𝗶)\n𝗿𝗲𝗮𝗱𝘆 (𝗱𝗮̆̀𝗻 𝗯𝗮̀𝗶, 𝗸𝗵𝗼̂𝗻𝗴 𝗿𝘂́𝘁 𝗻𝘂̛̃𝗮)",
        "start_after_5s": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗟𝗼𝗮𝗱𝗶𝗻𝗴 .... ♻️",
        "started": "[ 𝐗𝐈̀ 𝐃𝐀́𝐂𝐇 ] - 𝗦𝗧𝗔𝗥𝗧 ✅"
	}
};

module.exports.cards = {
	31: "3_of_spades.png",
	32: "3_of_clubs.png",
	33: "3_of_diamonds.png",
	34: "3_of_hearts.png",
	41: "4_of_spades.png",
	42: "4_of_clubs.png",
	43: "4_of_diamonds.png",
	44: "4_of_hearts.png",
	51: "5_of_spades.png",
	52: "5_of_clubs.png",
	53: "5_of_diamonds.png",
	54: "5_of_hearts.png",
	61: "6_of_spades.png",
	62: "6_of_clubs.png",
	63: "6_of_diamonds.png",
	64: "6_of_hearts.png",
	71: "7_of_spades.png",
	72: "7_of_clubs.png",
	73: "7_of_diamonds.png",
	74: "7_of_hearts.png",
	81: "8_of_spades.png",
	82: "8_of_clubs.png",
	83: "8_of_diamonds.png",
	84: "8_of_hearts.png",
	91: "9_of_spades.png",
	92: "9_of_clubs.png",
	93: "9_of_diamonds.png",
	94: "9_of_hearts.png",
	101: "10_of_spades.png",
	102: "10_of_clubs.png",
	103: "10_of_diamonds.png",
	104: "10_of_hearts.png",
	111: "jack_of_spades2.png",
	112: "jack_of_clubs2.png",
	113: "jack_of_diamonds2.png",
	114: "jack_of_hearts2.png",
	121: "queen_of_spades2.png",
	122: "queen_of_clubs2.png",
	123: "queen_of_diamonds2.png",
	124: "queen_of_hearts2.png",
	131: "king_of_spades2.png",
	132: "king_of_clubs2.png",
	133: "king_of_diamonds2.png",
	134: "king_of_hearts2.png",
	11: "ace_of_spades.png",
	12: "ace_of_clubs.png",
	13: "ace_of_diamonds.png",
	14: "ace_of_hearts.png",
	21: "2_of_spades.png",
	22: "2_of_clubs.png",
	23: "2_of_diamonds.png",
	24: "2_of_hearts.png",
};

module.exports.onLoad = async () => {
	const fs = require("fs");
	let path = __dirname + '/poker/';
	if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
	await require("axios").get("https://raw.githubusercontent.com/RFS-ADRENO/base64_poker/main/data.json").then(async (res) => {
		for (let e in res.data) {
			if (fs.existsSync(path + e)) continue;
			await fs.writeFileSync(path + e, res.data[e], 'base64');
		}
	});
	if (!global.client.xidach_otm_nobot) global.client.xidach_otm_nobot = {};
	console.log("======[ MDL XIDACH LOADED SUCCESSFULLY ]======");
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function countC(array) {
	let total = 0;
	array.forEach(e => {
		let num = 0;
		if (e >= 101) num = 10;
		else num = Math.floor((e / 10) % 10);
		total += num;
	});
	return total;
}

const nextUser = async (api, event, getText, Users, Currencies) => {
	var { threadID } = event;
	if (!global.client.xidach_otm_nobot[threadID]) return;
	global.client.xidach_otm_nobot[threadID].curUser++;
	if (global.client.xidach_otm_nobot[threadID].curUser == global.client.xidach_otm_nobot[threadID].data.length ) return endS(api, event, getText, Users, Currencies, global.client.xidach_otm_nobot[threadID]);
	let curU = global.client.xidach_otm_nobot[threadID].curUser;
	let curUserD = global.client.xidach_otm_nobot[threadID].data[curU];
	let name = await Users.getNameUser(curUserD.id) || "Player";
	let oldL = curUserD.cards.length;
	api.sendMessage({
		body: getText("get_or_ready", new Date().toLocaleString("en-US", {timeZone: 'Asia/Dhaka'}), global.client.xidach_otm_nobot[threadID].cards.length, name),
		mentions: [{
			tag: name,
			id: curUserD.id
		}]
	}, threadID, () => setTimeout(async () => {
		if (!global.client.xidach_otm_nobot[threadID]) return;
		let newCurUserD = global.client.xidach_otm_nobot[threadID].data[curU];
		if (oldL == newCurUserD.cards.length && !newCurUserD.ready) {
			api.sendMessage({
				body: getText("out_of_time", name),
				mentions: [{
					tag: name,
					id: curUserD.id
				}]
			}, threadID);
			await delay(300);
			return nextUser(api, event, getText, Users, Currencies);
		}
	}, 20000));
};

async function endS(api, event, getText, Users, Currencies, object) {
    const { increaseMoney } = Currencies;
	const { threadID } = event;

	var authorCards = object.data[object.players - 1].cards;
	var getAuthorPoint = countC(authorCards);
	var authorRank = (getAuthorPoint < 16) ? 0 : (getAuthorPoint <= 21) ? 2 : 1;
	if (getAuthorPoint == 2 && Math.floor((authorCards[0] / 10) % 10) == 1) authorRank = 5;
	if (getAuthorPoint == 11 && (authorCards[0] >= 111 && Math.floor((authorCards[1] / 10) % 10) == 1) || (authorCards[1] >= 111 && Math.floor((authorCards[0] / 10) % 10) == 1)) authorRank = 4;
	if (authorRank == 2 && authorCards.length == 5) authorRank = 3;

	var msg = getText("final", await Users.getNameUser(object.data[object.players - 1].id), (authorRank == 3) ? getText("magic_five") : (authorRank == 4) ? getText("blackJack") : (authorRank == 5) ? getText("double_aces") : (getAuthorPoint + getText("points")));
	var rank = 0, playerPoints = 0;
	var result = "";
	var supply_left = object.total_supply;
	let msg2 = "";
	for (let i = 0; i < object.players - 1; i++) {
		let playerD = object.data[i];
		playerPoints = countC(playerD.cards);
		rank = (playerPoints < 16) ? 0 : (playerPoints <= 21) ? 2 : 1;
		if (playerPoints == 2 && Math.floor((playerD.cards[0] / 10) % 10) == 1) rank = 5;
		if (playerPoints == 11 && (playerD.cards[0] >= 111 && Math.floor((playerD.cards[1] / 10) % 10) == 1) || (playerD.cards[1] >= 111 && Math.floor((playerD.cards[0] / 10) % 10) == 1)) rank = 4;
		if (rank == 2 && playerD.cards.length == 5) rank = 3;
		let bonus = (rank == 3) ? object.bonus.superWinBonus : (rank >= 4) ? object.bonus.epicWinBonus : 1;
		result = (authorRank > rank) ? `𝗧𝗵𝘂𝗮 (-${playerD.bet}$)` : `𝗧𝗵𝗮̆́𝗻𝗴 (+${playerD.bet + "$ x" + bonus})`;
		if (authorRank == rank) {
			result = (playerPoints == getAuthorPoint || rank >= 4) ? "𝗛𝗼𝗮̀" : (rank == 1) ? (playerPoints < getAuthorPoint) ? `𝗧𝗵𝗮̆́𝗻𝗴 (+${playerD.bet + "$ x" + bonus})` : `𝗧𝗵𝘂𝗮 (-${playerD.bet}$)` : (rank == 2) ? (playerPoints > getAuthorPoint) ? `𝗧𝗵𝗮̆́𝗻𝗴 (+${playerD.bet + "$ x" + bonus})` : `𝗧𝗵𝘂𝗮 (-${playerD.bet}$)` : (rank == 3) ? (playerPoints < getAuthorPoint) ? `𝗧𝗵𝗮̆́𝗻𝗴 (+${playerD.bet + " x" + bonus}$)` : `𝗧𝗵𝘂𝗮 (-${playerD.bet}$)` : '';
		}
		if (result == "Draw") await increaseMoney(playerD.id, playerD.bet);
		else if (result.slice(0,4) != "Lose") await increaseMoney(playerD.id, parseInt(playerD.bet*(bonus + 1))).then(supply_left -= (playerD.bet*bonus));
		else supply_left += playerD.bet;
		let name = await Users.getNameUser(playerD.id) || "Player";
		msg2 += `\n + ${name}: ${(rank == 3) ? getText("magic_five") : (rank == 4) ? getText("blackJack") : (rank == 5) ? getText("double_aces") : (playerPoints + getText("points"))} | ` + result;
	}


	let authorGet = supply_left - object.total_supply;
	msg += ` (${((authorGet >= 0) ? `+${authorGet}` : `${authorGet}`)}$)`;
	msg += msg2;
	await increaseMoney(object.data[object.players - 1].id, supply_left);
	api.sendMessage(msg, threadID, () => delete global.client.xidach_otm_nobot[threadID]);
}

module.exports.handleEvent = async function({ event, api, getText, Users, Currencies }) {
	if (event.senderID == api.getCurrentUserID()) return;
	await delay(300);
	const fs = require("fs");
	if (!event.body) return;
	var { threadID, messageID, senderID, body } = event;
	body = body.toLowerCase();
	if (!global.client.xidach_otm_nobot) global.client.xidach_otm_nobot = {};
	if (!global.client.xidach_otm_nobot[threadID]) return;
	const sendC = (msg, callback) => api.sendMessage(msg, threadID, callback, messageID);
	const send = (msg) => sendC(msg, () => {});
	if (threadID in global.client.xidach_otm_nobot) {
		if (!"curUser" in global.client.xidach_otm_nobot[threadID]) return;
		if (global.client.xidach_otm_nobot[threadID].curUser < 0) return;
		let curU = global.client.xidach_otm_nobot[threadID].curUser;
		if (global.client.xidach_otm_nobot[threadID].data[curU] && global.client.xidach_otm_nobot[threadID].data[curU].id != senderID) return;
		if (body == "get") {
			global.client.xidach_otm_nobot[threadID].data[curU].cards.push(global.client.xidach_otm_nobot[threadID].cards.pop());
			let atms = [];
			global.client.xidach_otm_nobot[threadID].data[curU].cards.forEach(c => {
				atms.push(fs.createReadStream(__dirname + `/poker/${this.cards[c]}`));
			});
			api.sendMessage({
				body: getText("yourCards", countC(global.client.xidach_otm_nobot[threadID].data[curU].cards)),
				attachment: atms
			}, senderID);
			if (global.client.xidach_otm_nobot[threadID].data[curU].cards.length == 5) {
				send(getText("cards_limit"));
				await delay(1000);
				return nextUser(api, event, getText, Users, Currencies);
			}
			if (countC(global.client.xidach_otm_nobot[threadID].data[curU].cards) >= 21) {
				send(getText("points_limit"));
				await delay(1000);
				return nextUser(api, event, getText, Users, Currencies);
			}
			send(getText("getSuccess", global.client.xidach_otm_nobot[threadID].cards.length));
			let oldL = global.client.xidach_otm_nobot[threadID].data[curU].cards.length;
			setTimeout(async () => {
				if (!global.client.xidach_otm_nobot[threadID]) return;
				let newCurUserD = global.client.xidach_otm_nobot[threadID].data[curU];
				if (oldL == newCurUserD.cards.length && !newCurUserD.ready) {
					let curUserD = global.client.xidach_otm_nobot[threadID].data[curU];
					let name = await Users.getNameUser(curUserD.id) || "Player";
					api.sendMessage({
						body: getText("out_of_time", name),
						mentions: [{
							tag: name,
							id: curUserD.id
						}]
					}, threadID);
					await delay(300);
					return nextUser(api, event, getText, Users, Currencies);
				}
			}, 20000);
		}
		if (body == "ready") {
			if (countC(global.client.xidach_otm_nobot[threadID].data[curU].cards) < 16) {
				return send(getText("points_notEnough"));
			}
			send(getText("ready"));
			await delay(500);
			global.client.xidach_otm_nobot[threadID].data[curU].ready = true;
			return nextUser(api, event, getText, Users, Currencies);
		}
	}
};

module.exports.run = async function({ api, event, args, getText, Users, Currencies }) {
	if (!global.client.xidach_otm_nobot) global.client.xidach_otm_nobot = {};
    const { getData, increaseMoney, decreaseMoney } = Currencies;
	const { threadID, messageID, senderID } = event;
	const sendC = (msg, callback) => api.sendMessage(msg, threadID, callback, messageID);
	const sendTC = (msg, callback) => api.sendMessage(msg, threadID, callback);
	const sendT = (msg) => sendTC(msg, () => {});
	const send = (msg) => sendC(msg, () => {});
    const moneyUser = (await getData(senderID)).money;
	//getPrefix
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	//checkValid_maxPlayer
	if (global.configModule[this.config.name].maxPlayers < 2 || global.configModule[this.config.name].maxPlayers > 10) global.configModule[this.config.name].maxPlayers = 5;
	//well, happy new year!
	var moneyBet = 0;
	let max_player = global.configModule[this.config.name].maxPlayers;
	switch (args[0]) {
		case 'create':
			moneyBet = parseInt(args[1]);
		    if (isNaN(moneyBet) || moneyBet <= 0) return send(getText("missingInput"));
			if (moneyBet < 50) return send(getText("limitBet"));
			//balance count...
			let multiplyBy = (max_player <= 5) ? (1 + (max_player - 1) * 4) : (17 + (max_player - 5) * 2);
			if (moneyBet*multiplyBy > moneyUser) return send(getText("moneyBetNotEnough", moneyBet, moneyBet*multiplyBy));
			if (threadID in global.client.xidach_otm_nobot) send(getText("alreadyHave"));
			else sendTC(getText("openSuccess", max_player, prefix+this.config.name), async () => {
				await decreaseMoney(senderID, moneyBet*multiplyBy);
				global.client.xidach_otm_nobot[threadID] = {
					maximumBet: moneyBet,
					total_supply: moneyBet*multiplyBy,
					players: 1,
					status: "pending",
					data: [
						{
							id: senderID,
							bet: moneyBet,
							cards: [],
							type: "author"
						}
					],
					bonus: global.configModule[this.config.name]
				};
			});
			break;
		case "join":
			if (threadID in global.client.xidach_otm_nobot) {
				if (global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID)) return send(getText("alreadyJoined"));
				if (global.client.xidach_otm_nobot[threadID].players == global.configModule[this.config.name].maxPlayers) return send(getText("out_of_room"));
				if (global.configModule[this.config.name].status == "started") return send(getText("alreadyStarted_1"));
				moneyBet = parseInt(args[1]);
			    if (isNaN(moneyBet) || moneyBet <= 0) return send(getText("missingInput"));
				if (moneyBet < 50) return send(getText("limitBet"));
				if (moneyBet > global.client.xidach_otm_nobot[threadID].maximumBet) return send(getText("overBet", global.client.xidach_otm_nobot[threadID].maximumBet));
				if (moneyBet > moneyUser) return send(getText("moneyBetNotEnough"));
				sendC(getText("joinSuccess", global.client.xidach_otm_nobot[threadID].players + 1, global.configModule[this.config.name].maxPlayers), async () => {
					await decreaseMoney(senderID, moneyBet);
					global.client.xidach_otm_nobot[threadID].players++;
					global.client.xidach_otm_nobot[threadID].data.push({
						id: senderID,
						bet: moneyBet,
						cards: [],
						type: "player"
					});
				});
			} else sendT(getText("noGame"));
			break;
		case "leave":
			if (threadID in global.client.xidach_otm_nobot) {
				if (global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID).type == "author" && global.client.xidach_otm_nobot[threadID].status == "pending") {
					return sendTC(getText("author_left_before_start"), () => {
						global.client.xidach_otm_nobot[threadID].data.forEach(async (p) => {
							if (p.id != api.getCurrentUserID() && p.id != global.client.xidach_otm_nobot[threadID].data[0].id) await increaseMoney(p.id, p.bet);
							if (p.id == global.client.xidach_otm_nobot[threadID].data[0].id) await increaseMoney(p.id,  global.client.xidach_otm_nobot[threadID].total_supply);
						});
						delete global.client.xidach_otm_nobot[threadID];
					});
				}
				sendC(getText("outSuccess", global.client.xidach_otm_nobot[threadID].players - 1, global.configModule[this.config.name].maxPlayers), async () => {
					global.client.xidach_otm_nobot[threadID].players -= 1;
					if (global.client.xidach_otm_nobot[threadID].status == "pending") sendC(getText("not_yet_started"), async() => {
						global.client.xidach_otm_nobot[threadID].data.forEach(async (p, i) => {
							if (p.id == senderID) {
								await increaseMoney(senderID, p.bet);
								global.client.xidach_otm_nobot[threadID].splice(i, 1);
							}
						});
					});
					global.client.xidach_otm_nobot[threadID].data.splice(global.client.xidach_otm_nobot[threadID].players, 1);
				});
			} else sendT(getText("noGame"));
			break;
		case "start":
			if (global.client.xidach_otm_nobot[threadID].players < 2) return send(getText("playersNotEnough"));
			const  fs = require("fs");

			var cardKeys = Object.keys(this.cards);
			for (let i = cardKeys.length - 1; i > 0; i--) {
			  const j = Math.floor(Math.random() * (i + 1));
			  [cardKeys[i], cardKeys[j]] = [cardKeys[j], cardKeys[i]];
			}
			if (threadID in global.client.xidach_otm_nobot) {
				if (global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID) && global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID).type != "author") return send(getText("not_author"));
				if (global.client.xidach_otm_nobot[threadID].status == "started") return send(getText("alreadyStarted_2"));
				global.client.xidach_otm_nobot[threadID].status = "started";
				sendTC(getText("testInbox"), async () => {
					for (let i = 0; i < global.client.xidach_otm_nobot[threadID].data.length; i++) {
						let p = global.client.xidach_otm_nobot[threadID].data[i];
						if (p.id == api.getCurrentUserID()) continue;
						api.sendMessage("Chia bài", p.id, async (err) => {
							if (err) {
								let curName = await Users.getNameUser(p.id);
								api.sendMessage({
									body: getText("cannotInbox", curName),
									mentions: [{
										tag: curName,
										id: p.id
									}]
								}, threadID);
							}
						});
						await delay(2000);
					}
				});
				sendTC(getText("checkInbox_noti"), async () => {
					for (let i = 0; i < global.client.xidach_otm_nobot[threadID].data.length; i++) {
						try {
							let p = global.client.xidach_otm_nobot[threadID].data[i];
							let one = cardKeys.shift();
							let two = cardKeys.shift();
							global.client.xidach_otm_nobot[threadID].data[i].cards.push(one, two);
							var atms = [];
							atms.push(fs.createReadStream(__dirname + `/poker/${this.cards[one]}`));
							atms.push(fs.createReadStream(__dirname + `/poker/${this.cards[two]}`));
							if (p.id == api.getCurrentUserID()) continue;
							api.sendMessage({
								body: '𝗕𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: ' + countC(global.client.xidach_otm_nobot[threadID].data[i].cards),
								attachment: atms
							}, p.id);
							await delay(300);
						} catch(e) {
							console.log(e);
						}
					}
					sendTC(getText("explaining"), async () => {
						await delay(1000);
						let curU = -1;
						sendT(getText("start_after_5s"));
						await delay(5000);
						sendT(getText("started"));
						await delay(300);
						global.client.xidach_otm_nobot[threadID].data.push(global.client.xidach_otm_nobot[threadID].data.shift());
						global.client.xidach_otm_nobot[threadID].cards = cardKeys;
						global.client.xidach_otm_nobot[threadID].curUser = curU;
						return nextUser(api, event, getText, Users, Currencies);
					});
				});
			} else sendT(getText("noGame"));
			break;
		default:
			sendT(getText("xidachRules"));
	}
};