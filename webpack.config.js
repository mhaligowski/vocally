const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const ROOT_DIR = path.join(__dirname);
const SRC_DIR = path.join(ROOT_DIR, "src");

console.log("Root directory:\t\t", ROOT_DIR);
console.log("Source directory: \t", SRC_DIR);

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(SRC_DIR, "index.tsx"),

  externals: [
    {
      p5: "p5",
      ml5: "ml5",
      "p5/lib/addons/p5.sound": "undefined",
    },
  ],

  module: {
    rules: [
      {
        test: /.tsx?$/,
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
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: "*",
          disallow: "*",
        },
      ],
    }),
  ],

  resolve: {
    modules: [SRC_DIR, "node_modules"],
    extensions: [".ts", ".tsx", ".js"],
  },

  devServer: {
    open: true,
  },
};
