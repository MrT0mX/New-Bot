module["exports"]["config"] = {
  'name': "mp3",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "Islamick Chat",
  'description': "convart MP4 video to MP3",
  'commandCategory': "video Convert Audio",
  'usages': "audio",
  'cooldowns': 0x5
}, module["exports"]["run"] = async function ({
  api: _0x25fa19,
  args: _0x3d91c6,
  event: _0x33c162,
  Currencies: _0x3a5627,
  Users: _0x32b9c6
}) {
  var _0x47711f = {
    'BTgkG': function (_0x15be11, _0x551235) {
      return _0x15be11(_0x551235);
    },
    'IgFhy': "axios",
    'JNVBW': function (_0x334dab, _0x1e5014) {
      return _0x334dab(_0x1e5014);
    },
    'onKxp': "fs-extra",
    'mdegc': function (_0x3aec66, _0x1227e5) {
      return _0x3aec66(_0x1227e5);
    },
    'azWHj': "request",
    'iJtIS': "GET",
    'seWXN': "arraybuffer",
    'OZmxu': function (_0x2d4410, _0x5e122b) {
      return _0x2d4410 + _0x5e122b;
    },
    'NbnFi': "/cache/vdtoau.m4a",
    'OZloi': "utf-8",
    'vjPry': function (_0x2451ee, _0x30aac9) {
      return _0x2451ee + _0x30aac9;
    },
    'Kdosc': "𝗖𝗼𝘃𝗲𝗿𝘁 𝗩𝗶𝗱𝗲𝗼 𝗠𝗣𝟯 🎼\n•┄┅════❁🌺❁════┅┄•\n"
  };
  try {
    const _0x4d4a13 = _0x47711f["BTgkG"](require, _0x47711f["IgFhy"]),
      _0x32fa37 = _0x47711f["JNVBW"](require, _0x47711f["onKxp"]),
      _0x510c3c = _0x47711f["mdegc"](require, _0x47711f["azWHj"]);
    var _0x3ce828 = [],
      _0x1b2f4e = _0x3d91c6["join"]('\x20') || _0x33c162["messageReply"]["attachments"][-0x153a + -0x1ddf + 0x3319]["url"],
      {
        data: _0x376808
      } = await _0x4d4a13["get"](_0x1b2f4e, {
        'method': _0x47711f["iJtIS"],
        'responseType': _0x47711f["seWXN"]
      });
    _0x32fa37["writeFileSync"](_0x47711f["OZmxu"](__dirname, _0x47711f["NbnFi"]), Buffer["from"](_0x376808, _0x47711f["OZloi"])), _0x3ce828["push"](_0x32fa37["createReadStream"](_0x47711f["vjPry"](__dirname, _0x47711f["NbnFi"])));
    var _0x3d1392 = {
      'body': _0x47711f["Kdosc"],
      'attachment': _0x3ce828
    };
    _0x25fa19["sendMessage"](_0x3d1392, _0x33c162["threadID"], _0x33c162["messageID"]);
  } catch (_0xb045c1) {
    console["log"](_0xb045c1);
  }
};
