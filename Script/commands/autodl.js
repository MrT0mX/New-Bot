module["exports"] = {
  'config': {
    'name': 'autodl',
    'version': "0.0.2",
    'hasPermssion': 0x0,
    'credits': "FUKEYBOT",
    'description': "auto video download",
    'commandCategory': 'user',
    'usages': '',
    'cooldowns': 0x5
  },
  'run': async function ({
    api: _0x2907b4,
    event: _0x28be37,
    args: _0x1bfc62
  }) {},
  'handleEvent': async function ({
    api: _0x24b7b6,
    event: _0xdd7666,
    args: _0x156fd3
  }) {
    const _0x144965 = require("axios"),
      _0x4f751d = require("request"),
      _0xa90f84 = require('fs-extra'),
      _0x2d8a33 = _0xdd7666['body'] ? _0xdd7666["body"] : '',
      _0xcf8095 = _0x2d8a33['toLowerCase'](),
      {
        alldown: _0x125b89
      } = require('shaon-videos-downloader');
    if (_0xcf8095["startsWith"]('https://')) {
      _0x24b7b6["setMessageReaction"]('🔰', _0xdd7666['messageID'], _0x3d3750 => {}, !![]);
      const _0x996ad2 = await _0x125b89(_0x2d8a33);
      console['log'](_0x996ad2);
      let _0x15b7fc = _0x996ad2["url"];
      _0x24b7b6["setMessageReaction"]('📛', _0xdd7666['messageID'], _0x32cddb => {}, !![]);
      const _0x1c5a4d = (await _0x144965["get"](_0x15b7fc, {
        'responseType': "arraybuffer"
      }))['data'];
      return _0xa90f84['writeFileSync'](__dirname + '/cache/auto.mp4', Buffer['from'](_0x1c5a4d, 'utf-8')), _0x24b7b6['sendMessage']({
        'body': "╔═══════✦❘༻༺❘✦═══════╗\n𝐌𝐑₎ꜛ⪼─⃞⤹𝐉𝐔𝐖𝐄𝐋༢ꜛ國🩷ꤪ🪽\n 𝗔𝗨𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 \n\n╚═══════✦❘༻༺❘✦═══════╝",
        'attachment': _0xa90f84['createReadStream'](__dirname + "/cache/auto.mp4")
      }, _0xdd7666["threadID"], _0xdd7666["messageID"]);
    }
  }
};
