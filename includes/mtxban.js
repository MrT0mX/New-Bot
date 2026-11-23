const axios = require("axios");
const logger = require("../utils/log.js");

const REGISTRY_URL = "https://raw.githubusercontent.com/MrT0mX/MTXBAN/main/listgban.json";
const REFRESH_INTERVAL_MS = 15 * 60 * 1000;

global.mtxBanList = global.mtxBanList instanceof Map ? global.mtxBanList : new Map();
global.mtxBanRegistryLoaded = false;
global.mtxBan = {
  has: userId => global.mtxBanList.has(String(userId)),
  get: userId => global.mtxBanList.get(String(userId)) || null
};
let refreshTimer = null;
let warnedUnavailable = false;

function parseRegistry(registry) {
  if (!registry || typeof registry !== "object" || Array.isArray(registry)) {
    throw new TypeError("MTXBAN registry must be a JSON object");
  }

  const result = new Map();
  for (const [rawId, record] of Object.entries(registry)) {
    const id = String(rawId).trim();
    if (!/^\d+$/.test(id) || !record || typeof record !== "object" || Array.isArray(record)) continue;
    result.set(id, {
      reason: typeof record.reason === "string" ? record.reason : "",
      dateAdded: typeof record.dateAdded === "string" ? record.dateAdded : ""
    });
  }
  return result;
}

async function refreshRegistry() {
  const response = await axios.get(REGISTRY_URL, {
    timeout: 10000,
    headers: { "User-Agent": "NewBot-MTXBAN/1.0", Accept: "application/json" }
  });
  const next = parseRegistry(response.data);
  global.mtxBanList = next;
  global.mtxBanRegistryLoaded = true;
  warnedUnavailable = false;
  return next.size;
}

function warnUnavailable(error) {
  if (warnedUnavailable) return;
  warnedUnavailable = true;
  logger("MTXBAN registry refresh failed; keeping the last loaded ban list: " + (error && error.message ? error.message : String(error)), "[ GLOBAL BAN ]");
}

module.exports = async function loadMtxBanRegistry() {
  try {
    const count = await refreshRegistry();
    logger("MTXBAN registry loaded (" + count + " user IDs)", "[ GLOBAL BAN ]");
  } catch (error) {
    warnUnavailable(error);
  }

  if (!refreshTimer) {
    refreshTimer = setInterval(() => {
      refreshRegistry().catch(warnUnavailable);
    }, REFRESH_INTERVAL_MS);
    if (typeof refreshTimer.unref === "function") refreshTimer.unref();
  }
};

module.exports.has = function isMtxBanned(userId) {
  return global.mtxBanList.has(String(userId));
};
module.exports.get = function getMtxBan(userId) {
  return global.mtxBanList.get(String(userId)) || null;
};
module.exports.parseRegistry = parseRegistry;
