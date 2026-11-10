const path = require("path");
if (path.basename(process.argv[1] || "") === "Main.js") {
  try { require("../../Script/commands/fukeybotalert.js"); }
  catch (e) { console.error("[FukeyBot] alert load failed:", e.message); }
}
