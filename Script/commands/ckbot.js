module["exports"]["config"] = {
  'name': 'ck',
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "nazrul­",
  'description': "DESCRIPTION ABOUT BOT",
  'commandCategory': "Media",
  'usages': '',
  'cooldowns': 0x4,
  'dependencies': {
    'request': '',
    'fs': ''
  }
}, module["exports"]["run"] = async ({
  api: _0x2b39d4,
  event: _0x74c82d,
  args: _0x5fc694
}) => {
  var _0x594ac2 = {
    'GoPMf': "fs-extra",
    'HtEzp': "request",
    'iEEbG': function (_0x5b8858, _0x516349) {
      return _0x5b8858(_0x516349);
    },
    'ulNEn': "PREFIX",
    'AsbQP': function (_0x4da00d, _0x4c1785) {
      return _0x4da00d == _0x4c1785;
    },
    'CSvnf': "box",
    'lWbyJ': function (_0x203965, _0x3e6b32) {
      return _0x203965 == _0x3e6b32;
    },
    'IZVaG': "MALE",
    'yYDCg': "Turn off",
    'XkpPU': function (_0x382619, _0x43c7a2) {
      return _0x382619 == _0x43c7a2;
    },
    'bDEha': "turn on",
    'cjQGz': function (_0xe4bc36, _0x579a83) {
      return _0xe4bc36(_0x579a83);
    },
    'hrnSv': function (_0x4ab7f2, _0x2fbd49) {
      return _0x4ab7f2 + _0x2fbd49;
    },
    'Uckgd': "/cache/1.png",
    'ezscO': "close",
    'YIJUY': function (_0xbcea13, _0x5357be) {
      return _0xbcea13 == _0x5357be;
    },
    'GrAPL': function (_0x317b24, _0x1007dc) {
      return _0x317b24 == _0x1007dc;
    },
    'HmMfX': function (_0x3d860b, _0x52a5a4) {
      return _0x3d860b == _0x52a5a4;
    },
    'LipET': function (_0x19de8c, _0x370e56) {
      return _0x19de8c(_0x370e56);
    },
    'MJLCA': function (_0x202af8, _0x468659) {
      return _0x202af8 == _0x468659;
    },
    'HpXZi': "admin",
    'jEKAX': function (_0x3c691c, _0x163c37) {
      return _0x3c691c(_0x163c37);
    },
    'xLWDH': "stalk",
    'NKHGc': function (_0x18cd68, _0x5a1ff7) {
      return _0x18cd68 == _0x5a1ff7;
    },
    'QQeho': "message_reply",
    'LQFYa': function (_0xfd417d, _0x57059b) {
      return _0xfd417d == _0x57059b;
    },
    'VLthQ': "are not !",
    'TVVDE': function (_0x44c271, _0x4836f9) {
      return _0x44c271 == _0x4836f9;
    },
    'aTvXh': "Yes !",
    'PBnNg': "Damn",
    'nrpKc': "Male",
    'yrGNV': function (_0xda4ef, _0x734ba) {
      return _0xda4ef == _0x734ba;
    },
    'IzPQI': "Female",
    'SfUHg': "Tran Duc Bo",
    'ukqzF': function (_0x4b5a9e, _0x5641fb) {
      return _0x4b5a9e(_0x5641fb);
    },
    'qmgAT': function (_0xf753df, _0x5e4b60) {
      return _0xf753df + _0x5e4b60;
    },
    'YEwip': function (_0x2db838, _0x4a3b94) {
      return _0x2db838 !== _0x4a3b94;
    },
    'QJWBW': "yes!",
    'aTCGR': "Dammit",
    'usxem': function (_0x4020a2, _0x20e509) {
      return _0x4020a2 == _0x20e509;
    },
    'qEeiN': function (_0x2762fe, _0x5a6161) {
      return _0x2762fe(_0x5a6161);
    },
    'owsKM': function (_0x5b2777, _0x4c3cc4) {
      return _0x5b2777 + _0x4c3cc4;
    },
    'syTQV': function (_0x1d8c23, _0x87f955) {
      return _0x1d8c23 == _0x87f955;
    },
    'rpWub': function (_0x54e4b2, _0x2d48b1) {
      return _0x54e4b2 == _0x2d48b1;
    },
    'ZfPHn': "Name",
    'DpjtV': function (_0x13261f, _0x502387) {
      return _0x13261f(_0x502387);
    },
    'pcRKh': function (_0x223b55, _0x247a79) {
      return _0x223b55(_0x247a79);
    },
    'OqyMb': function (_0x235f54, _0x1d88ba) {
      return _0x235f54 + _0x1d88ba;
    }
  };
  const _0x49e402 = global["nodemodule"][_0x594ac2["GoPMf"]],
    _0x4fd968 = global["nodemodule"][_0x594ac2["HtEzp"]],
    _0x4fde81 = global["data"]["threadData"]["get"](_0x594ac2["iEEbG"](parseInt, _0x74c82d["threadID"])) || {},
    _0x4ef90f = _0x4fde81["hasOwnProperty"](_0x594ac2["ulNEn"]) ? _0x4fde81["PREFIX"] : global["config"]["PREFIX"];
  if (_0x594ac2["AsbQP"](_0x5fc694["length"], -0x1e02 + -0x934 + 0x2cd * 0xe)) return _0x2b39d4["sendMessage"]("You can use:\n\n" + _0x4ef90f + this["config"]["name"] + " user => it will take your own information.\n\n" + _0x4ef90f + this["config"]["name"] + " user @[Tag] => it will get friend information tag.\n\n" + _0x4ef90f + this["config"]["name"] + " box => it will get your box information (number of members, djt each other,...)\n\n" + _0x4ef90f + this["config"]["name"] + " user box [uid || tid.:\n\n" + _0x4ef90f + this["config"]["name"] + " admin => Admin Bot's Personal Information]", _0x74c82d["threadID"], _0x74c82d["messageID"]);
  if (_0x594ac2["AsbQP"](_0x5fc694[-0xb25 * -0x3 + 0x39 * 0x9d + -0x4464], _0x594ac2["CSvnf"])) {
    if (_0x5fc694[0x681 * -0x5 + 0x9e0 + 0x1a * 0xdf]) {
      let _0x1419bd = await _0x2b39d4["getThreadInfo"](_0x5fc694[-0xbf9 + -0x127 * -0x3 + 0x3 * 0x2d7]),
        _0xb83070 = _0x1419bd["imageSrc"];
      var _0x4601b7 = [],
        _0x378e4f = [];
      for (let _0xb24db5 in _0x1419bd["userInfo"]) {
        var _0x5a064c = _0x1419bd["userInfo"][_0xb24db5]["gender"];
        _0x594ac2["lWbyJ"](_0x5a064c, _0x594ac2["IZVaG"]) ? _0x4601b7["push"](_0x5a064c) : _0x378e4f["push"](_0x5a064c);
      }
      ;
      var _0x64d9ad = _0x4601b7["length"],
        _0x49e4d0 = _0x378e4f["length"];
      let _0x4c5576 = _0x1419bd["approvalMode"];
      var _0x3986f2 = _0x594ac2["lWbyJ"](_0x4c5576, ![]) ? _0x594ac2["yYDCg"] : _0x594ac2["XkpPU"](_0x4c5576, !![]) ? _0x594ac2["bDEha"] : 'NS';
      if (!_0xb83070) _0x2b39d4["sendMessage"]("Group name: " + _0x1419bd["threadName"] + "\nTID: " + _0x5fc694[0x269 * -0xf + 0x150a + 0x285 * 0x6] + "\nApproved: " + _0x3986f2 + "\nEmoji: " + _0x1419bd["emoji"] + "\nInformation: \n" + _0x1419bd["participantIDs"]["length"] + " members and " + _0x1419bd["adminIDs"]["length"] + " administrators.\nIncluding " + _0x64d9ad + " boy and " + _0x49e4d0 + " female.\nTotal number of messages: " + _0x1419bd["messageCount"] + '.', _0x74c82d["threadID"], _0x74c82d["messageID"]);else var _0x535002 = () => _0x2b39d4["sendMessage"]({
        'body': "Group name: " + _0x1419bd["threadName"] + "\nTID: " + _0x5fc694[0x8a1 * 0x2 + 0x223f + -0x3380] + "\nApproved: " + _0x3986f2 + "\nEmoji: " + _0x1419bd["emoji"] + "\nInformation: \n" + _0x1419bd["participantIDs"]["length"] + " members and " + _0x1419bd["adminIDs"]["length"] + "administrators.\nIncluding " + _0x64d9ad + " boy and " + _0x49e4d0 + " female.\nTotal number of messages: " + _0x1419bd["messageCount"] + '.',
        'attachment': _0x49e402["createReadStream"](__dirname + "/cache/1.png")
      }, _0x74c82d["threadID"], () => _0x49e402["unlinkSync"](__dirname + "/cache/1.png"), _0x74c82d["messageID"]);
      return _0x594ac2["cjQGz"](_0x4fd968, _0x594ac2["cjQGz"](encodeURI, '' + _0x1419bd["imageSrc"]))["pipe"](_0x49e402["createWriteStream"](_0x594ac2["hrnSv"](__dirname, _0x594ac2["Uckgd"])))['on'](_0x594ac2["ezscO"], () => _0x535002());
    }
    let _0x47bd01 = await _0x2b39d4["getThreadInfo"](_0x74c82d["threadID"]),
      _0x1ef44f = _0x47bd01["imageSrc"];
    var _0x4601b7 = [],
      _0x378e4f = [];
    for (let _0x319c7a in _0x47bd01["userInfo"]) {
      var _0x5a064c = _0x47bd01["userInfo"][_0x319c7a]["gender"];
      _0x594ac2["YIJUY"](_0x5a064c, _0x594ac2["IZVaG"]) ? _0x4601b7["push"](_0x5a064c) : _0x378e4f["push"](_0x5a064c);
    }
    ;
    var _0x64d9ad = _0x4601b7["length"],
      _0x49e4d0 = _0x378e4f["length"];
    let _0x1c7443 = _0x47bd01["approvalMode"];
    var _0x3986f2 = _0x594ac2["GrAPL"](_0x1c7443, ![]) ? _0x594ac2["yYDCg"] : _0x594ac2["HmMfX"](_0x1c7443, !![]) ? _0x594ac2["bDEha"] : 'NS';
    if (!_0x1ef44f) _0x2b39d4["sendMessage"]("Group name: " + _0x47bd01["threadName"] + "\nTID: " + _0x74c82d["threadID"] + "\nApproved: " + _0x3986f2 + "\nEmoji: " + _0x47bd01["emoji"] + "\nInformation: \nÂ»" + _0x47bd01["participantIDs"]["length"] + " members and " + _0x47bd01["adminIDs"]["length"] + " administrators.\nIncluding " + _0x64d9ad + " boy and " + _0x49e4d0 + " \nTotal number of messages: " + _0x47bd01["messageCount"] + '.', _0x74c82d["threadID"], _0x74c82d["messageID"]);else var _0x535002 = () => _0x2b39d4["sendMessage"]({
      'body': "Group name: " + _0x47bd01["threadName"] + "\nTID: " + _0x74c82d["threadID"] + "\nBrowser: " + _0x3986f2 + "\nEmoji: " + _0x47bd01["emoji"] + "\nInformation: \n" + _0x47bd01["participantIDs"]["length"] + " members and " + _0x47bd01["adminIDs"]["length"] + " administrators.\nIncluding " + _0x64d9ad + " boy and " + _0x49e4d0 + " female.\nTotal number of messages: " + _0x47bd01["messageCount"] + '.',
      'attachment': _0x49e402["createReadStream"](__dirname + "/cache/1.png")
    }, _0x74c82d["threadID"], () => _0x49e402["unlinkSync"](__dirname + "/cache/1.png"), _0x74c82d["messageID"]);
    return _0x594ac2["cjQGz"](_0x4fd968, _0x594ac2["LipET"](encodeURI, '' + _0x47bd01["imageSrc"]))["pipe"](_0x49e402["createWriteStream"](_0x594ac2["hrnSv"](__dirname, _0x594ac2["Uckgd"])))['on'](_0x594ac2["ezscO"], () => _0x535002());
  }
  if (_0x594ac2["MJLCA"](_0x5fc694["length"], 0x1 * 0x5d7 + 0x1 * -0x4f + -0x8 * 0xb1)) return _0x2b39d4["sendMessage"]("You can use:\n\n" + _0x4ef90f + this["config"]["name"] + " user => it will get your own information.\n\n" + _0x4ef90f + this["config"]["name"] + " user @[Tag] => it will get the information of the person you tag.\n\n" + _0x4ef90f + this["config"]["name"] + " box => it will get your box information (number of members, djt each other,...)\n\n" + _0x4ef90f + this["config"]["name"] + " user box [uid || tid]", _0x74c82d["threadID"], _0x74c82d["messageID"]);
  if (_0x594ac2["GrAPL"](_0x5fc694[-0x1cb3 * 0x1 + -0x6df + 0x2392], _0x594ac2["HpXZi"])) {
    var _0x535002 = () => _0x2b39d4["sendMessage"]({
      'body': "𝐍𝐚𝐦𝐞➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭\n𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱➢ [ " + _0x4ef90f + " ]\n𝐌𝐢𝐧𝐞 𝐀𝐝𝐦𝐢𝐧➢ 𝐍𝐚𝐳𝐫𝐮𝐥\n𝐌𝐞𝐬𝐬𝐚𝐠𝐞➢ https ://m.me/ji.la.pi.6\n𝐓𝐡𝐚𝐧𝐤𝐬 𝐘𝐨𝐮 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠   " + global["config"]["BOTNAME"] + " 𝐁𝐨𝐭\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
      'attachment': _0x49e402["createReadStream"](__dirname + "/cache/1.png")
    }, _0x74c82d["threadID"], () => _0x49e402["unlinkSync"](__dirname + "/cache/1.png"));
    return _0x594ac2["iEEbG"](_0x4fd968, _0x594ac2["jEKAX"](encodeURI, "https://graph.facebook.com/100000350435589/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"))["pipe"](_0x49e402["createWriteStream"](_0x594ac2["hrnSv"](__dirname, _0x594ac2["Uckgd"])))['on'](_0x594ac2["ezscO"], () => _0x535002());
  }
  ;
  if (_0x594ac2["HmMfX"](_0x5fc694[-0x26a1 + -0x2429 * 0x1 + 0x4aca], _0x594ac2["xLWDH"])) {
    if (!_0x5fc694[0xec1 * 0x2 + 0x425 * -0x3 + 0x1112 * -0x1]) {
      if (_0x594ac2["NKHGc"](_0x74c82d["type"], _0x594ac2["QQeho"])) id = _0x74c82d["messageReply"]["senderID"];else id = _0x74c82d["senderID"];
      let _0x54d576 = await _0x2b39d4["getUserInfo"](id),
        _0x5c7dd4 = _0x54d576[id]["profileUrl"],
        _0x449779 = _0x594ac2["LQFYa"](_0x54d576[id]["isFriend"], ![]) ? _0x594ac2["VLthQ"] : _0x594ac2["TVVDE"](_0x54d576[id]["isFriend"], !![]) ? _0x594ac2["aTvXh"] : _0x594ac2["PBnNg"],
        _0x276db0 = _0x54d576[id]["vanity"],
        _0x2936e4 = await _0x54d576[id]["name"];
      var _0x1b8199 = await _0x54d576[id]["gender"],
        _0x3cacfa = _0x594ac2["MJLCA"](_0x1b8199, -0x10c * -0xa + -0xf35 + 0x4bf) ? _0x594ac2["nrpKc"] : _0x594ac2["yrGNV"](_0x1b8199, 0x43b + 0x1667 * 0x1 + -0x191 * 0x11) ? _0x594ac2["IzPQI"] : _0x594ac2["SfUHg"],
        _0x535002 = () => _0x2b39d4["sendMessage"]({
          'body': "𝗜𝗗 𝗡𝗔𝗠𝗘: " + _0x2936e4 + ("\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: https://www.facebook.com/profile.php?id=" + id) + ("\n𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘: " + _0x276db0 + "\n𝗨𝗜𝗗: " + id + "\n𝗚𝗘𝗡𝗗𝗘𝗥: " + _0x3cacfa + "\n𝗠𝗔𝗞𝗘 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 𝗪𝗜𝗧𝗛 𝗕𝗢𝗧𝗦: " + _0x449779),
          'attachment': _0x49e402["createReadStream"](__dirname + "/cache/1.png")
        }, _0x74c82d["threadID"], () => _0x49e402["unlinkSync"](__dirname + "/cache/1.png"), _0x74c82d["messageID"]);
      return _0x594ac2["LipET"](_0x4fd968, _0x594ac2["ukqzF"](encodeURI, "https://graph.facebook.com/" + id + "/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"))["pipe"](_0x49e402["createWriteStream"](_0x594ac2["qmgAT"](__dirname, _0x594ac2["Uckgd"])))['on'](_0x594ac2["ezscO"], () => _0x535002());
    } else {
      if (_0x594ac2["YEwip"](_0x5fc694["join"]()["indexOf"]('@'), -(0x4 * 0x7eb + -0x35e * 0x4 + -0x611 * 0x3))) {
        var _0x1e530f = Object["keys"](_0x74c82d["mentions"]);
        let _0x13efe8 = await _0x2b39d4["getUserInfo"](_0x1e530f),
          _0x42d6b1 = _0x13efe8[_0x1e530f]["profileUrl"],
          _0x22b307 = _0x594ac2["yrGNV"](_0x13efe8[_0x1e530f]["isFriend"], ![]) ? _0x594ac2["VLthQ"] : _0x594ac2["TVVDE"](_0x13efe8[_0x1e530f]["isFriend"], !![]) ? _0x594ac2["QJWBW"] : _0x594ac2["aTCGR"],
          _0x52128d = _0x13efe8[_0x1e530f]["vanity"],
          _0x188c53 = await _0x13efe8[_0x1e530f]["name"];
        var _0x1b8199 = await _0x13efe8[_0x1e530f]["gender"],
          _0x3cacfa = _0x594ac2["usxem"](_0x1b8199, -0x26d6 + 0x30 * -0x90 + 0x8 * 0x83b) ? _0x594ac2["nrpKc"] : _0x594ac2["GrAPL"](_0x1b8199, 0x194 * 0x1 + 0x1dc5 * -0x1 + 0x1c32) ? _0x594ac2["IzPQI"] : _0x594ac2["SfUHg"],
          _0x535002 = () => _0x2b39d4["sendMessage"]({
            'body': "𝗜𝗗 𝗡𝗔𝗠𝗘: " + _0x188c53 + ("\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: https://www.facebook.com/profile.php?id=" + _0x1e530f) + ("\n𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘: " + _0x52128d + "\n𝗨𝗜𝗗: " + _0x1e530f + "\n𝗦𝗘𝗫: " + _0x3cacfa + "\n𝗠𝗔𝗞𝗘 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 𝗪𝗜𝗧𝗛 𝗕𝗢𝗧𝗦: " + _0x22b307),
            'attachment': _0x49e402["createReadStream"](__dirname + "/cache/1.png")
          }, _0x74c82d["threadID"], () => _0x49e402["unlinkSync"](__dirname + "/cache/1.png"), _0x74c82d["messageID"]);
        return _0x594ac2["iEEbG"](_0x4fd968, _0x594ac2["qEeiN"](encodeURI, "https://graph.facebook.com/" + _0x1e530f + "/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"))["pipe"](_0x49e402["createWriteStream"](_0x594ac2["owsKM"](__dirname, _0x594ac2["Uckgd"])))['on'](_0x594ac2["ezscO"], () => _0x535002());
      } else {
        let _0x1c08cb = await _0x2b39d4["getUserInfo"](_0x5fc694[0xcd3 + 0x7 * -0x32b + 0x5 * 0x1df]),
          _0x1cdcb7 = _0x1c08cb[_0x5fc694[0x1952 + 0x2 * -0x2c3 + 0x13cb * -0x1]]["profileUrl"],
          _0x38e46d = _0x594ac2["lWbyJ"](_0x1c08cb[_0x5fc694[0x1 * -0x187d + 0x4af * -0x4 + 0x2b3a]]["isFriend"], ![]) ? _0x594ac2["VLthQ"] : _0x594ac2["syTQV"](_0x1c08cb[_0x5fc694[0x22b5 * -0x1 + -0x1 * -0x802 + 0x1ab4]]["isFriend"], !![]) ? _0x594ac2["QJWBW"] : _0x594ac2["PBnNg"],
          _0x902917 = _0x1c08cb[_0x5fc694[-0x597 + 0x8ad + -0x1 * 0x315]]["vanity"],
          _0x133eb1 = await _0x1c08cb[_0x5fc694[-0x2590 + -0x1bde + 0x416f]]["name"];
        var _0x1b8199 = await _0x1c08cb[_0x5fc694[0xd0d + -0x1ea6 + 0x8cd * 0x2]]["gender"],
          _0x3cacfa = _0x594ac2["rpWub"](_0x1b8199, 0xd28 + -0x1 * -0x399 + 0x10bf * -0x1) ? _0x594ac2["ZfPHn"] : _0x594ac2["rpWub"](_0x1b8199, -0x12f2 + 0x0 + -0x651 * -0x3) ? _0x594ac2["IzPQI"] : _0x594ac2["SfUHg"],
          _0x535002 = () => _0x2b39d4["sendMessage"]({
            'body': "𝗜𝗗 𝗡𝗔𝗠𝗘: " + _0x133eb1 + ("\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: https://www.facebook.com/profile.php?id=" + _0x5fc694[-0x1 * 0x1cf6 + 0x4 * -0x116 + 0x214f]) + ("\n𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘: " + _0x902917 + "\n𝗨𝗜𝗗: " + _0x5fc694[0x1c * 0xe4 + -0x6ed + -0x1202] + "\n𝗚𝗘𝗡𝗗𝗘𝗥: " + _0x3cacfa + "\n𝗠𝗔𝗞𝗘 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 𝗪𝗜𝗧𝗛 𝗕𝗢𝗧𝗦: " + _0x38e46d),
            'attachment': _0x49e402["createReadStream"](__dirname + "/cache/1.png")
          }, _0x74c82d["threadID"], () => _0x49e402["unlinkSync"](__dirname + "/cache/1.png"), _0x74c82d["messageID"]);
        return _0x594ac2["DpjtV"](_0x4fd968, _0x594ac2["pcRKh"](encodeURI, "https://graph.facebook.com/" + _0x5fc694[0x128 + 0x1aed + -0x1c14] + "/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"))["pipe"](_0x49e402["createWriteStream"](_0x594ac2["OqyMb"](__dirname, _0x594ac2["Uckgd"])))['on'](_0x594ac2["ezscO"], () => _0x535002());
      }
    }
  }
};
