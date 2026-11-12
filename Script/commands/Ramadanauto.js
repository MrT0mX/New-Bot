const axios = require("axios");
const fs = require("fs");
const { getBangladeshClock } = require("../../utils/bangladeshTime");

module.exports.config = {
  name: "ramadanauto",
  version: "6.1.0",
  hasPermssion: 0,
  credits: "FukeyBot",
  description: "Auto Ramadan Time Stable & Fast",
  commandCategory: "Islamic",
  usages: "",
  cooldowns: 5
};

// ===== Division List =====
const divisions = {
  "📍 DHAKA": ["Dhaka","Faridpur","Gazipur","Gopalganj","Kishoreganj","Madaripur","Manikganj","Munshiganj","Narsingdi","Rajbari","Shariatpur","Tangail"],
  "📍 CHATTOGRAM": ["Chattogram","Bandarban","Brahmanbaria","Chandpur","Cumilla","Cox's Bazar","Feni","Khagrachari","Lakshmipur","Noakhali","Rangamati"],
  "📍 RAJSHAHI": ["Rajshahi","Bogura","Chapainawabganj","Joypurhat","Naogaon","Natore","Pabna","Sirajganj"],
  "📍 KHULNA": ["Khulna","Bagerhat","Chuadanga","Jashore","Jhenaidah","Kushtia","Magura","Meherpur","Narail","Satkhira"],
  "📍 BARISHAL": ["Barishal","Barguna","Bhola","Jhalokathi","Patuakhali","Pirojpur"],
  "📍 SYLHET": ["Sylhet","Habiganj","Moulvibazar","Sunamganj"],
  "📍 RANGPUR": ["Rangpur","Dinajpur","Gaibandha","Kurigram","Lalmonirhat","Nilphamari","Panchagarh","Thakurgaon"],
  "📍 MYMENSINGH": ["Mymensingh","Jamalpur","Netrokona","Sherpur"]
};

// ===== Time File =====
const TIME_FILE = __dirname + '/last_run_time.txt';
const RAMADAN_TIME_API = "https://api.aladhan.com/v1/timingsByCity";
const REQUEST_TIMEOUT_MS = 15000;
const REFRESH_INTERVAL_MS = 6 * 60 * 60 * 1000;
const RETRY_INTERVAL_MS = 10 * 60 * 1000;
const MAX_CONCURRENT_REQUESTS = 5;
const timingCache = new Map();
let cachedDate = "";
let updateTimer = null;

function saveLastRunTime() {
  fs.writeFileSync(TIME_FILE, Date.now().toString(), 'utf-8');
}

function getLastRunTime() {
  if (!fs.existsSync(TIME_FILE)) return 0;
  return parseInt(fs.readFileSync(TIME_FILE, 'utf-8')) || 0;
}

// ===== API CALL =====
async function getRamadanTime(location) {
  const date = getBangladeshClock().date;
  if (date !== cachedDate) {
    timingCache.clear();
    cachedDate = date;
  }
  if (timingCache.has(location)) return timingCache.get(location);

  const [year, month, day] = date.split("-");
  const apiDate = `${day}-${month}-${year}`;
  const url = `${RAMADAN_TIME_API}/${apiDate}?city=${encodeURIComponent(location)}&country=Bangladesh&method=1`;
  const response = await axios.get(url, { timeout: REQUEST_TIMEOUT_MS });
  const data = response.data?.data;
  const fajr = data?.timings?.Fajr;
  const maghrib = data?.timings?.Maghrib;

  if (response.data?.code !== 200 || !fajr || !maghrib) {
    throw new Error(`No valid prayer times returned for ${location}.`);
  }

  const timings = {
    sehri_end: formatPrayerTime(fajr),
    iftar: formatPrayerTime(maghrib)
  };
  timingCache.set(location, timings);
  return timings;
}

function formatPrayerTime(value) {
  const match = String(value).match(/^(\d{1,2}):(\d{2})/);
  if (!match) throw new Error("Prayer-time API returned an invalid time.");
  const hour = Number(match[1]);
  const minute = match[2];
  if (hour < 0 || hour > 23) throw new Error("Prayer-time API returned an invalid hour.");
  const period = hour < 12 ? "AM" : "PM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute} ${period}`;
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workers = Array.from(
    { length: Math.min(concurrency, items.length) },
    async () => {
      while (nextIndex < items.length) {
        const index = nextIndex++;
        try {
          results[index] = await mapper(items[index]);
        } catch (error) {
          results[index] = null;
          console.error(`[ramadanauto] ${items[index]} timings failed: ${error.message}`);
        }
      }
    }
  );
  await Promise.all(workers);
  return results;
}

// ===== SEND FUNCTION =====
async function sendAll(api) {
  try {
    const threads = await api.getThreadList(9999, null, ["INBOX"]);

    const districts = Object.entries(divisions).flatMap(([division, locations]) =>
      locations.map((location, index) => ({ division, location, index }))
    );
    const timingResults = await mapWithConcurrency(
      districts,
      MAX_CONCURRENT_REQUESTS,
      ({ location }) => getRamadanTime(location)
    );
    const allData = {};
    for (const [index, district] of districts.entries()) {
      allData[district.division] ||= [];
      allData[district.division][district.index] = timingResults[index];
    }

    if (timingResults.every(result => !result)) {
      throw new Error("Could not retrieve timings for any Bangladesh district.");
    }

    for (let thread of threads) {
      let msg = `🌙 RAMADAN TIME 🌙\n\n`;

      for (let div in divisions) {
        msg += `━━━━━━━━━━━━━━\n${div}\n━━━━━━━━━━━━━━\n`;

        divisions[div].forEach((district, i) => {
          const data = allData[div][i];

          if (data) {
            msg += `\n📌 ${district}
🌅 Sehri: ${data.sehri_end}
🌇 Iftar: ${data.iftar}\n`;
          } else {
            msg += `\n❌ ${district}: Error\n`;
          }
        });

        msg += `\n`;
      }

      msg += `━━━━━━━━━━━━━━\n⏰ Auto Update: Every 6 Hours`;

      api.sendMessage(msg, thread.threadID);
    }

    saveLastRunTime();
    return true;

  } catch (err) {
    console.log("RAMADAN AUTO ERROR:", err);
    return false;
  }
}

// ===== AUTO START =====
module.exports.onLoad = function ({ api }) {
  if (updateTimer) clearTimeout(updateTimer);
  const lastRun = getLastRunTime();
  const now = Date.now();
  const elapsed = now - lastRun;
  const delay = lastRun > 0 && elapsed < REFRESH_INTERVAL_MS
    ? REFRESH_INTERVAL_MS - elapsed
    : 1000;

  const scheduleUpdate = wait => {
    updateTimer = setTimeout(async () => {
      const succeeded = await sendAll(api);
      scheduleUpdate(succeeded ? REFRESH_INTERVAL_MS : RETRY_INTERVAL_MS);
    }, wait);
  };
  scheduleUpdate(delay);
};

module.exports.run = async ({ api, event }) => {
  return api.sendMessage("Ramadan time auto-update is enabled.", event.threadID, event.messageID);
};
