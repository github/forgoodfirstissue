const nextConfig = require("eslint-config-next");
const prettierConfig = require("eslint-config-prettier");

/** @type {import("eslint").Linter.Config[]} */
module.exports = [...nextConfig, prettierConfig];
