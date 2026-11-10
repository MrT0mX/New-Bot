const fs = require('fs-extra'),
  axios = require("axios"),
  path = require("path");
let lastPlayed = -0x1;
module["exports"]['config'] = {
  'name': "gan",
  'version': '1.1.0',
  'hasPermission': 0x0,
  'credits': "FUKEYBOT",
  'description': 'Play\x20random\x20song\x20without\x20prefix',
  'commandCategory': "music",
  'usages': "gan",
  'cooldowns': 0x5
};
async function playSong(_0x2280ec, _0x324e27) {
  const {
      threadID: _0x189cf0,
      messageID: _0x3ce56d
    } = _0x324e27,
    _0x368e35 = ['https://files.catbox.moe/etsdn9.mp3', 'https://files.catbox.moe/ayepdz.mp3', 'https://files.catbox.moe/oaecnx.mp3', "https://files.catbox.moe/gvvb82.mp3", "https://files.catbox.moe/tht37y.mp3", "https://files.catbox.moe/bmk3mq.mp3", 'https://files.catbox.moe/9i3g65.mp3', 'https://files.catbox.moe/ap2yed.mp3'];
  _0x2280ec["setMessageReaction"]('🎶', _0x3ce56d, () => {}, !![]);
  let _0x23324b;
  do {
    _0x23324b = Math['floor'](Math['random']() * _0x368e35["length"]);
  } while (_0x23324b === lastPlayed && _0x368e35['length'] > 0x1);
  lastPlayed = _0x23324b;
  const _0x44cacf = _0x23324b + 0x1,
    _0x5adafb = _0x368e35[_0x23324b],
    _0x11efd3 = path["join"](__dirname, 'cache');
  if (!fs['existsSync'](_0x11efd3)) fs['mkdirSync'](_0x11efd3, {
    'recursive': !![]
  });
  const _0x441cd3 = path['join'](_0x11efd3, "gan_" + _0x44cacf + '_' + Date["now"]() + ".mp3");
  try {
    const _0x4e0fe6 = await axios({
        'url': _0x5adafb,
        'method': 'GET',
        'responseType': 'stream',
        'timeout': 0x7530
      }),
      _0x1c199d = fs['createWriteStream'](_0x441cd3);
    _0x4e0fe6['data']['pipe'](_0x1c199d), _0x1c199d['on']('finish', () => {
      _0x2280ec['sendMessage']({
        'body': 'MR\x20FUKEYBOT\x0a\x0a🎵\x20Song\x20No:\x20' + _0x44cacf + '/' + _0x368e35['length'] + "\n🔀 Mode: No Prefix\n\nEnjoy 🎶",
        'attachment': fs["createReadStream"](_0x441cd3)
      }, _0x189cf0, () => {
        if (fs['existsSync'](_0x441cd3)) fs["unlinkSync"](_0x441cd3);
      });
    });
  } catch (_0xd3f861) {
    _0x2280ec['sendMessage']("❌ গান পাঠাতে সমস্যা হয়েছে!", _0x189cf0);
  }
}
module['exports']['handleEvent'] = async function ({
  api: _0x3c9269,
  event: _0xa88179
}) {
  if (!_0xa88179["body"]) return;
  const _0x22a0d6 = _0xa88179['body']['trim']()['toLowerCase']();
  if (_0x22a0d6 === 'gan') return playSong(_0x3c9269, _0xa88179);
}, module["exports"]['run'] = async function ({
  api: _0x42250d,
  event: _0x4fd361
}) {
  return playSong(_0x42250d, _0x4fd361);
};
