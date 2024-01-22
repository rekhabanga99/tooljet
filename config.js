// config.js
const fs = require("fs");
const path = require("path");

const configPath = path.resolve(__dirname, "config.json");
const configContent = fs.readFileSync(configPath, "utf8");
const config = JSON.parse(configContent);

module.exports = config;
