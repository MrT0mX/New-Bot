"use strict";

const fs = require("fs");
const path = require("path");
const { builtinModules } = require("module");
const { execFileSync } = require("child_process");
const { createRequire } = require("module");

const PACKAGE_NAME_PATTERN = /^(?:@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*$/i;

function packageDirectory(cacheRoot, packageName) {
  return path.join(cacheRoot, "node_modules", ...packageName.split("/"));
}

function loadPackage(packageName, version, rootDir = process.cwd()) {
  if (
    typeof packageName === "string" &&
    (builtinModules.includes(packageName) || builtinModules.includes(packageName.replace(/^node:/, "")))
  ) {
    return require(packageName);
  }
  if (typeof packageName !== "string" || !PACKAGE_NAME_PATTERN.test(packageName)) {
    throw new Error(`Invalid npm package name: ${packageName}`);
  }

  const resolvedRoot = path.resolve(rootDir);
  const cacheRoot = path.join(resolvedRoot, "nodemodules");
  const rootRequire = createRequire(path.join(resolvedRoot, "package.json"));
  const cacheRequire = createRequire(path.join(cacheRoot, "package.json"));

  try {
    return rootRequire(packageName);
  } catch (rootError) {
    const cachedPath = packageDirectory(cacheRoot, packageName);
    if (fs.existsSync(cachedPath)) {
      try {
        return cacheRequire(packageName);
      } catch (cacheError) {
        throw new Error(
          `Cached package "${packageName}" could not be loaded; not downloading it again. ` +
          `Root error: ${rootError.message}. Cache error: ${cacheError.message}`,
          { cause: cacheError }
        );
      }
    }

    fs.mkdirSync(cacheRoot, { recursive: true });
    const manifestPath = path.join(cacheRoot, "package.json");
    if (!fs.existsSync(manifestPath)) {
      fs.writeFileSync(manifestPath, JSON.stringify({
        name: "fukeybot-command-packages",
        private: true,
        dependencies: {}
      }, null, 2) + "\n");
    }

    const packageSpec = version && version !== "*" ? `${packageName}@${version}` : packageName;
    const npm = process.platform === "win32" ? "npm.cmd" : "npm";
    execFileSync(npm, [
      "install",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
      "--save",
      packageSpec
    ], {
      cwd: cacheRoot,
      env: process.env,
      stdio: "inherit"
    });

    try {
      return cacheRequire(packageName);
    } catch (cacheError) {
      throw new Error(
        `Package "${packageName}" was installed but could not be loaded: ${cacheError.message}`,
        { cause: cacheError }
      );
    }
  }
}

module.exports = loadPackage;
