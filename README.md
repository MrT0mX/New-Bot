# FukeyBot

FukeyBot is a Facebook Messenger bot built around a Mirai-style core, with a compatibility layer for Mirai- and GoatBot-style commands and events. It includes a large command collection and uses SQLite for its local data.

> **Use responsibly.** This project interacts with Facebook through an account session. Follow Facebook's terms and applicable laws, and only use an account and groups you are authorized to manage. Keep session cookies, API keys, and other credentials private.

## Requirements

- Node.js 22.x
- npm 10 or later (below 13)

## Getting started

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/MrT0mX/New-Bot.git
   cd New-Bot
   npm install
   ```

2. Set up `config.json` for your bot. At minimum, review the bot name, command prefix, administrator/developer IDs, and the app-state path.

3. Add your authorized Facebook app state as a non-empty JSON cookie array in the configured app-state file. The default path is `appstate.json`. **Do not commit this file or share it**; it grants access to the associated account.

4. Start the bot:

   ```bash
   npm start
   ```

   Use `npm start` (or `node FukeyBot.js`) rather than starting `Main.js` directly. The launcher sets up the compatibility preload and keep-alive process.

## Commands and compatibility

- Mirai-style commands and events go in `Script/commands/` and `Script/events/`.
- GoatBot-style commands and events can also be placed in those folders; the compatibility layer adapts supported handlers and APIs.
- See [COMMANDS.md](COMMANDS.md) for the generated command list and [GOAT_COMPAT.md](GOAT_COMPAT.md) for supported compatibility features and limitations.
- After adding or changing command files, restart the bot to load the changes.

## Deployment

The repository includes a Railway start configuration that runs `npm start`. Configure the app state and other private settings through your deployment's secure configuration facilities; never put session cookies or API keys in public source code or logs.

## Project files

| File or folder | Purpose |
| --- | --- |
| `FukeyBot.js` | Launcher and compatibility preload setup |
| `Main.js` | Mirai bot core |
| `includes/compat/` | GoatBot compatibility layer |
| `Script/commands/` | Bot commands |
| `Script/events/` | Bot event handlers |
| `COMMANDS.md` | Generated command reference |
| `GOAT_COMPAT.md` | Compatibility guide |

## Troubleshooting

- **Cookie/app-state error:** Check that the configured file exists, contains valid JSON, and has the required Facebook cookie fields. Do not post its contents when asking for help.
- **Command not found:** Confirm the command file is in `Script/commands/`, check its configuration and prefix, then restart the bot.
- **Missing dependency:** Run `npm install` with the supported Node.js and npm versions.

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE).
