
module.exports.config = {
    name: "menu",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "MrTomXxX",
    description: "Beginner's Guide",
    usages: "[all/-a] [page number]",
    commandCategory: "For users",
    cooldowns: 5
};

const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

const PAGE_SIZE = 10;
const COMMAND_PAGE_SIZE = 15;

const IMAGES = [
    "https://i.imgur.com/PfioSJP.gif",
    "https://i.imgur.com/6PArjh2.gif",
    "https://i.imgur.com/sclek83.gif",
    "https://i.imgur.com/c7jER2a.gif",
    "https://i.imgur.com/PAvBbgQ.gif",
    "https://i.imgur.com/YgMRrJW.gif",
    "https://i.imgur.com/IpuGKQ9.gif",
    "https://i.imgur.com/oHDlwaL.gif",
    "https://i.imgur.com/JlRBMeS.gif",
    "https://i.imgur.com/zQqhgM4.gif",
    "https://i.imgur.com/hrJJLu3.gif"
];

async function getImage() {
    try {
        const cacheDir = path.join(__dirname, "cache");
        await fs.ensureDir(cacheDir);

        const imagePath = path.join(cacheDir, "menu.gif");
        const imageUrl = IMAGES[Math.floor(Math.random() * IMAGES.length)];

        const response = await axios.get(imageUrl, {
            responseType: "arraybuffer",
            timeout: 15000
        });

        await fs.writeFile(imagePath, response.data);
        return fs.createReadStream(imagePath);
    } catch (error) {
        console.error("[MENU IMAGE ERROR]", error.message);
        return null;
    }
}

function getPermission(permission) {
    if (permission == 0) return "User";
    if (permission == 1) return "Group administrator";
    return "Bot admin";
}

