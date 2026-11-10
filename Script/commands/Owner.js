const request = require("request"),
  fs = require('fs-extra');
module["exports"]['config'] = {
  'name': 'owner',
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': 'FukeyBot',
  'description': "Display bot owner's information",
  'commandCategory': "Info",
  'usages': '',
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
}, module["exports"]['run'] = async function ({
  api: _0x637d3a,
  event: _0x7a560b
}) {
  const _0x121374 = "https://i.imgur.com/iA23wiL.jpeg",
    _0x4c30cd = __dirname + '/cache/owner.png';
  request(_0x121374)["pipe"](fs['createWriteStream'](_0x4c30cd))['on']('close', () => {
    _0x637d3a["sendMessage"]({
      'body': '🌟\x20𝗢𝗪𝗡𝗘𝗥\x20𝗜𝗡𝗙𝗢\x20🌟\x0a\x0a👑\x20𝗡𝗔𝗠𝗘:\x20FukeyBot\x0a😻\x20𝗔𝗗𝗗𝗥𝗘𝗦𝗦:\x20মেয়েদের\x20মনে🙈\x0a💼\x20𝗣𝗥𝗢𝗙𝗘𝗦𝗦𝗜𝗢𝗡:\x20মেয়েদের\x20মন\x20জয়\x20করা😍\x0a🌐\x20𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:\x20আইডি\x20বেইচ্চা\x20খাইয়া\x20লাইছি😁\x0a💬\x20𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥:\x20দিলে\x20Future\x20বউ\x20ধইরা\x20মারব😌\x0a📺\x20𝗬𝗢𝗨𝗧𝗨𝗕𝗘:\x20কবে\x20YouTubal\x20ছিলাম\x20😺\x0a📸\x20𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠:\x20গরিব\x20বলে\x20ফেসবুক\x20চালাই\x20শুধু\x20🥺\x0a📱\x20𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣:\x20দিলে\x20আমার\x20আম্মু\x20বকা\x20দিবা\x20🤣\x0a🎵\x20𝗧𝗜𝗞𝗧𝗢𝗞:\x20সরি\x20আমি\x20প্রতিবন্ধী\x20না🥱\x0a👻\x20𝗦𝗡𝗔𝗣𝗖𝗛𝗔𝗧:\x20তোদের\x20মতো\x20কালা\x20নাকি\x20ফিল্টার\x20লাগামু🤭\x0a😎\x20𝗦𝗧𝗔𝗧𝗨𝗦:\x20Single\x20but\x20not\x20available\x20😌\x0a💔\x20𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣:\x20হৃদয়\x20এখন\x20অফলাইন\x0a⚠️\x20𝗪𝗔𝗥𝗡𝗜𝗡𝗚:\x20বেশি\x20মেসেজ\x20দিলে\x20রিপ্লাই\x20পাওয়ার\x20সম্ভাবনা\x200.01%\x20😆\x0a⏰\x20𝗔𝗖𝗧𝗜𝗩𝗘:\x20যখন\x20WiFi\x20থাকে\x20তখন\x20😴\x0a💬\x20𝗤𝗨𝗢𝗧𝗘:\x20“আমি\x20সিরিয়াস\x20না,\x20কিন্তু\x20ফানি\x20সবসময়\x20😎”\x0a🏆\x20𝗥𝗔𝗡𝗞:\x20Local\x20Legend\x20(Village\x20Edition\x20😂)\x0a🔥\x20𝗟𝗘𝗩𝗘𝗟:\x2099%\x20Sarcasm\x0a📵\x20𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣:\x20Seen\x20but\x20ignored\x20😆\x0a📸\x20𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠:\x200\x20followers,\x201000\x20dreams\x0a\x0a━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a🤖\x20𝗕𝗢𝗧\x20𝗕𝗬:\x20𓆩꯭𝆺𝅥😻⃞𝐑⃞𝐈⃞𝐘⃞𝐀⃞༢࿐\x0a',
      'attachment': fs['createReadStream'](_0x4c30cd)
    }, _0x7a560b['threadID'], () => fs["unlinkSync"](_0x4c30cd));
  });
};
