module.exports.config = {
  name: 'timejoin',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Raiden Ei',
  description: 'Xem thời gian ở box',
  commandCategory: 'Tiện ích',
  usages: '',
  cooldowns: 5,
}
const fs = require('fs')
var p = __dirname + '/noprefix/timeJoin.json'
module.exports.handleEvent = async function ({ event: e }) {
  const { threadID: t, senderID: u, body } = e,
    { readFileSync: r, writeFileSync: w } = fs,
    { parse: o, stringify: s } = JSON
  var get = require('moment-timezone').tz('Asia/Dhaka'),
    gio = get.format('HH:mm:ss'),
    ngay = get.format('YYYY-MM-D'),
    burh = get.format('D/MM/YYYY')
  let a = o(r(p))
  if (!a[u + t]) {
    a[u + t] = {
      uid: u,
      gio: gio,
      ngay: ngay,
      burh: burh,
    }
    w(p, s(a))
  }
}
module.exports.run = async function ({
  api: a,
  event: e,
  args: g,
  Users: u,
  Threads: d,
}) {
  const { threadID: t, messageID: m, senderID: s } = e,
    { sendMessage: n } = a,
    c = this.config.credits,
    { readFileSync: f, existsSync: x, writeFileSync: w } = fs,
    { parse: o, stringify: r } = JSON
  if ('Nam' != c) {
    return
  }
  if (!x(p)) {
    w(p, r({}))
  }
  let i = await a.getThreadInfo(t),
    tN = i.threadName,
    L = o(f(p)),
    timeN = L[s + t].ngay,
    timeG = L[s + t].gio
  var gn1 = new Date(`${timeN} ${timeG}`),
    gn2 = new Date(),
    gn3 = gn1.getTime(),
    gn4 = gn2.getTime(),
    get_Ngay = Math.ceil((gn4 - gn3) / 86400000),
    get_Tuan = Math.ceil((gn4 - gn3) / 604800000) - 1,
    get_Thang = Math.ceil((gn4 - gn3) / 2678400000) - 1,
    get_Gio = Math.ceil((gn4 - gn3) / 3600000),
    get_Phut = Math.ceil((gn4 - gn3) / 60000),
    get_Giay = Math.ceil((gn4 - gn3) / 1000)
  if (get_Ngay == 0) {
    return n(`Chỉ bắt đầu tính sau 1 ngày khi bot vào nhóm`, t, m)
  }
  n(
    `━━━━━━━━━━━━━\n== [ ${tN} ] ==\n\n𝗕𝗮̣𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗻𝗵𝗼́𝗺 𝘃𝗮̀𝗼 𝗹𝘂́𝗰:\n\n[ ${
      L[s + t].gio
    } ] 𝗻𝗴𝗮̀𝘆 [ ${
      L[s + t].burh
    } ]\n\n━━━━━━━━━━━━━\n\n𝗦𝗼̂́ 𝗻𝗴𝗮̀𝘆 𝗼̛̉ 𝗯𝗼𝘅: ${get_Ngay} ngày\n𝗦𝗼̂́ 𝘁𝘂𝗮̂̀𝗻 𝗼̛̉ 𝗯𝗼𝘅: ${get_Tuan} tuần\n 𝗦𝗼̂́ 𝘁𝗵𝗮́𝗻𝗴 𝗼̛̉ 𝗯𝗼𝘅 ${get_Thang} tháng\n𝗦𝗼̂́ 𝗴𝗶𝗼̛̀ 𝗼̛̉ 𝗯𝗼𝘅: ${get_Gio} giờ\n𝗦𝗼̂́ 𝗽𝗵𝘂́𝘁 𝗼̛̉ 𝗯𝗼𝘅: ${get_Phut} phút\n 𝗦𝗼̂́ 𝗴𝗶𝗮̂𝘆 𝗼̛̉ 𝗯𝗼𝘅: ${get_Giay} giây`,
    t,
    m
  )
}
