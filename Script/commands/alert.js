module["exports"]['config'] = {
  'name': "alert",
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': "Joshua Sy",
  'description': '',
  'commandCategory': 'image',
  'usages': "text",
  'cooldowns': 0x0,
  'dependencies': {
    'fs-extra': '',
    'request': ''
  }
}, module["exports"]["run"] = async ({
  api: _0x30c925,
  event: _0x29af92,
  args: _0x3eb11f
}) => {
  {
    const _0x1e953e = global['nodemodule']['fs-extra'],
      _0x313fea = global["nodemodule"]["request"],
      {
        threadID: _0x4d12ba,
        messageID: _0x4d19c7,
        senderID: _0x4772ef,
        body: _0x1f3d38
      } = _0x29af92;
    let _0xc03720 = _0x3eb11f["toString"]()['replace'](/,/g, '\x20\x20');
    if (!_0xc03720) return _0x30c925["sendMessage"]("Add text lmao", _0x29af92["threadID"], _0x29af92["messageID"]);
    var _0x4d903c = () => _0x30c925["sendMessage"]({
      'body': '',
      'attachment': _0x1e953e["createReadStream"](__dirname + "/cache/biden.png")
    }, _0x29af92["threadID"], () => _0x1e953e["unlinkSync"](__dirname + "/cache/biden.png"), _0x29af92["messageID"]);
    return _0x313fea(encodeURI("https://api.popcat.xyz/alert?text=" + _0xc03720))["pipe"](_0x1e953e["createWriteStream"](__dirname + "/cache/biden.png"))['on']('close', () => _0x4d903c());
  }
};
