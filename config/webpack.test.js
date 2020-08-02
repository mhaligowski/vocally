const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const common = require("./webpack.config.js");

const ROOT_DIR = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");

module.exports = merge(common, {
  mode: "production",
  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, "index.html"),
      title: "sing vocally",
    }),
  ],
});
