module["exports"]["config"] = {
  'name': "allvideo",
  'version': '1.0.0',
  'hasPermission': 0x1,
  'credits': '乛\x20M𝆠፝֟R\x20ཐི༏ཋྀ\x20JU𝆠፝֟W𝆠፝֟ELꜛཐི༏ཋྀ࿐',
  'description': 'Send\x20a\x20trending\x20TikTok\x20video',
  'commandCategory': "media",
  'usages': 'admin',
  'cooldowns': 0x5
}, module['exports']['run'] = async function ({
  event: _0x2ae687,
  api: _0x45db7b,
  args: _0x3fd0dd
}) {
  if (!_0x3fd0dd[0x0]) return _0x45db7b["sendMessage"]("╭───•𝗠𝗥 𝗝𝗨𝗪𝗘𝗟•───╮\n\n━━ 𝚅𝙸𝙳𝙴𝙾━━ \n!\n!➤1 𝙸𝚂𝙻𝙰𝙼 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤2 𝙰𝙽𝙸𝙼𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤3 𝚂𝙷𝙰𝙸𝚁𝙸 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤4 𝚂𝙷𝙾𝚁𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤5 𝚂𝙰𝙳𝚅𝙸𝙳𝙾◄┈╯\n!\n!➤6 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤7 𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤8 𝙵𝚄𝙽𝙽𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤9 𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤10 𝙲𝙿𝙻 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤11 𝙱𝙰𝙱𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤12 𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤13 𝙻𝙾𝙵𝙸 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤14 𝙷𝙰𝙿𝙿𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤15 𝙷𝚄𝙼𝙰𝙸𝚈𝚄𝙽 𝚂𝙸𝚁 𝚅𝙸𝙳𝙴𝙾◄┈╯\n☢━━━💚𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾━━━☢\n!➤16 𝚂𝙴𝚇 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤17 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤18 𝙸𝚃𝙴𝙼 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤19 𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤20 𝙲𝙰𝙿𝙲𝚄𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯\n━━━━━━━━━━━━━━━━\n𝙾𝚆𝙽𝙴𝚁: 𝙼𝚁 𝙹𝚄𝚆𝙴𝙻 𝙵𝚋 facebook.com/mrjuwel999_\n━━━━━━━━━━━━━━━━━━━━━━━\n𝙰 𝙿 𝙸//𝙹𝚄𝚆𝙴𝙻\n━━━━━━━━━━━━━━━\n╰──𝙼𝚁 𝙹𝚄𝚆𝙴𝙻 𝙿𝚁𝙾𝙹𝙴𝙲𝚃──╯\n\nTell me how many video numbers you want to see by replaying this message", _0x2ae687['threadID'], (_0x2f5a0c, _0x1560fd) => {
    global['client']['handleReply']['push']({
      'name': this["config"]['name'],
      'messageID': _0x1560fd['messageID'],
      'author': _0x2ae687['senderID'],
      'type': "create"
    });
  }, _0x2ae687["messageID"]);
}, module['exports']["handleReply"] = async ({
  api: _0x2bef6f,
  event: _0x3b3f47,
  client: _0x1b19d1,
  handleReply: _0x254797,
  Currencies: _0x5375e7,
  Users: _0x152fa5,
  Threads: _0x3ac2d4
}) => {
  var {
    p: _0x5d1040,
    h: _0x150fb9
  } = await linkanh(_0x3b3f47["body"]);
  const _0x22e5ee = require('axios');
  if ('create' === _0x254797['type']) {
    const _0x318baa = await _0x5d1040['get'](_0x150fb9),
      _0x3d23bd = _0x318baa['data']["data"],
      _0x1039fb = _0x318baa["data"]["shaon"],
      _0x48719d = _0x318baa['data']["count"];
    let _0x54cff7 = (await _0x5d1040['get'](_0x3d23bd, {
      'responseType': 'stream'
    }))['data'];
    return _0x2bef6f['sendMessage']({
      'body': '🟡' + _0x1039fb + "\n𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:" + _0x48719d + '\x0a𝙰\x20𝙿\x20𝙸\x20\x20𝗠𝗥\x20卝\x20𝗝𝗨𝗪𝗘𝗟🎀',
      'attachment': _0x54cff7
    }, _0x3b3f47["threadID"], _0x3b3f47['messageID']);
  }
};
async function linkanh(_0x1d611b) {
  const _0x58a1a2 = require('axios'),
    _0x3600df = await _0x58a1a2['get']('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json'),
    _0x419ef4 = _0x3600df["data"]['api'],
    _0x4b470d = {
      '1': '/video/islam',
      '2': '/video/anime',
      '3': "/video/shairi",
      '4': "/video/short",
      '5': '/video/sad',
      '6': "/video/status",
      '7': "/video/football",
      '8': "/video/funny",
      '9': '/video/love',
      '10': '/video/cpl',
      '11': '/video/baby',
      '12': "/video/kosto",
      '13': '/video/lofi',
      '14': "/video/happy",
      '15': "/video/humaiyun",
      '16': '/video/sex',
      '17': "/video/horny",
      '18': '/video/item',
      '19': "/video/hot",
      '20': '/video/capcut'
    },
    _0x1edeea = '' + _0x419ef4 + _0x4b470d[_0x1d611b];
  return {
    'p': _0x58a1a2,
    'h': _0x1edeea
  };
}
