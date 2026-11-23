let models;
const reactionKick = '❤';
const reactionCancel = '👎';


module.exports.config = {
  name: "autokick",
  version: "1.0.0",
  credits: "NTKhang",
  hasPermssion: 1,
  description: "Cảnh báo thành viên vi phạm từ ngữ",
  usages: "< on/off add/del list >",
  commandCategory: "Box chat",
  cooldowns: 0
};

module.exports.run = async ({
  api, event, args
}) => {
  const info = await api.getThreadInfo(event.threadID);
  // if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
  // 	return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Cần quyền Quản trị viên nhóm cho Bot để thực hiện lệnh', event.threadID, event.messageID);
  if (!await global.modelAntiSt.findOne({
    where: {
      threadID: event.threadID
    }
  }))
    await global.modelAntiSt.create({
      threadID: event.threadID,
      data: {}
    });
  const data = (await global.modelAntiSt.findOne({
    where: {
      threadID: event.threadID
    }
  })).data || {};
  if (!data.autoKick)
    data.autoKick = {
      words: [],
      enables: false
    };

  if (args[0] == "on") {
    data.autoKick.enables = true;
    await global.modelAntiSt.findOneAndUpdate({
      threadID: event.threadID
    }, {
      data
    });
    return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Auto kick đã được bật', event.threadID, event.messageID);
  } else if (args[0] == "off") {
    data.autoKick.enables = false;
    await global.modelAntiSt.findOneAndUpdate({
      threadID: event.threadID
    }, {
      data
    });
    return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Auto kick đã được tắt', event.threadID, event.messageID);
  } else if (args[0] == "add") {
    if (!args[1])
      return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Vui lòng nhập từ cần thêm vào danh sách', event.threadID, event.messageID);
    const words1 = args.slice(1).join(" ");
    let words = words1.split(',').map(i => i.trim());
    words = words.filter(w => !data.autoKick.words.includes(w));
    // if (data.autoKick.words.includes(word))
    // return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Từ này đã có trong danh sách', event.threadID, event.messageID);
    data.autoKick.words.push(...words);
    await global.modelAntiSt.findOneAndUpdate({
      threadID: event.threadID
    }, {
      data
    });
    return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Đã thêm ${words.length} từ vào danh sách`, event.threadID, event.messageID);
  } else if (args[0] == "del") {
    // if (!args[1])
    // return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Vui lòng nhập từ cần xóa khỏi danh sách', event.threadID, event.messageID);
    const words1 = args.slice(1).join(" ");
    let words = words1.split(',').map(i => i.trim());
    words = words.filter(w => data.autoKick.words.includes(w));
    // if (!data.autoKick.words.includes(word))
    // return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Từ này không có trong danh sách', event.threadID, event.messageID);
    for (const word of words)
      data.autoKick.words.splice(data.autoKick.words.indexOf(word), 1);
    await global.modelAntiSt.findOneAndUpdate({
      threadID: event.threadID
    }, {
      data
    });
    return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Đã xóa ${words.length} từ khỏi danh sách`, event.threadID, event.messageID);
  } else if (args[0] == "list") {
    let msg = '[ 𝗠𝗢𝗗𝗘 ] → Danh sách từ cấm:\n';
    data.autoKick.words.forEach(item => msg += ` - ${item}\n`);
    return api.sendMessage(msg, event.threadID, event.messageID);
  } else {
    return api.sendMessage('☣️==== [ 𝗔𝗨𝗧𝗢 𝗞𝗜𝗖𝗞 ] ====☣️\n━━━━━━━━━━━━━━━\n\n• 𝗮𝘂𝘁𝗼𝗸𝗶𝗰𝗸 𝗮𝗱𝗱 < 𝘁𝘂̛̀ >: 𝗧𝗵𝗲̂𝗺 𝘁𝘂̛̀ 𝗻𝗴𝘂̛̃ 𝗰𝗮̂̀𝗻 𝗰𝗮̂́𝗺\n• 𝗮𝘂𝘁𝗼𝗸𝗶𝗰𝗸 𝗱𝗲𝗹 < 𝘁𝘂̛̀ >: 𝗫𝗼́𝗮 𝘁𝘂̛̀ 𝗻𝗴𝘂̛̃ 𝗰𝗮̂̀𝗻 𝗰𝗮̂́𝗺\n( 𝗖𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗲̂𝗺 𝗵𝗼𝗮̣̆𝗰 𝘅𝗼́𝗮 𝗻𝗵𝗶𝗲̂̀𝘂 𝘁𝘂̛̀ 𝗯𝗮̆̀𝗻𝗴 𝗱𝗮̂́𝘂 "," )\n• 𝗮𝘂𝘁𝗼𝗸𝗶𝗰𝗸 𝗹𝗶𝘀𝘁: 𝗫𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́𝗰 𝘁𝘂̛̀ 𝗻𝗴𝘂̛̃ 𝗰𝗮̂́𝗺\n• 𝗮𝘂𝘁𝗼𝗸𝗶𝗰𝗸 𝗼𝗻: 𝗕𝗮̣̂𝘁 𝗰𝗵𝗲̂́ 𝗺𝗼𝗱𝗲 𝗮𝘂𝘁𝗼𝗸𝗶𝗰𝗸\n• 𝗮𝘂𝘁𝗼𝗸𝗶𝗰𝗸 𝗼𝗳𝗳: 𝗧𝗮̆́𝘁 𝗰𝗵𝗲̂́ 𝗺𝗼𝗱𝗲 𝗮𝘂𝘁𝗼𝗸𝗶𝗰𝗸\n\n🌸 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭 𝐓𝐮𝐚𝐧𝐃𝐞𝐞𝐩𝐓𝐫𝐲 🌸', event.threadID, event.messageID);
  }
};

