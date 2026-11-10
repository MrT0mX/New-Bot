const axios = require("axios"),
  request = require('request'),
  fs = require('fs-extra');
module['exports']["config"] = {
  'name': "textpro",
  'version': "1.0",
  'hasPermssion': 0x0,
  'credits': "Priyansh Rajput",
  'description': "Make your own logo using textpro",
  'usePrefix': !![],
  'commandCategory': "logo",
  'usages': 'Textpro\x20list\x20(page\x20number)\x20or\x20textpro\x20(logo)\x20(text)',
  'cooldowns': 0x2
}, module["exports"]['run'] = async function ({
  api: _0x41d78e,
  event: _0x251271,
  args: _0x13637d,
  Users: _0x3c9d08
}) {
  let {
    messageID: _0x40d86d,
    senderID: _0x478da0,
    threadID: _0x33a851
  } = _0x251271;
  if (_0x13637d["length"] >= 0x2 && _0x13637d[0x0]["toLowerCase"]() === "list") {
    let _0x366777 = parseInt(_0x13637d[0x1]);
    switch (_0x366777) {
      case 0x1:
        return _0x41d78e["sendMessage"]('Logo\x20list\x20-\x20Page\x201:\x0a1.\x20Premium-king\x0a2.\x20Sand\x0a3.\x20Sky\x0a4.\x20Wallpant\x0a5.\x20Beachv2\x0a6.\x20Painting\x0a7.\x20Black-metal\x0a8.\x20Sketch\x0a9.\x20Glitch-neon\x0a10.\x20War\x0a11.\x20Ghost-green\x0a12.\x20Candyv2\x0a13.\x20Christmusv2\x0a14.\x20Metalv2\x0a15.\x20Relics\x0a16.\x203d-dragon\x0a17.\x20Rust-metal\x0a18.\x20Woodv2\x0a19.\x20Beachv3\x0a20.\x20Neon-love\x0a21.\x20Neon-heart\x0a22.\x20Birthday\x0a23.\x20Dot-font\x0a24.\x20Eid\x0a25.\x20Sunset\x0a26.\x20Skyfont\x0a27.\x20Bluish\x0a28.\x20Beachfont\x0a29.\x20Ghostfont\x0a30.\x20Greenleaf\x0a\x20✨Logo\x20list\x20made\x20by\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷\x0a\x0aPAGE\x201\x20-\x203', _0x33a851, _0x40d86d);
      case 0x2:
        return _0x41d78e["sendMessage"]("Logo list - Page 2:\n31. Black-diamond\n32. Blackpinkv2\n33. Rainbow-sky\n34. Ring-light\n35. Goldenv2\n36. Sparkle\n37. Golden\n38. Newpurple\n39. Wood\n40. Goldv2\n41. woodv2\n42. Marble\n43. Bloodboard\n44. Drugs\n45. Chritsmus\n46. Foog\n47. Neon-rainbow\n48. Green-leaser\n50. Lightbubble\n51. Leaser-neon\n52. 3d-box\n53. Thunderv2\n54. Fish\n55. Jewerly\n56. Jewerlyv2\n57. Blue-mat\n58. Stone-wood\n59. Jokerlogo\n60. Wolflogo\n61. Premium\n ✨Logo list made by 𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷\n\nPAGE 2 - 3", _0x33a851, _0x40d86d);
      case 0x3:
        return _0x41d78e["sendMessage"]("Logo list - Page 3:\n62. Ghost-theme\n63. Rainbow-king\n64. Pink-king\n65. 2024gif\n66. 2024\n67. Mat-neon\n68. Awesome\n69. Icev2\n70. Painitngv2\n71. Neon-pink\n72. Neonv2\n73. Thunder\n74. Strawberryv2\n75. Blackpink\n76. Font\n77. Pinkcandy\n78. Gold-font\n79. Silver\n80. Purple\n81. Strawberry\n82. Rainbow-drop\n83. Rainbow-box\n84. Purple-shiny\n85. Agni\n86. Green-diamond\n87. Bronze\n88. Balloon\n89. Balloonv2\n90. Unknown\n91. Ring\n92. Pinkv4\n ✨Logo list made by 𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷", _0x33a851, _0x40d86d);
      default:
        return _0x41d78e['sendMessage']("Invalid page number! Please use \"list 1\" or \"list 2\" or \"list 3 in the total of list there are 92 textpro logo for now.\".", _0x33a851, _0x40d86d);
    }
  }
  if (_0x13637d["length"] < 0x2) return _0x41d78e['sendMessage']("Invalid command format! Use:Textpro list (page number) or textpro (logo) (text)", _0x33a851, _0x40d86d);
  let _0x33e9ff = _0x13637d[0x0]["toLowerCase"](),
    _0x9cd3ca = _0x13637d["slice"](0x1)['join']('\x20'),
    _0x30c2ee = __dirname + ("/cache/" + _0x33e9ff + '_' + _0x9cd3ca + ".png"),
    _0x4e9536,
    _0x206f0e;
  switch (_0x33e9ff) {
    case "premium-king":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=87&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "sand":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=89&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "sky":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=93&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'wallpant':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=95&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'beachv2':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=96&text=' + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "painting":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=97&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "black-metal":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=91&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'sketch':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=101&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'glitch-neon':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=105&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "war":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=110&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "ghost-green":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=111&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case 'candyv2':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=116&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "christmusv2":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=117&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'metalv2':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=121&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "relics":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=122&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "3d-dragon":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=207&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case '3d':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=206&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "rust-metal":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=205&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "woodv2":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=204&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "beachv3":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=202&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "neon-love":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=201&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "neon-heart":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=200&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "birthday":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=198&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "dot-font":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=197&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "eid":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=194&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "sunset":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=193&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'skyfont':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=192&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "bluish":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=191&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'beachfont':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=190&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "ghostfont":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=189&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "greenleaf":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=183&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "black-diamond":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=175&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "blackpinkv2":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=168&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "rainbow-sky":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=166&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'ring-light':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=161&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "goldenv2":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=154&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "sparkle":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=182&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case 'golden':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=8&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "newpurple":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=10&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "wood":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=13&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "goldv2":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=16&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'woodv2':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=17&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'marble':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=20&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "bloodboard":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=21&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "drugs":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=22&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "christmus":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=24&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'foog':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=26&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "neon-rainbow":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=27&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'green-leaser':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=28&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'lightbubble':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=29&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "leaser-neon":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=32&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "3d-box":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=33&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "thunderv2":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=34&text=' + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "fish":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=39&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'jewerly':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=44&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "jewerlyv2":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=45&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "blue-mat":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=58&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "stone-wood":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=66&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "jokerlogo":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=67&text=' + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "wolflogo":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=68&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case 'premium':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=70&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "ghost-theme":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=71&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "rainbow-king":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=74&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'pink-king':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=76&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "2024gif":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=78&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "2024":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=79&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "mat-neon":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=80&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case 'Awesome':
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=85&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "icev2":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=94&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "paintingv2":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=98&text=' + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "neon-pink":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=100&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "neonv2":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=106&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "thunder":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=108&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "strawberryv2":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=109&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "blackpink":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=184&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "font":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=177&text=' + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡\x20𝐑𝐚𝐣𝐩𝐮𝐭\x20using\x20Textpro\x20🌷';
      break;
    case "pinkcandy":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=2&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "gold-font":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=4&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "silver":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=5&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "purple":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=43&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "strawberry":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=40&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "rainbow-drop":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=42&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐌𝐑\x20𝐉𝐔𝐖𝐄𝐋\x20using\x20Textpro\x20🌷';
      break;
    case 'rainbow-box':
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=47&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "purple-shiny":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=50&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "agni":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=54&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "green-diamond":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=56&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "bronze":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=59&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "balloon":
      _0x4e9536 = 'https://priyanshu.apitextpro.repl.co/api/textpro?number=60&text=' + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "ballonv2":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=61&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "unknown":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=84&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "ring":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=196&text=" + _0x9cd3ca, _0x206f0e = "✨Here's your Logo created by\n  𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 using Textpro 🌷";
      break;
    case "pinkv4":
      _0x4e9536 = "https://priyanshu.apitextpro.repl.co/api/textpro?number=165&text=" + _0x9cd3ca, _0x206f0e = '✨Here\x27s\x20your\x20Logo\x20created\x20by\x0a\x20\x20𝐌𝐑\x20𝐉𝐔𝐖𝐄𝐋\x20using\x20Textpro\x20🌷';
      break;
    default:
      return _0x41d78e["sendMessage"]('Invalid\x20logo\x20type!\x20Use\x20.textpro\x20list\x201\x20to\x20see\x20the\x20list\x20of\x20textpro\x20logos.', _0x33a851, _0x40d86d);
  }
  _0x41d78e['sendMessage']("Processing your textpro image, please wait...", _0x33a851, _0x40d86d);
  let _0x59fc13 = await axios["get"](_0x4e9536, {
      'responseType': "arraybuffer"
    }),
    _0x5cf566 = _0x59fc13["data"];
  return fs["writeFileSync"](_0x30c2ee, Buffer["from"](_0x5cf566, "utf-8")), _0x41d78e["sendMessage"]({
    'body': _0x206f0e,
    'attachment': fs["createReadStream"](_0x30c2ee)
  }, _0x33a851, () => fs["unlinkSync"](_0x30c2ee), _0x40d86d);
};
