require("dotenv").config();
process.env.TZ = "Asia/Dhaka";

// Deobfuscated from the original protected launcher; runtime behavior preserved.
(function () {
  const h = require("moment-timezone"),
    {
      readdirSync: q,
      readFileSync: R,
      writeFileSync: w,
      existsSync: U,
      unlinkSync: C
    } = require("fs-extra"),
    {
      join: W,
      resolve: K
    } = require("path"),
    G = "FUKEYBOT",
    _ = "FUKEYBOT CHAT BOT",
    $ = "FUKEYBOT",
    ee = "FUKEYBOT BOT",
    ne = "100017985245260",
    te = "100017985245260",
    V = "Asia/Kolkata",
    a = require("./utils/log")(G, _),
    J = require("./utils/console"),
    le = require("./includes/login/login");
  J.init(ee);
  const oe = require("chalk"),
    E = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"],
    ae = E[Math.floor(Math.random() * E.length)],
    re = oe[ae]("\n░░░░░██╗██╗░░░██╗░██╗░░░░░░░██╗███████╗██╗░░░░░\n░░░░░██║██║░░░██║░██║░░██╗░░██║██╔════╝██║░░░░░\n░░░░░██║██║░░░██║░╚██╗████╗██╔╝█████╗░░██║░░░░░\n██╗░░██║██║░░░██║░░████╔═████║░██╔══╝░░██║░░░░░\n╚█████╔╝╚██████╔╝░░╚██╔╝░╚██╔╝░███████╗███████╗\n░╚════╝░░╚═════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝\n          FUKEYBOT CHAT BOT\n            FUKEYBOT\n");
  global.client = new Object({
    commands: new Map(),
    commandAliases: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String(),
    getTime: function (n) {
      switch (n) {
        case "seconds":
          return "" + h.tz(V).format("ss");
        case "minutes":
          return "" + h.tz(V).format("mm");
        case "hours":
          return "" + h.tz(V).format("HH");
        case "date":
          return "" + h.tz(V).format("DD");
        case "month":
          return "" + h.tz(V).format("MM");
        case "year":
          return "" + h.tz(V).format("YYYY");
        case "fullHour":
          return "" + h.tz(V).format("HH:mm:ss");
        case "fullYear":
          return "" + h.tz(V).format("DD/MM/YYYY");
        case "fullTime":
          return "" + h.tz(V).format("HH:mm:ss DD/MM/YYYY");
      }
    }
  }), global.client.commandAliasIndex = new Map(), global.client.normalizeAliases = function (n) {
    const t = [];
    n && n.aliases !== void 0 && t.push(n.aliases), n && n.alias !== void 0 && t.push(n.alias);
    const l = [];
    for (const o of t) {
      if (o == null) continue;
      const i = Array.isArray(o) ? o : String(o).split(/[,\s]+/);
      for (const f of i) {
        const s = String(f ?? "").trim();
        if (!s) continue;
        const g = s.toLowerCase();
        l.includes(g) || l.push(g);
      }
    }
    return l;
  }, global.client.resolveCommandName = function (n) {
    const t = String(n ?? "").trim().toLowerCase();
    if (!t) return null;
    for (const o of global.client.commands.keys()) if (String(o).trim().toLowerCase() === t) return o;
    const l = global.client.commandAliases.get(t);
    return l !== void 0 && global.client.commands.has(l) ? l : null;
  }, global.client.resolveCommand = function (n) {
    const t = global.client.resolveCommandName(n);
    return t === null ? null : global.client.commands.get(t) || null;
  }, global.client.getAliases = function (n) {
    const t = global.client.resolveCommandName(n);
    return t === null ? [] : (global.client.commandAliasIndex.get(t) || []).slice();
  }, global.client.commandCandidates = function () {
    const n = [];
    for (const t of global.client.commands.keys()) n.push(String(t));
    for (const t of global.client.commandAliases.keys()) n.push(t);
    return n;
  }, global.client.registerCommand = function (n, t) {
    const l = {
      ok: !1,
      reason: null,
      name: null,
      conflict: null,
      aliases: [],
      skipped: []
    };
    if (!n || typeof n !== "object" || !n.config) return l.reason = "module has no config", l;
    let o = String(n.config.name === null || n.config.name === void 0 ? "" : n.config.name).trim();
    if (!o && t && (o = String(t).trim().replace(/\.js$/i, "")), !o) return l.reason = "module.config.name is empty", l;
    l.name = o;
    const i = o.toLowerCase();
    for (const g of global.client.commands.keys()) if (String(g).trim().toLowerCase() === i) return l.reason = "command name collision: \"" + o + "\" is already loaded (" + g + ")", l.conflict = String(g), l;
    const f = global.client.commandAliases.get(i);
    if (f !== void 0) return l.reason = "command name collision: \"" + o + "\" is already used as an alias of \"" + f + "\"", l.conflict = f, l;
    const s = [];
    for (const g of global.client.normalizeAliases(n.config)) {
      if (g === i) {
        l.skipped.push({
          alias: g,
          reason: "it is the same as the command name"
        });
        continue;
      }
      const u = global.client.commandAliases.get(g);
      if (u !== void 0 && u !== o) {
        l.skipped.push({
          alias: g,
          reason: "it is already an alias of \"" + u + "\""
        });
        continue;
      }
      let r = null;
      for (const c of global.client.commands.keys()) if (String(c).trim().toLowerCase() === g) {
        r = String(c);
        break;
      }
      if (r !== null) {
        l.skipped.push({
          alias: g,
          reason: "it is already a command name (\"" + r + "\")"
        });
        continue;
      }
      s.push(g);
    }
    global.client.commands.set(o, n);
    for (const g of s) global.client.commandAliases.set(g, o);
    return s.length ? global.client.commandAliasIndex.set(o, s) : global.client.commandAliasIndex.delete(o), l.ok = !0, l.aliases = s, l;
  }, global.client.unregisterCommand = function (n) {
    const t = global.client.resolveCommandName(n);
    if (t === null) return !1;
    global.client.commands.delete(t);
    const l = global.client.commandAliasIndex.get(t) || [];
    for (const o of l) global.client.commandAliases.get(o) === t && global.client.commandAliases.delete(o);
    return global.client.commandAliasIndex.delete(t), Array.isArray(global.client.eventRegistered) && (global.client.eventRegistered = global.client.eventRegistered.filter(o => o !== t)), !0;
  }, global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
  }), global.utils = require("./utils"), global.nodemodule = new Object(), global.config = new Object(), global.configModule = new Object(), global.moduleData = new Array(), global.language = new Object(), global.developers = [ne, te], global.isDeveloper = function (n) {
    if (!n) return !1;
    const t = String(n);
    return (global.config && Array.isArray(global.config.DEVELOPER) ? global.config.DEVELOPER.map(String) : []).includes(t) || global.developers.includes(t);
  }, typeof global.handleListen === "undefined" && (global.handleListen = null);
  var F;
  const SECRET_ENV_PATHS = [
    ["FUKEYBOT_CFG_FUKEYBOT_ALERT_TG_TOKEN", ["FUKEYBOT_ALERT", "TG_TOKEN"]],
    ["FUKEYBOT_CFG_WEATHER_OPEN_WEATHER", ["weather", "OPEN_WEATHER"]],
    ["FUKEYBOT_CFG_SING2_YOUTUBE_API", ["sing2", "YOUTUBE_API"]],
    ["FUKEYBOT_CFG_SING2_SOUNDCLOUD_API", ["sing2", "SOUNDCLOUD_API"]],
    ["FUKEYBOT_CFG_MUSIC_YOUTUBE_API", ["music", "YOUTUBE_API"]],
    ["FUKEYBOT_CFG_SING3_YOUTUBE_API", ["sing3", "YOUTUBE_API"]],
    ["FUKEYBOT_CFG_CARDINFO_APIKEY", ["cardinfo", "APIKEY"]],
    ["FUKEYBOT_CFG_MKT_APIKEY", ["mkt", "APIKEY"]],
    ["FUKEYBOT_CFG_MOON_APIKEY", ["moon", "APIKEY"]],
    ["FUKEYBOT_CFG_SIM_APIKEY", ["sim", "APIKEY"]],
    ["FUKEYBOT_CFG_TIKSEARCH_API_KEY", ["tiksearch", "API_KEY"]],
    ["FUKEYBOT_CFG_VIDEOV2_YOUTUBE_API", ["videov2", "YOUTUBE_API"]]
  ];
  function applySecretEnv(config) {
    for (const [envName, path] of SECRET_ENV_PATHS) {
      if (typeof process.env[envName] === "undefined") continue;
      let target = config;
      for (const part of path.slice(0, -1)) {
        if (!target[part] || typeof target[part] !== "object") target[part] = {};
        target = target[part];
      }
      target[path[path.length - 1]] = process.env[envName];
    }
    return config;
  }
  function configForDisk(config) {
    const copy = JSON.parse(JSON.stringify(config));
    for (const [, path] of SECRET_ENV_PATHS) {
      let target = copy;
      for (const part of path.slice(0, -1)) target = target && target[part];
      if (target) target[path[path.length - 1]] = "";
    }
    return copy;
  }
  try {
    global.client.configPath = W(global.client.mainPath, "config.json"), F = require(global.client.configPath), a.loader("Found file config: config.json");
  } catch {
    const n = W(global.client.mainPath, "config.json.temp");
    if (U(n)) F = JSON.parse(R(n)), a.loader("Found: " + n);else return a.loader("config.json not found!", "error");
  }
  try {
    applySecretEnv(F);
    for (const n in F) global.config[n] = F[n];
    a.loader("Config Loaded!");
  } catch {
    return a.loader("Can't load file config!", "error");
  }
  const {
    Sequelize: ie,
    sequelize: T
  } = require("./includes/database");
  w(global.client.configPath + ".temp", JSON.stringify(configForDisk(global.config), null, 4), {
    encoding: "utf8",
    mode: 384
  });
  const ce = R(__dirname + "/languages/" + (global.config.language || "en") + ".lang", {
    encoding: "utf-8"
  }).split(/\r?\n|\r/).filter(n => n.indexOf("#") != 0 && n != "");
  for (const n of ce) {
    const t = n.indexOf("="),
      l = n.slice(0, t),
      o = n.slice(t + 1, n.length),
      i = l.slice(0, l.indexOf(".")),
      f = l.replace(i + ".", ""),
      s = o.replace(/\\n/gi, "\n");
    typeof global.language[i] == "undefined" && (global.language[i] = new Object()), global.language[i][f] = s;
  }
  global.getText = function (...n) {
    const t = global.language;
    if (!t.hasOwnProperty(n[0])) throw __filename + " - Not found key language: " + n[0];
    for (var l = t[n[0]][n[1]], o = n.length - 1; o > 0; o--) {
      const i = RegExp("%" + o, "g");
      l = l.replace(i, n[o + 1]);
    }
    return l;
  };
  try {
    var D = K(W(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    if (U(D)) {
      var O = require(D);
      a.loader(global.getText("mtx", "foundPathAppstate"));
    } else {
      var O = null;
      a.loader(global.getText("mtx", "notFoundPathAppstate"), "warn");
    }
  } catch {
    return a.loader(global.getText("mtx", "notFoundPathAppstate"), "error");
  }
  a("FUKEYBOT BOT", "[ Starting ]");
  const se = require("express"),
    P = require("path"),
    ge = require("http"),
    m = W(global.client.mainPath, ".bot.pid");
  function fe() {
    try {
      if (U(m)) {
        const n = parseInt(R(m, "utf8").trim(), 10);
        if (n && n !== process.pid) try {
          return process.kill(n, 0), a("Another bot instance (PID " + n + ") is already running. Preventing duplicate sessions.", "[ WARNING ]"), !1;
        } catch {
          a("Removing stale PID file from a previous run.", "[ WARNING ]");
        }
      }
      w(m, String(process.pid), "utf8");
    } catch {}
    return !0;
  }
  function B() {
    try {
      U(m) && parseInt(R(m, "utf8").trim(), 10) === process.pid && C(m);
    } catch {}
  }
  const Q = se(),
    Z = process.env.PORT || 8080;
  Q.get("/", function (n, t) {
    t.sendFile(P.join(__dirname, "/index.html"));
  }), Q.get("/index.html", function (n, t) {
    t.sendFile(P.join(__dirname, "/index.html"));
  });
  const S = ge.createServer(Q);
  let v = !1,
    I = !1;
  async function L() {
    if (!v) {
      v = !0;
      try {
        await T.authenticate();
        const n = {
            Sequelize: ie,
            sequelize: T
          },
          t = require("./includes/database/model")(n);
        a(global.getText("mtx", "successConnectDatabase"), "[ DATABASE ]"), ue({
          models: t
        });
      } catch (n) {
        a("Database error: " + n.message, "[ ERROR ]");
      }
    }
  }
  fe() || (a("Duplicate bot instance detected - exiting so the running instance keeps its session.", "[ WARNING ]"), process.exit(1)), S.listen(Z, "0.0.0.0", () => {
    a("Server running on port " + Z, "[ WEB ]"), L();
  }).on("error", n => {
    if (n.code === "EADDRINUSE") {
      a("Port " + Z + " is already in use - this runtime will not open another bot connection", "[ WEB ]"), process.exit(1);
      return;
    }
    n.code === "EACCES" ? a("Port " + Z + " permission denied", "[ ERROR ]") : a("Web server error: " + n.message, "[ ERROR ]"), L();
  });
  const b = new Map();
  function de(n) {
    const t = String(n);
    return (global.data.threadData.get(t) || global.data.threadData.get(parseInt(t, 10)) || {}).console !== !1;
  }
  async function he(n, t) {
    const l = String(t.threadID),
      o = String(t.senderID);
    let i = (global.data.threadInfo.get(l) || {}).threadName;
    if (!i && !b.has("thread|" + l)) try {
      const s = await n.getThreadInfo(l);
      b.set("thread|" + l, (s || {}).threadName || "");
    } catch {
      b.set("thread|" + l, "");
    }
    i || (i = b.get("thread|" + l) || void 0);
    let f = global.data.userName.get(o);
    if (!f && !b.has("user|" + o)) try {
      const s = await n.getUserInfo([o]);
      b.set("user|" + o, ((s || {})[o] || {}).name || "");
    } catch {
      b.set("user|" + o, "");
    }
    return f || (f = b.get("user|" + o) || void 0), {
      groupName: i,
      userName: f
    };
  }
  function Ve(n, t) {
    try {
      if (!t || !["message", "message_reply"].includes(t.type)) return;
      const l = String(t.threadID || ""),
        o = String(t.senderID || "");
      if (!l || !o) return;
      let i = "";
      try {
        i = String(n.getCurrentUserID() || "");
      } catch {
        i = "";
      }
      if (i && o === i || !de(l)) return;
      he(n, t).then(function ({
        groupName: f,
        userName: s
      }) {
        J.log({
          groupName: f,
          threadID: l,
          userName: s,
          senderID: o,
          content: t.body ? t.body : void 0
        });
      }).catch(function () {});
    } catch {}
  }
  function k(n) {
    const t = n.config.dependencies;
    if (!t || typeof t !== "object") return;
    const loadPackage = require("./utils/packageCache");
    for (const l in t) {
      if (Object.prototype.hasOwnProperty.call(global.nodemodule, l)) continue;
      try {
        global.nodemodule[l] = loadPackage(l, t[l], __dirname);
      } catch (error) {
        throw new Error(global.getText("mtx", "cantInstallPackage", l, n.config.name, error), { cause: error });
      }
    }
    a.loader(global.getText("mtx", "loadedPackage", n.config.name));
  }
  function Y(n) {
    if (!n.config.envConfig) return;
    const t = n.config.name;
    try {
      for (const l in n.config.envConfig) typeof global.configModule[t] == "undefined" && (global.configModule[t] = {}), typeof global.config[t] == "undefined" && (global.config[t] = {}), typeof global.config[t][l] !== "undefined" ? global.configModule[t][l] = global.config[t][l] : global.configModule[t][l] = n.config.envConfig[l] || "", typeof global.config[t][l] == "undefined" && (global.config[t][l] = n.config.envConfig[l] || "");
      a.loader(global.getText("mtx", "loadedConfig", t));
    } catch (l) {
      throw new Error(global.getText("mtx", "loadedConfig", t, JSON.stringify(l)), "error");
    }
  }
  function ue({
    models: n
  }) {
    const t = {};
    t.appState = O, le(t, async (l, o) => {
      if (l) {
        a("Login error: " + a.redactSecrets(JSON.stringify(l)), "ERROR");
        return;
      }
      if (I) {
        a("Bot already running - duplicate login callback ignored", "[ LISTENER ]");
        return;
      }
      global.client.api = o, global.client.timeStart = new Date().getTime(), function () {
        const g = Array.isArray(global.config.commandDisabled) ? global.config.commandDisabled : [],
          u = q(global.client.mainPath + "/Script/commands").filter(d => d.endsWith(".js") && !/\(\d+\)\.js$/i.test(d) && !d.includes("example") && !g.includes(d));
        for (const d of u) {
          var r = null;
          try {
            var c = require(global.client.mainPath + "/Script/commands/" + d);
            if (!c.config || !c.run || !c.config.commandCategory) throw new Error(global.getText("mtx", "errorFormat"));
            if (r = global.client.registerCommand(c, d), !r.ok) throw new Error(r.reason);
            for (const p of r.skipped) a.loader("Command \"" + r.name + "\": alias \"" + p.alias + "\" was ignored because " + p.reason + ".", "warn");
            if ((!c.languages || typeof c.languages != "object" || Object.keys(c.languages).length == 0) && a.loader(global.getText("mtx", "notFoundLanguage", c.config.name), "warn"), k(c), Y(c), c.onLoad) try {
              c.onLoad({
                api: o,
                models: n
              });
            } catch (p) {
              throw new Error(global.getText("mtx", "cantOnload", c.config.name, JSON.stringify(p)), "error");
            }
            c.handleEvent && global.client.eventRegistered.push(r.name), a.loader(global.getText("mtx", "successLoadModule", c.config.name));
          } catch (p) {
            r && r.ok && global.client.unregisterCommand(r.name);
            const be = c && c.config && c.config.name ? c.config.name : d;
            a.loader(global.getText("mtx", "failLoadModule", be, p), "error");
          }
        }
      }(), function () {
        const g = Array.isArray(global.config.eventDisabled) ? global.config.eventDisabled : [],
          u = q(global.client.mainPath + "/Script/events").filter(c => c.endsWith(".js") && !/\(\d+\)\.js$/i.test(c) && !g.includes(c));
        for (const c of u) try {
          var r = require(global.client.mainPath + "/Script/events/" + c);
          if (!r.config || !r.run) throw new Error(global.getText("mtx", "errorFormat"));
          if (global.client.events.has(r.config.name) || "") throw new Error(global.getText("mtx", "nameExist"));
          if (k(r), Y(r), r.onLoad) try {
            r.onLoad({
              api: o,
              models: n
            });
          } catch (d) {
            throw new Error(global.getText("mtx", "cantOnload", r.config.name, JSON.stringify(d)), "error");
          }
          global.client.events.set(r.config.name, r), a.loader(global.getText("mtx", "successLoadModule", r.config.name));
        } catch (d) {
          const p = r && r.config && r.config.name ? r.config.name : c;
          a.loader(global.getText("mtx", "failLoadModule", p, d), "error");
        }
      }(), console.log(re), a.loader(global.getText("mtx", "finishLoadModule", global.client.commands.size, global.client.events.size)), a.loader("Startup Time: " + ((Date.now() - global.client.timeStart) / 1e3).toFixed() + "s"), a.loader("===== [ " + (Date.now() - global.client.timeStart) + "ms ] ====="), w(global.client.configPath, JSON.stringify(configForDisk(global.config), null, 4), "utf8"), U(global.client.configPath + ".temp") && C(global.client.configPath + ".temp");
      const i = require("./includes/listen")({
        api: o,
        models: n,
        logAnthorName: $
      });
      function f(s, g) {
        if (s) return a(global.getText("mtx", "handleListenError", a.redactSecrets(JSON.stringify(s))), "error");
        if (!["presence", "typ", "read_receipt"].some(u => u == g.type)) return global.config.DeveloperMode == !0 && console.log(g), Ve(o, g), i(g);
      }
      if (typeof o.listenMqtt === "function") try {
        o.listenMqtt(f), I = !0, a("MQTT listener registered - reconnect / re-listen is managed by includes/login/login.js", "[ LISTENER ]");
      } catch (s) {
        a("Listen error: " + s.message, "[ ERROR ]");
        return;
      } else a("api.listenMqtt is unavailable - MQTT listener was not started", "[ ERROR ]");
      try {
        typeof checkBan === "function" && (await checkBan(o));
      } catch {}
      global.checkBan || a(global.getText("mtx", "warningSourceCode"), "[ GLOBAL BAN ]");
    });
  }
  process.on("uncaughtException", n => {
    a("Uncaught Exception: " + a.redactSecrets(n && n.message ? n.message : n), "[ ERROR ]");
  }), process.on("unhandledRejection", n => {
    a("Unhandled Rejection: " + a.redactSecrets(n && n.message ? n.message : n), "[ ERROR ]");
  });
  let z = !1;
  async function j(n) {
    if (!z) {
      z = !0, a("Received " + n + ", shutting down gracefully...", "[ Shutdown ]"), B();
      try {
        S && S.listening && S.close();
      } catch {}
      H(), setTimeout(() => {
        process.exit(0);
      }, 1500);
    }
  }
  function H() {
    try {
      const n = global.handleListen;
      if (global.handleListen = null, !n) return;
      typeof n.stopListening === "function" ? n.stopListening() : typeof n.stop === "function" ? n.stop() : typeof n.end === "function" ? n.end() : typeof n === "function" && n();
    } catch {}
  }
  process.on("SIGINT", () => j("SIGINT")), process.on("SIGTERM", () => j("SIGTERM")), process.on("exit", () => {
    H(), B();
  });
})();