module.exports.handleEvent = async ({
  api, event, Threads
}) => {
  const {
    senderID,
    threadID
  } = event;
  const threadInfo = (global.data.threadInfo.get(threadID) || await Threads.getInfo(threadID));
  const find = (threadInfo.adminIDs || []).find(el => el.id == senderID);
  const validUIDs = [api.getCurrentUserID(),
  ...global.config.ADMINBOT,
  ...global.config.NDH];
  const isValid = find || validUIDs.some(e => e == senderID);

  if (event.body && !isValid) {
    try {
      const data = (await global.modelAntiSt.findOne({
        where: {
          threadID: event.threadID
        }
      }))?.data || {};
      if (!data.autoKick)
        return;
      if (data.autoKick.enables) {
        const check = event.body.toLowerCase().match(new RegExp(`(\\s|^)(${data.autoKick.words.map(w => w += '+').join('|')})(\\s|$)`, 'gi'));
        if (check) {
          return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Từ cấm "${check[0]}" đã được phát hiện, Quản trị viên hãy thả cảm xúc '${reactionKick}' tin nhắn này để xóa thành viên hoặc '${reactionCancel}' để hủy bỏ`, event.threadID, async (error, info) => {
            global.client.handleReaction.push({
              name: this.config.name,
              messageID: info.messageID,
              targetID: event.senderID
            });
          }, event.messageID);
        }
      }
    }
    catch (err) {
      console.log(err);
    }
  }
};

module.exports.handleReaction = async ({
  api, event, Threads, handleReaction, Users
}) => {
  const {
    targetID,
    messageID
  } = handleReaction;
  const {
    userID,
    threadID
  } = event;
  const threadInfo = (global.data.threadInfo.get(threadID) || await Threads.getInfo(threadID));
  const find = threadInfo.adminIDs.some(el => el.id == userID);
  const validUIDs = [
    api.getCurrentUserID(),
    ...global.config.ADMINBOT,
    ...global.config.NDH
  ];
  const isValid = find || validUIDs.some(e => e == userID);
  if (!isValid)
    return;
  if (event.reaction == reactionKick) {
    const threadInfo = await api.getThreadInfo(event.threadID);
    // if (threadInfo.adminIDs.some(el => el.id == api.getCurrentUserID()))
    return api.removeUserFromGroup(targetID, event.threadID, async (error) => {
      if (error)
        api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Không thể xóa thành viên này, thử thêm quyền Quản trị viên cho Bot và thả cảm xúc lại tin nhắn trên`, event.threadID, event.messageID);
      else {
        api.unsendMessage(messageID);
        const authorName = await Users.getNameUser(userID);
        const targetName = await Users.getNameUser(targetID);
        api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → ${authorName} đã xác nhận xóa thành viên ${targetName}`, event.threadID);
      }
    });
    // else
    // 	return api.sendMessage('[ 𝗠𝗢𝗗𝗘 ] → Bot cần quyền quản trị viên để thực hiện chức năng kick thành viên', event.threadID, event.messageID);
  } else if (event.reaction == reactionCancel) {
    return api.unsendMessage(messageID);
  }
};