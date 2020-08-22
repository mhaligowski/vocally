const { webpack } = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const { DefinePlugin } = require("webpack");
const common = require("./webpack.config.js");

const ROOT_DIR = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  resolve: {
    alias: {
      log: path.resolve(SRC_DIR, "log.dev.ts"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, "index.html"),
      title: "[DEV] sing vocally",
    }),
    new DefinePlugin({
      RELEASE: "dev",
    }),
  ],
  devServer: {
    open: true,
  },
});
