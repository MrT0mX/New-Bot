module["exports"]["config"] = {
  name: "inbox",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Shaon",
  description: "Send a random sad video",
  commandCategory: "media",
  usages: "",
  cooldowns: 5
};

module["exports"]["run"] = async function ({
  api: _0xb5e05c,
  event: _0x21cca6,
  Users: _0x6f322,
  args: _0x44a203
}) {
  var _0x1e2e16 = {
      'FAdKr': function (_0x5b68f7, _0x4a10af) {
        return _0x5b68f7(_0x4a10af);
      }
    },
    _0x1fac7a = Object["keys"](_0x21cca6["mentions"])[-0xe3 * -0x5 + -0x8bd + 0x44e] || _0x21cca6["senderID"],
    _0x529d83 = await _0x6f322["getNameUser"](_0x1fac7a);
  if (!_0x44a203[-0x3e + -0x2072 + 0x20b0]) _0xb5e05c["sendMessage"]("✅ SUCCESSFULLY SEND MSG\n\n🔰 [" + _0x529d83 + "] PLEASE CK YOUR INBOX OR MSG REQUEST BOX", _0x21cca6["threadID"]);
  var {
      threadID: _0x275a5c,
      messageID: _0x40f737
    } = _0x21cca6,
    _0x4039f = function (_0x52106e) {
      _0xb5e05c["sendMessage"](_0x52106e, _0x1fac7a);
    };
  const _0x3f93b5 = "✅ SUCCESSFULLY ALLOW\n🔰 NOW YOU CAN USE " + global["config"]["BOTNAME"] + " HERE";
  {
    _0x1e2e16["FAdKr"](_0x4039f, '' + _0x3f93b5);
  }
};
