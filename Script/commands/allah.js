module["exports"]["config"] = {
  'name': "allah",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'Credits': "Islamick Cyber Chat",
  'description': "Allaha text gif",
  'commandCategory': "Text gif",
  'usages': "allah",
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
}, module["exports"]["run"] = async ({
  api: _0x2e1823,
  event: _0x33944e,
  args: _0x3ad267,
  client: _0xed7768,
  Users: _0x432328,
  Threads: _0x2162ce,
  __GLOBAL: _0x1f422b,
  Currencies: _0x4b946f
}) => {
  const _0x4b8199 = {
      'fPZgW': "axios",
      'FBblS': "request",
      'ILYSh': "fs-extra",
      'hHXsx': "https://i.imgur.com/7zLmJch.gif",
      'tIMkZ': "https://i.imgur.com/U07Yd3U.gif",
      'QyRMS': "https://i.imgur.com/DHoZ9A1.gif",
      'CswCI': "https://i.imgur.com/oV4VMvm.gif",
      'NMuKX': "https://i.imgur.com/ScGCmKE.gif",
      'GwFHb': "https://i.imgur.com/r0ZE7lx.gif",
      'UAgJv': "https://i.imgur.com/C2a3Cj3.gif",
      'UajOg': "https://i.imgur.com/98PjVxg.gif",
      'ffLSS': "https://i.imgur.com/LvUF38x.gif",
      'kHpbZ': "https://i.imgur.com/2eewmJm.gif",
      'AEDaQ': function (_0x2c8905, _0x2c0213) {
        return _0x2c8905(_0x2c0213);
      },
      'Dhvpj': function (_0x38cfa1, _0x2b59a4) {
        return _0x38cfa1(_0x2b59a4);
      },
      'ZahXa': function (_0x5f0180, _0x486456) {
        return _0x5f0180 * _0x486456;
      },
      'hcgXy': function (_0x37a1d2, _0x1bf9bc) {
        return _0x37a1d2 + _0x1bf9bc;
      },
      'ZSrBh': "/cache/5.gif",
      'tmBXe': "close"
    },
    _0x431ead = global["nodemodule"][_0x4b8199["fPZgW"]],
    _0x32763e = global["nodemodule"][_0x4b8199["FBblS"]],
    _0x2cbe86 = global["nodemodule"][_0x4b8199["ILYSh"]];
  var _0x47d387 = [_0x4b8199["hHXsx"], _0x4b8199["tIMkZ"], _0x4b8199["QyRMS"], _0x4b8199["CswCI"], _0x4b8199["NMuKX"], _0x4b8199["GwFHb"], _0x4b8199["UAgJv"], _0x4b8199["UajOg"], _0x4b8199["ffLSS"], _0x4b8199["kHpbZ"]],
    _0x1ff28c = () => _0x2e1823["sendMessage"]({
      'body': "•—»✨ [ 𝗔𝗹𝗹𝗮𝗵 𝗚𝗜𝗙 ] ✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n\n✿┼─আল্লাহু আকবর┼─✿ \n\n\n•┄┅════❁🌺❁════┅┄•",
      'attachment': _0x2cbe86["createReadStream"](__dirname + "/cache/5.gif")
    }, _0x33944e["threadID"], () => _0x2cbe86["unlinkSync"](__dirname + "/cache/5.gif"));
  return _0x4b8199["AEDaQ"](_0x32763e, _0x4b8199["Dhvpj"](encodeURI, _0x47d387[Math["floor"](_0x4b8199["ZahXa"](Math["random"](), _0x47d387["length"]))]))["pipe"](_0x2cbe86["createWriteStream"](_0x4b8199["hcgXy"](__dirname, _0x4b8199["ZSrBh"])))['on'](_0x4b8199["tmBXe"], () => _0x1ff28c());
};