module.exports.handleReply = async function ({
    api,
    event,
    handleReply
}) {
    const input = event.body.trim();
    const num = parseInt(input);

    if (isNaN(num)) {
        return api.sendMessage(
            "⚠️ Please enter a valid number.",
            event.threadID,
            event.messageID
        );
    }

    const data = handleReply.content;

    if (num <= 0 || num > data.length) {
        return api.sendMessage(
            "⚠️ The number you selected is not in the list. Please try again.",
            event.threadID,
            event.messageID
        );
    }

    const selected = data[num - 1];
    const commands = global.client.commands;

    let msg = "";
    let check = false;
    let content = [];

    if (handleReply.type === "cmd_info") {
        const command = commands.get(selected);

        if (!command) {
            return api.sendMessage(
                "❌ This command is no longer available.",
                event.threadID,
                event.messageID
            );
        }

        const config = command.config;

        msg += ` 『 ${config.commandCategory.toUpperCase()} 』\n`;
        msg += `\nCommand name: ${config.name}`;
        msg += `\nDescription: ${config.description || "No description"}`;
        msg += `\nUsage: ${config.usages || "Not specified"}`;
        msg += `\nCooldown: ${config.cooldowns || 5}s`;
        msg += `\nHas Permission: ${getPermission(config.hasPermssion)}`;
        msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`;
        msg += `\n\n» Module code by ${config.credits || "Unknown"} «`;

    } else {
        check = true;

        msg += `» ${selected.group.toUpperCase()} «\n`;

        selected.cmds.forEach((item, index) => {
            const command = commands.get(item);

            if (command) {
                msg += `\n${index + 1}. » ${item}: ${command.config.description || "No description"}`;
            }
        });

        msg += "\n\n╭──────╮\n     Reply\n╰──────╯";
        msg += "\nReply with a number to see command details and usage.";

        content = selected.cmds;
    }

    const image = await getImage();
    const message = {
        body: msg
    };

    if (image) message.attachment = image;

    try {
        api.unsendMessage(handleReply.messageID);
    } catch (error) {}

    return api.sendMessage(message, event.threadID, (error, info) => {
        if (error) {
            console.error("[MENU SEND ERROR]", error);
            return;
        }

        if (check && info) {
            global.client.handleReply.push({
                type: "cmd_info",
                name: this.config.name,
                messageID: info.messageID,
                content: content
            });
        }
    }, event.messageID);
};

module.exports.run = async function ({
    api,
    event,
    args
}) {
    const { commands } = global.client;
    const { threadID, messageID } = event;

    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = threadSetting.PREFIX || global.config.PREFIX;

    let groups = [];
    let msg = "» Available Commands «\n";
    let check = true;

    let pageInput = 1;
    let bonus = 0;

    // Organize commands by category
    for (const command of commands.values()) {
        const category = command.config.commandCategory || "Uncategorized";
        const name = command.config.name;

        let group = groups.find(
            item => item.group.toLowerCase() === category.toLowerCase()
        );

        if (!group) {
            group = {
                group: category,
                cmds: []
            };
            groups.push(group);
        }

        group.cmds.push(name);
    }

    // ALL COMMANDS MODE
    if (args[0] && ["all", "-a"].includes(args[0].toLowerCase())) {
        let allCommands = [];

        groups.forEach(group => {
            group.cmds.forEach(command => allCommands.push(command));
        });

        const totalPages = Math.max(
            1,
            Math.ceil(allCommands.length / COMMAND_PAGE_SIZE)
        );

        if (args[1]) {
            pageInput = parseInt(args[1]);

            if (isNaN(pageInput)) {
                check = false;
                msg = "⚠️ Please choose a valid page number.";
            } else if (pageInput <= 0 || pageInput > totalPages) {
                check = false;
                msg = "⚠️ The page number you selected is not available.";
            }
        }

        if (check) {
            const start = (pageInput - 1) * COMMAND_PAGE_SIZE;
            const end = Math.min(start + COMMAND_PAGE_SIZE, allCommands.length);

            bonus = start;
            const currentCommands = allCommands.slice(start, end);

            currentCommands.forEach((commandName, index) => {
                const command = commands.get(commandName);

                if (command) {
                    msg += `\n${start + index + 1}. » ${commandName}: ${command.config.description || "No description"}`;
                }
            });

            msg += `\n\nPage ${pageInput}/${totalPages}`;
            msg += `\nTo view another page: ${prefix}menu all [page]`;
            msg += `\nYou can use ${prefix}help2 all to see all commands`;
            msg += "\n\n╭──────╮\n     Reply\n╰──────╯";
            msg += "\nReply with a number to view command details.";

            const image = await getImage();
            const message = { body: msg };

            if (image) message.attachment = image;

            return api.sendMessage(message, threadID, (error, info) => {
                if (error) {
                    console.error("[MENU SEND ERROR]", error);
                    return;
                }

                if (check && info) {
                    global.client.handleReply.push({
                        type: "cmd_info",
                        name: this.config.name,
                        bonus: bonus,
                        messageID: info.messageID,
                        content: currentCommands
                    });
                }
            }, messageID);
        }

        return api.sendMessage(msg, threadID, messageID);
    }

    // CATEGORY MODE
    const totalPages = Math.max(1, Math.ceil(groups.length / PAGE_SIZE));

    if (args[0]) {
        pageInput = parseInt(args[0]);

        if (isNaN(pageInput)) {
            check = false;
            msg = "⚠️ Please choose a valid page number.";
        } else if (pageInput <= 0 || pageInput > totalPages) {
            check = false;
            msg = "⚠️ The page number you selected is not available.";
        }
    }

    if (!check) {
        return api.sendMessage(msg, threadID, messageID);
    }

    const start = (pageInput - 1) * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, groups.length);

    bonus = start;
    const currentGroups = groups.slice(start, end);

    currentGroups.forEach((group, index) => {
        msg += `\n${start + index + 1}. » ${group.group.toUpperCase()}`;
    });

    msg += `\n\nPage 【${pageInput}/${totalPages}】`;
    msg += `\nTo view another page: ${prefix}menu [page]`;
    msg += `\nYou can use ${prefix}help2 all to see all commands`;
    msg += "\n\n╭──────╮\n       Reply\n╰──────╯";
    msg += "\nReply with a number to view commands in a category.";

    const image = await getImage();
    const message = { body: msg };

    if (image) message.attachment = image;

    return api.sendMessage(message, threadID, (error, info) => {
        if (error) {
            console.error("[MENU SEND ERROR]", error);
            return;
        }

        if (info) {
            global.client.handleReply.push({
                type: "category_list",
                name: this.config.name,
                bonus: bonus,
                messageID: info.messageID,
                content: currentGroups
            });
        }
    }, messageID);
};
