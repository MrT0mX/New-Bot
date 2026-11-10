module["exports"]["config"] = {
  'name': "single",
  'version': "2.6.0",
  'hasPermssion': 0x0,
  'credits': "nazrul",
  'description': '',
  'commandCategory': "Love",
  'usages': "[tag]",
  'cooldowns': 0x5,
  'dependencies': {
    'axios': '',
    'fs-extra': '',
    'path': '',
    'jimp': ''
  }
}, module["exports"]["onLoad"] = async () => {
  const _0x49f2cb = {
      'SNaNE': "path",
      'ZzBTE': "fs-extra",
      'IUVyM': function (_0x1187c7, _0x3cf438) {
        return _0x1187c7 + _0x3cf438;
      },
      'LgwXb': function (_0x3c306a, _0x5826db, _0x4ff820, _0xe0bb3b) {
        return _0x3c306a(_0x5826db, _0x4ff820, _0xe0bb3b);
      },
      'GrjJx': "cache/canvas",
      'nirkD': "lovef.jpg",
      'MytJB': function (_0x3519b8, _0x5cf277) {
        return _0x3519b8(_0x5cf277);
      },
      'VQzrG': function (_0x4fed0b, _0x427b31) {
        return _0x4fed0b + _0x427b31;
      },
      'zfDho': "canvas",
      'dVuYg': function (_0x333cb1, _0x55c6cc, _0x4b5093) {
        return _0x333cb1(_0x55c6cc, _0x4b5093);
      },
      'nmgdj': function (_0x81872b, _0x291dec) {
        return _0x81872b(_0x291dec);
      },
      'FdNYh': "https://i.imgur.com/cF5I9t3.jpg"
    },
    {
      resolve: _0x2e258f
    } = global["nodemodule"][_0x49f2cb["SNaNE"]],
    {
      existsSync: _0x3e9c4a,
      mkdirSync: _0x2e5ae3
    } = global["nodemodule"][_0x49f2cb["ZzBTE"]],
    {
      downloadFile: _0x418df6
    } = global["utils"],
    _0x1b55b2 = _0x49f2cb["IUVyM"](__dirname, "/cache/canvas/"),
    _0x44011b = _0x49f2cb["LgwXb"](_0x2e258f, __dirname, _0x49f2cb["GrjJx"], _0x49f2cb["nirkD"]);
  if (!_0x49f2cb["MytJB"](_0x3e9c4a, _0x49f2cb["VQzrG"](_0x1b55b2, _0x49f2cb["zfDho"]))) _0x49f2cb["dVuYg"](_0x2e5ae3, _0x1b55b2, {
    'recursive': !![]
  });
  if (!_0x49f2cb["nmgdj"](_0x3e9c4a, _0x44011b)) await _0x49f2cb["dVuYg"](_0x418df6, _0x49f2cb["FdNYh"], _0x44011b);
};
async function makeImage({
  one: _0x5e5842,
  two: _0x182401
}) {
  const _0x27cac3 = {
      'KnqwA': "fs-extra",
      'TEZPT': "path",
      'pHApd': "axios",
      'OJLxf': "jimp",
      'xbFbb': "cache",
      'vABRH': "canvas",
      'stxBI': function (_0x507364, _0x4a3483) {
        return _0x507364 + _0x4a3483;
      },
      'xIJPU': "/lovef.jpg",
      'DEQMd': function (_0xcab31f, _0x441599) {
        return _0xcab31f + _0x441599;
      },
      'zzbLn': function (_0x2bee2c, _0x3271b3) {
        return _0x2bee2c + _0x3271b3;
      },
      'UnZVA': "arraybuffer",
      'XhtTD': "utf-8",
      'ERjfv': function (_0x35210b, _0x17b3e8) {
        return _0x35210b(_0x17b3e8);
      },
      'Knhpj': function (_0x3132ac, _0x4dd649) {
        return _0x3132ac(_0x4dd649);
      },
      'DwJVR': "image/png"
    },
    _0x3deaf4 = global["nodemodule"][_0x27cac3["KnqwA"]],
    _0x37661c = global["nodemodule"][_0x27cac3["TEZPT"]],
    _0x6be126 = global["nodemodule"][_0x27cac3["pHApd"]],
    _0x25ca4c = global["nodemodule"][_0x27cac3["OJLxf"]],
    _0x3595f5 = _0x37661c["resolve"](__dirname, _0x27cac3["xbFbb"], _0x27cac3["vABRH"]);
  let _0x15efde = await _0x25ca4c["read"](_0x27cac3["stxBI"](_0x3595f5, _0x27cac3["xIJPU"])),
    _0x1b3126 = _0x27cac3["DEQMd"](_0x3595f5, "/love_" + _0x5e5842 + '_' + _0x182401 + ".png"),
    _0x102e79 = _0x27cac3["zzbLn"](_0x3595f5, "/avt_" + _0x5e5842 + ".png"),
    _0x12909c = _0x27cac3["zzbLn"](_0x3595f5, "/avt_" + _0x182401 + ".png"),
    _0x4fc9f5 = (await _0x6be126["get"]("https://graph.facebook.com/" + _0x5e5842 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
      'responseType': _0x27cac3["UnZVA"]
    }))["data"];
  _0x3deaf4["writeFileSync"](_0x102e79, Buffer["from"](_0x4fc9f5, _0x27cac3["XhtTD"]));
  let _0x30e902 = (await _0x6be126["get"]("https://graph.facebook.com/" + _0x182401 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': _0x27cac3["UnZVA"]
  }))["data"];
  _0x3deaf4["writeFileSync"](_0x12909c, Buffer["from"](_0x30e902, _0x27cac3["XhtTD"]));
  let _0x135390 = await _0x25ca4c["read"](await _0x27cac3["ERjfv"](circle, _0x102e79)),
    _0x184232 = await _0x25ca4c["read"](await _0x27cac3["Knhpj"](circle, _0x12909c));
  _0x15efde["composite"](_0x135390["resize"](0x39c * 0x1 + -0xb * 0x32b + -0x2 * -0xfef, -0x115f * -0x2 + -0x1a8 + -0x2075), -0x1051 + 0x1 * 0x13d + 0xf4d, -0xe9 * 0x17 + -0x179 * -0x11 + -0x3b6)["composite"](_0x184232["resize"](-0x1a79 + -0x1f32 + -0x2 * -0x1d47, 0x1 * -0x1cab + 0x14d6 + 0x825), 0x2038 + 0x17b9 * -0x1 + 0x433 * -0x1, 0x2 * -0x112a + -0x6 * 0x9f + 0x266a);
  let _0x5452ca = await _0x15efde["getBufferAsync"](_0x27cac3["DwJVR"]);
  return _0x3deaf4["writeFileSync"](_0x1b3126, _0x5452ca), _0x3deaf4["unlinkSync"](_0x102e79), _0x3deaf4["unlinkSync"](_0x12909c), _0x1b3126;
}
async function circle(_0x335050) {
  const _0xef73ea = {
      'OMXzk': function (_0xada852, _0x38e697) {
        return _0xada852(_0x38e697);
      },
      'nQpox': "jimp",
      'mFGQe': "image/png"
    },
    _0x3cd6a5 = _0xef73ea["OMXzk"](require, _0xef73ea["nQpox"]);
  return _0x335050 = await _0x3cd6a5["read"](_0x335050), _0x335050["circle"](), await _0x335050["getBufferAsync"](_0xef73ea["mFGQe"]);
}
module["exports"]["run"] = async function ({
  event: _0x3539b0,
  api: _0x38c23e,
  args: _0x56697f
}) {
  const _0x2f0deb = {
      'LnQwa': "fs-extra",
      'qcwvG': "Please tag 1 person",
      'XNECL': function (_0x5c33a4, _0x7ec046) {
        return _0x5c33a4(_0x7ec046);
      }
    },
    _0xd6fc57 = global["nodemodule"][_0x2f0deb["LnQwa"]],
    {
      threadID: _0x3f9d1c,
      messageID: _0x3ae365,
      senderID: _0x10f4df
    } = _0x3539b0;
  var _0x3c9777 = Object["keys"](_0x3539b0["mentions"])[-0x1 * -0x515 + 0x769 + 0xd * -0xf6];
  let _0x230801 = _0x3539b0["mentions"][_0x3c9777]["replace"]('@', '');
  if (!_0x3c9777) return _0x38c23e["sendMessage"](_0x2f0deb["qcwvG"], _0x3f9d1c, _0x3ae365);else {
    var _0x134871 = _0x10f4df,
      _0x16bb0b = _0x3c9777;
    return _0x2f0deb["XNECL"](makeImage, {
      'one': _0x134871,
      'two': _0x16bb0b
    })["then"](_0x14cac5 => _0x38c23e["sendMessage"]({
      'body': "This " + _0x230801 + "\ni am single😑😑🥲",
      'mentions': [{
        'tag': _0x230801,
        'id': _0x3c9777
      }],
      'attachment': _0xd6fc57["createReadStream"](_0x14cac5)
    }, _0x3f9d1c, () => _0xd6fc57["unlinkSync"](_0x14cac5), _0x3ae365));
  }
};
