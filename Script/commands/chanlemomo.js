module.exports.config = {
  name: "clmomo",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Chẵn lẻ momo",
  commandCategory: "Trò Chơi",
  usages: "[C/L/C2/L2]",
  cooldowns: 0
};

module.exports.run = async function ({api, event, args, Users, Currencies }) {
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
const request = require("request")
  let { senderID, threadID, messageID } = event;
  if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
    let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
     fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
  };
  if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
    let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
     fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
  };
  if (!fs.existsSync(__dirname + '/cache/clmm.png')) {
      request('https://i.imgur.com/kzdInvi.png').pipe(fs.createWriteStream(__dirname + '/cache/clmm.png'));
    }
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Dhaka").format("HH:mm");
  var day = moment.tz("Asia/Dhaka").format("DD/MM/YYYY");
  var codeGD = String(Math.floor(Math.random() * (90000000000 - 1)) + 10000000000)
  var lastNumber = parseInt(codeGD.slice(-1))
  const { loadImage, createCanvas } = require("canvas");
  let path = __dirname + "/cache/comment.png";
  var coins = args[1]
  var content = args[0]
  if (!content){
      var msg = { body: "== 🎲 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 🎲 ==\n== 💸 𝐂𝐡𝐚̆̃𝐧 𝐋𝐞̉ 𝐌𝐎𝐌𝐎 💸 ==\n\n[ 💎 ] - 𝗧𝗿𝘂𝗻𝗴 𝘁𝗮̂𝗺 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 𝘅𝟮 𝘁𝗮̀𝗶 𝘀𝗮̉𝗻 𝗰𝗼̀𝗻 𝗽𝗵𝗮́ 𝘀𝗮̉𝗻 𝘁𝗵𝗶̀ 𝗯𝗮́𝗻 𝗻𝗵𝗮̀ 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮, 𝗯𝗮̣𝗻 𝗰𝗮̂̀𝗻 𝗻𝗵𝗮̣̂𝗽 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝘂̛ 𝘀𝗮𝘂\n\n[ 💎 ] » 𝗖𝗵𝗮𝗻𝗹𝗲𝗺𝗼𝗺𝗼  𝗖 [ 𝟮 , 𝟰 , 𝟲 , 𝟴 ] || 𝗟 [𝟭 , 𝟯 , 𝟱 , 𝟳 ] || 𝗖𝟮 [ 𝟬 , 𝟮 , 𝟰 , 𝟲 , 𝟴 ] || 𝗟𝟮 [ 𝟭 , 𝟯 , 𝟱 , 𝟳 , 𝟵 ] \n[ 💎 ] » 𝗚𝗮𝗺𝗲 𝗰𝗵𝗮̆̃𝗻 𝗹𝗲̉ 𝗰𝗮́𝗰 𝘀𝗼̂́ 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝗰𝗮́𝗰 𝘀𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗺𝗮̃ 𝗚𝗗 𝗸𝗵𝗶 𝗕𝗼𝘁 𝗴𝘂̛̉𝗶 𝗮̉𝗻𝗵 𝗻𝗵𝗲́ 𝗰𝗼̂́ 𝗺𝗮̀ 𝗻𝗵𝗶̀𝗻 𝗸𝗶̃.\n\n[ 💎 ] » 𝗖𝗵𝗮𝗻𝗹𝗲𝗺𝗼𝗺𝗼 𝗧 [ 𝟱 , 𝟲 , 𝟳 , 𝟴 ] || 𝗫 [ 𝟭 , 𝟮 , 𝟯 , 𝟰 ] || 𝗧𝟮 [ 𝟱 , 𝟲 , 𝟳 , 𝟴 , 𝟵 ] || 𝗟𝟮 [ 𝟬 , 𝟭 , 𝟮 , 𝟯 , 𝟰 ] \n[ 💎 ] » 𝗧𝗿𝗼̀ 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝘃𝗼̛̣  𝗻𝗮̀𝗼 𝘁𝗵𝗶́𝗰𝗵 𝗧𝗮𝗶𝗫𝗶𝘂 𝗵𝗼̛𝗻 𝗖𝗵𝗮𝗻𝗟𝗲.\n\n[ 💎 ] » 𝗖𝗵𝗮𝗻𝗹𝗲𝗺𝗼𝗺𝗼 𝗡𝟭 [ 𝟭 , 𝟮 , 𝟯 ] || 𝗡𝟮 [ 𝟰 , 𝟱 , 𝟲 ] || 𝗡𝟯 [ 𝟳 , 𝟴 , 𝟵 ] || 𝗡𝟬 [ 𝟬 ]\n[ 💎 ] » 𝗥𝗶𝗲̂𝗻𝗴 𝘁𝗿𝗼̀ 𝗻𝗮̀𝘆 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗻𝗵𝗮̂𝗻 𝘁𝗮̀𝗶 𝘀𝗮̉𝗻 𝗹𝗲̂𝗻 𝘅𝟯 𝗵𝗼𝗮̣̆𝗰 𝘅𝟱, 𝗖𝗼̀𝗻 𝘀𝗶̣𝘁 𝘁𝗵𝗶̀ 𝘃𝗮𝘆 𝗻𝗴𝗮̂𝗻 𝗵𝗮̀𝗻𝗴\n\n[ 💎 ] » 𝗧𝘂̣𝗰 𝗻𝗴𝘂̛̃ 𝗰𝗼́ 𝗰𝗮̂𝘂:\n𝗖𝗼̀𝗻 𝘁𝗵𝗼̛̉ 𝗹𝗮̀ 𝗰𝗼̀𝗻 𝗴𝗼̛̃, 𝗵𝗲̂́𝘁 𝘁𝗶𝗲̂̀𝗻 𝗹𝗮̀ 𝘁𝗮̆́𝘁 𝘁𝗵𝗼̛̉"
, attachment : [
    fs.createReadStream(__dirname + "/cache/clmm.png")
  ]}
   return api.sendMessage(msg, threadID, messageID)
  }
  if (!coins) return api.sendMessage("𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘃𝗮̀𝗼 💵", threadID, messageID);
  var money = (await Currencies.getData(senderID)).money
  if(money < parseInt(coins)) return api.sendMessage('𝗞𝗶𝗲̂́𝗺 𝘁𝗵𝗲̂𝗺 𝘁𝗶𝗲̂̀𝗻 𝗿𝗼̂̀𝗶 𝗰𝗵𝗼̛𝗶 𝗻𝗵𝗮 𝗯𝗲́ 𝗼̛𝗶 💸', threadID, messageID);
  if(parseInt(coins) < 50) return api.sendMessage('𝗠𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗮̂́𝗽 𝗻𝗵𝗮̂́𝘁 𝗹𝗮̀ 𝟱𝟬$ 𝗻𝗵𝗮 𝗯𝗲́ 💸', threadID, messageID);
  if(parseInt(coins) > 10000000) return api.sendMessage('𝗠𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝗹𝗮̀ 𝟭𝟬.𝟬𝟬𝟬.𝟬𝟬𝟬$ 𝗻𝗵𝗮 𝗯𝗲́ 𝗼̛𝗶 💸', threadID, messageID);
  //check win
  var c = [2, 4, 6, 8]
  var l = [1, 3, 5, 7]
  var c2 = [0, 2, 4 ,6 ,8]
  var l2 = [1, 3, 5, 7, 9]
  var n1 = [1, 2, 3]
  var n2 = [4, 5, 6]
  var n3 = [7, 8, 9]
  var n0 =[0]
  var t = [5, 6, 7, 8]
  var x = [1, 2, 3, 4]
  var t2 = [5, 6, 7, 8, 9]
  var x2 = [0, 1, 2, 3, 4]
  var msg = ""
  switch (content.toLowerCase()) {
      case "c": {
          if(c.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
     }
      case "l": {
          if(l.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
          }
          else {
              msg +=`» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
     }
      case "c2": {
          if(c2.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
     }
      case "l2": {
          if(l2.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
     }
      case "n1": {
          if(n1.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟯 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 2));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
     }
      case "n2": {
          if(n2.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟯 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 2));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
      }
       case "n3": {
          if(n3.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟯 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 2));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
      }
        case "n0": {
          if(n0.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💷`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
      }
       case "t": {
          if(t.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💴`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
      }
       case "x": {
          if(x.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💴`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
      }
       case "t2": {
          if(t2.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟮.𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💴`
              await Currencies.increaseMoney(senderID, parseInt(coins * 1));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
      }
       case "x2": {
          if(x2.includes(lastNumber) == true) {
              msg += `» 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 🌸\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘅𝟱 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 💰`
              await Currencies.increaseMoney(senderID, parseInt(coins * 4));
          }
          else {
              msg += `» 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗿𝗼̂̀𝗶 😢\n» 𝗦𝗼̂́ 𝗰𝘂𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗺𝗮̃ 𝗚𝗗 𝗹𝗮̀: ${lastNumber}\n» 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗲̃ 𝘁𝗵𝘂𝗼̣̂𝗰 𝘃𝗲̂̀ 𝗠𝗢𝗠𝗢 💸`
              await Currencies.decreaseMoney(senderID, parseInt(coins));
          }
          break;
      }
      default: {
          msg += `𝗦𝗮𝗶 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝘂̛𝗼̛̣𝗰 🚫\n𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼𝗮̀𝗻 𝗹𝗮̣𝗶 𝘁𝗶𝗲̂̀𝗻`
          await Currencies.decreaseMoney(senderID, parseInt(coins));
      }
 }
  //xử lí canvas
  let bg = (await axios.get(`https://i.imgur.com/OUPC4iK.png`, {responseType: "arraybuffer" })).data;
  fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
  let bgBase = await loadImage(path);
  let canvas = createCanvas(bgBase.width, bgBase.height);
  let ctx = canvas.getContext("2d");
  const Canvas = global.nodemodule["canvas"];
  ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
  Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
      family: "SplineSans-Medium"
  });
  Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
      family: "SplineSans"
  });
  ctx.font = "30px SplineSans-Medium";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  ctx.fillText('-' + coins.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ', 151, 201);
  ctx.font = "25px SplineSans";
  ctx.fillText(content, 64, 1080);
  ctx.font = "26px SplineSans-Medium";
  ctx.textAlign = "right";
  var info = await api.getUserInfo(event.senderID);
  var name = info[event.senderID].name
  ctx.fillText(name, 547, 816);
  ctx.fillStyle = "#FF00FF";
  ctx.font = "22px SplineSans-Medium";
  const data = [" 0993457888 ", " 0984444444 ", " 0992229333 ", " 059874444 " , " 0568777777 " , " 0764322222 "];
  var sdt = data[Math.floor(Math.random() * data.length)]
  ctx.fillText(`${sdt}`, 547, 884);
  ctx.font = "22px SplineSans";
  ctx.textAlign = "start";
  ctx.fillText(codeGD, 279, 240);
  ctx.fillStyle = "#000000";
  ctx.textAlign = "right";
  ctx.font = "22px SplineSans-Medium";
  ctx.fillText('Miễn phí', 547, 504);
  ctx.fillText('Ví MoMo', 547, 436);
  ctx.fillText(`${time} - ${day}`, 547, 367);
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(path, imageBuffer);
  //send
  return api.sendMessage({
          body: msg,
          attachment: fs.createReadStream(path)
      },
      threadID,
      () => fs.unlinkSync(path),
      messageID
  );
};