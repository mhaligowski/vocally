const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.join(__dirname);
const SRC_DIR = path.join(ROOT_DIR, "src");

console.log("Root directory", ROOT_DIR);
console.log("Source directory", SRC_DIR);

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(SRC_DIR, "index.ts"),

  externals: {
    p5: "p5",
    ml5: "ml5",
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        loader: "ts-loader",
        include: [SRC_DIR],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, "index.html"),
    }),
  ],

  resolve: {
    modules: [SRC_DIR, "node_modules"],
    extensions: [".ts", ".js"],
  },

  devServer: {
    open: true,
  },
};
