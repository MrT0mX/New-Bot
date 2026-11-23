var configCommand = {
    name: 'autodownurl',
    version: '1.1.1',
    hasPermssion: 1,
    credits: 'DC-Nam',
    description: 'Tự động tải xuống khi phát hiện liên kết',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios'),
downloader = require('image-downloader'),
fse = require('fs-extra'),
toolsFb = require('facebook-tools'),
path = __dirname+'/cache/statusAuto.json';

async function streamURL(url, mime) {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    arr = arg.event.args,
    regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
    regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
    regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/\w+\/\w?(\/)?/,
    regEx_instagram = /^\u0068\u0074\u0074\u0070\u0073\u003a\/\/(www\.)?instagram\.com\/(reel|p)\/\w+\/\w*/

    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;
            out({
                body: `====== [ 𝐓𝐈𝐊𝐓𝐎𝐊 ] ======\n━━━━━━━━━━━━━━\n\n💬 𝗧𝗶𝘁𝗹𝗲: ${data.title}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${data.digg_count}\n💭 𝗧𝗼̂̉𝗻𝗴 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${data.comment_count}\n🔗 𝗟𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${data.share_count}\n📥 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗮̉𝗶: ${data.download_count}\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰`, attachment: await streamURL(data.play, 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                    name: 'autodownurl', messageID: dataMsg.messageID, url_audio: data.music
                })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */

        /* TỰ DỘNG TẢI VIDEO YOUTUBE */
        if (regEx_youtube.test(el)) {
            const data = (await axios.get(`https://api.nambsls.repl.co/youtube/downloader?url=${el}`)).data.data,
            info = (a, b) => `====== [ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 ] ======\n━━━━━━━━━━━━━━\n\n💬 𝗧𝗶𝘁𝗹𝗲: ${a.title}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${a.duration}\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺`;
            if (data.video.size < 26214400)out({
                body: (info(data, data.video.size))+'\n\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰'+`\n`, attachment: await streamURL(data.video.url, 'mp4')}, '', (err, datMsg) => global.client.handleReaction.push({
                    name: 'autodownurl', messageID: datMsg.messageID, url_audio: data.video.url
                })); else if (data.music.size < 26214400)out({
                body: (info(data))+`\n`, attachment: await streamURL(data.video.url, 'mp3')});
        };
        /* END */

        /* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
        if (el.includes('facebook.com/story.php') || regEx_facebook.test(el)) out({
            body: '====== [ 𝐒𝐓𝐎𝐑𝐘 𝐅𝐁 ] ======\n━━━━━━━━━━━━━━\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰', attachment: await streamURL(((fdl = await toolsFb.getVideoUrl(el)), fdl.HD), 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                name: 'autodownurl', messageID: dataMsg.messageID, url_audio: fdl.audio
            }));
        /* END */

        if (regEx_instagram.test(el))out({
            body: '=== [ 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 ] ===\n━━━━━━━━━━━━\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰', attachment: await streamURL((idl = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/instagram/downloadpost?url=${el}`)).data, idl[((irx = /\/p\//.test(el))?'display': 'video')+'_url']), irx?'jpg': 'mp4')});
    };
};
async function reactionMsg(arg) {
  if(arg.event.reaction == '👌') // code
  {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d),
    _ = arg.handleReaction;
    if ('url_audio'in _) out({
        body: `====== [ 𝐌𝐔𝐒𝐈𝐂 ] ======\n━━━━━━━━━━━━━━\n\n👉 𝗟𝗮̂́𝘆 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘁𝘂̛̀ 𝘃𝗶𝗱𝗲𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 `, attachment: await streamURL(_.url_audio, 'mp3')}, '', '', _.messageID);
  }
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean'||!!data[arg.event.threadID]?false: true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s?'[ 𝗔𝗨𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ] - 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 𝗯𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴': '[ 𝗔𝗨𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ] - 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴')+' '+configCommand.name+' ✅');
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};