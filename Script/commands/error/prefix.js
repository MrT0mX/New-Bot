module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "Show the current command prefix",
  commandCategory: "info",
  usages: "prefix",
  cooldowns: 5
};

module.exports.handleEvent = async function ({ api, event, Threads }) {
  const body = (event.body || "").toLowerCase();
  if (!["prefix", "prefi", "command", "command mark"].includes(body)) return;
  const threadData = await Threads.getData(event.threadID);
  const prefix = threadData.data?.PREFIX || global.config.PREFIX;
  return api.sendMessage(`This is my prefix: ${prefix}`, event.threadID, event.messageID);
};

module.exports.run = async function ({ api, event }) {
  return api.sendMessage(`This is my prefix: ${global.config.PREFIX}`, event.threadID, event.messageID);
};
