const fs = require('fs');
module['exports']["config"] = {
  'name': 'fukeybotvai',
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': '𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝\x20𝙍𝙖𝙟𝙥𝙪𝙩',
  'description': "hihihihi",
  'commandCategory': "no prefix",
  'usages': 'FukeyBot',
  'cooldowns': 0x5
}, module['exports']["handleEvent"] = function ({
  api: _0x323a0b,
  event: _0x577304,
  client: _0xbad5d4,
  __GLOBAL: _0x42d134
}) {
  if (this["config"]['credits'] != "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩") return console['log']('\x1b[33m[\x20WARN\x20]\x1b[37m\x20»\x20Change\x20credits\x20to\x20your\x20mothers\x20dick,\x20bitch:))' + global['config']["BOTNAME"] + " change credits modules \"" + this['config']["name"] + '\x22'), _0x323a0b["sendMessage"]('[\x20WARN\x20]\x20Change\x20the\x20credits,\x20write\x20𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝\x20𝙍𝙖𝙟𝙥𝙪𝙩\x20again', _0x577304['threadID'], _0x577304['messageID']);
  var {
    threadID: _0x19b7ba,
    messageID: _0x5310ff
  } = _0x577304;
  if (_0x577304["body"]['indexOf']('FukeyBot') == 0x0 || _0x577304["body"]['indexOf']("FukeyBot") == 0x0 || _0x577304['body']['indexOf']("FukeyBot") == 0x0 || _0x577304['body']["indexOf"]('fukeybot\x20vai') == 0x0) {
    var _0x10fe59 = {
      'body': 'FukeyBot',
      'attachment': fs['createReadStream'](__dirname + '/noprefix/FukeyBot.png')
    };
    _0x323a0b['sendMessage'](_0x10fe59, _0x19b7ba, _0x5310ff), _0x323a0b["setMessageReaction"]('☠️', _0x577304["messageID"], _0x4d7183 => {}, !![]);
  }
}, module['exports']['run'] = function ({
  api: _0x395e6a,
  event: _0x5c60e6,
  client: _0x437879,
  __GLOBAL: _0xae6ad0
}) {};
