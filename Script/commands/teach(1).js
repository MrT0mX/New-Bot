/**
 * @author MạnhG
 * @warn Do not edit code or edit credits
 */
 module.exports.config = {
    name: "teach",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Dạy bot (dùng cho lệnh sim)",
    commandCategory: "Sim, Nino",
    usages: "",
    cooldowns: 2,
    dependencies: {
        "axios": ""
    }
};
var API_KEY = "";
module.exports.run = ({ api, event, args }) => {
    const { threadID, messageID, senderID } = event;
    return api.sendMessage("[ 𝐒𝐈𝐌 ] - Reply tin nhắn này nhập câu hỏi cho simsimi", threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            messageID: info.messageID,
            content: {
                id: senderID,
                ask: "",
                ans: ""
            }
        })
    }, messageID);
}
module.exports.handleReply = async({ api, event, Users, handleReply }) => {
    const axios = require("axios");
    const fs = require("fs");
    const moment = require("moment-timezone");
    var timeZ = moment.tz("Asia/Dhaka").format("HH:mm:ss | DD/MM/YYYY");
    const { threadID, messageID, senderID, body } = event;
    let by_name = (await Users.getData(senderID)).name;
    if (handleReply.content.id != senderID) return;
    const input = body.trim();
    const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        api.unsendMessage(handleReply.messageID);
        global.client.handleReply.push({
            step: step,
            name: this.config.name,
            messageID: info.messageID,
            content: content
        })
    }, messageID);
    const send = async(msg) => api.sendMessage(msg, threadID, messageID);

    let content = handleReply.content;
    switch (handleReply.step) {
        case 1:
            content.ask = input;
            sendC("[ 𝐒𝐈𝐌 ] - Reply tin nhắn này trả lời câu hỏi vừa xong", 2, content);
            break;

        case 2:
            content.ans = input;
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
            api.unsendMessage(handleReply.messageID);
            let c = content;
            let res = await axios.get(encodeURI(`https://apiuwuapi.ducdz999.repl.co/sim?type=teach&ask=${c.ask}&ans=${c.ans}`));
            if (res.data.error) return send(`${res.data.error}`);
            send(`[ 𝐒𝐈𝐌 ] - Dạy sim thành công, previews:\n\n🤤 Data:\n${c.ask} -> ${c.ans}\n\n⏱ Time: ${timeZ}`);
            break;
        default:
            break;
    }
}