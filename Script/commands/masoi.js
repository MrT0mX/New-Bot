module.exports.config = {
    name: "masoi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Raiden Shogun",
    description: "Ma sói vip trên messenger",
    commandCategory: "Trò chơi",
    usages: "+ Mã số làng",
    cooldowns: 2
};
 
module.exports.onLoad = async () => {
    const fs = require("fs-extra");
    const path = require("path");
    const dir = path.join(process.cwd(), "node_modules", "game", "masoi");
    const entry = path.join(dir, "index.js");
    const manager = path.join(dir, "GameManager.js");

    if (!fs.existsSync(entry) || !fs.existsSync(manager)) {
        global.gameManager = null;
        global.masoiUnavailable = true;
        console.warn("[masoi] disabled: required game files are missing; the configured archive URL returns 404");
        return;
    }

    try {
        const subname = file => file.split(".").slice(0, -1).join(".");
        const loader = folder => {
            const exportData = {};
            const files = fs.readdirSync(folder).filter(filename => {
                const fullPath = path.join(folder, filename);
                return fs.lstatSync(fullPath).isDirectory() || filename.endsWith(".js");
            });
            for (const filename of files) {
                try {
                    const data = require(path.join(folder, filename));
                    const name = subname(filename) || filename;
                    if (name === "common") Object.assign(exportData, data);
                    else exportData[name] = data;
                } catch (error) {
                    console.warn("[masoi] skipped game module " + filename + ": " + error.message);
                }
            }
            return exportData;
        };
        const GameManager = require(path.join(dir, "GameManager"));
        global.gameManager = new GameManager(loader(dir));
        global.masoiUnavailable = false;
        console.log("=======[ WEREWOLF LOADED SUCCESSFULLY ]=======");
    } catch (error) {
        global.gameManager = null;
        global.masoiUnavailable = true;
        console.warn("[masoi] game files could not be loaded: " + error.message);
    }
};

module.exports.handleEvent = async function({ api, event, Currencies }) {
    const reply = function(message) {
        return api.sendMessage(message, event.threadID, event.messageID);
    }
    if(!global.gameManager || !global.gameManager.items.some(i => i.name == "Ma Sói")) return
        for (const game of global.gameManager.items) {
            if(!game.participants) continue
            if ((game.participants.includes(event.senderID) && !event.isGroup) || game.threadID == event.threadID) {
                game.onMessage(event, reply);
            }
        }
}
module.exports.run = async ({ api, event, args, Users }) => {
    if (!global.gameManager) return api.sendMessage("Ma Sói is currently unavailable because its game files are missing.", event.threadID, event.messageID);
    global.Users = Users
    global.gameManager.run(this.config.name, {
        masterID: event.senderID,
        threadID: event.threadID,
        param: args,
        isGroup: event.isGroup
    })
}