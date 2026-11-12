const { getBangladeshClock } = require("../../utils/bangladeshTime");

module.exports.config = {
    name: 'dbtt',
    version: 'beta',
    hasPermssion: 0,
    credits: 'DC-Nam',// Bok idea thời tiết
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '7:00:00 AM',
    message: ['⛅==「 𝗗𝘂̛̣ 𝗕𝗮́𝗼 𝗧𝗵𝗼̛̀𝗶 𝗧𝗶𝗲̂́𝘁 」==⛅\n━━━━━━━━━━━━━━\n\n{abc}']
}];
let lastSentHour = "";

module.exports.onLoad = o => setInterval(async() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    const now = getBangladeshClock(new Date());
    if (now.minute !== 0) return;
    const timeKey = now.hourlyTime;
    const a = nam.find(item => item.timer === timeKey);
    const hourKey = `${now.date} ${now.hour} ${now.period}`;
    if (!a || lastSentHour === hourKey) return;
    lastSentHour = hourKey;
    try {
     const axios = require('axios');
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Hồ Chí Minh')}`);
    var abc = `⛈️ Thời tiết tại ${res.data[0].location.name}\n📆 ${res.data[0].current.day} ${res.data[0].current.date}\n🌡 Nhiệt độ: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n💬 Mô tả: ${res.data[0].current.skytext}\n💦 Độ ẩm: ${res.data[0].current.humidity}\n💨 Hướng gió: ${res.data[0].current.winddisplay}\n📝 Ghi nhận lúc: ${res.data[0].current.observationtime}\n🔭 Đây là trung tâm dự báo thời tiết của TuanDeepTry`;
      
   global.data.allThreadID.forEach(i => o.api.sendMessage(r(a.message).replace(/{abc}/g, abc), i));
    } catch (error) {
      console.error("[autodbtt] Scheduled weather update failed:", error.message);
    }
}, 15000);

module.exports.run = async o => {
  try{
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const { api, event, args } = o;
	const { threadID, messageID } = event;
  var bok = args.join(" ");
  if(!bok) return api.sendMessage("nhập tỉnh/tp cần xem thời tiết", threadID);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
  const bokk = res.data[0].forecast;
  var text = `Thời tiết của: ${bok} vào các ngày`;
  for (let i = 0; i < 5; i++) {
    text += `\n${i+1}-> ${bokk[i].day} ${bokk[i].date}\n=>Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n=>Mô tả: ${bokk[i].skytextday}\n=>Tỷ lệ mưa: ${bokk[i].precip}\n`
  };
  api.sendMessage(text, threadID, messageID)
  }catch(err){api.sendMessage(`${err}`, threadID)}
  }
