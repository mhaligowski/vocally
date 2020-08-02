const path = require("path");
const webpack = require("webpack");

// Webpack plugins
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { argv } = require("process");

const ROOT_DIR = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const ASSETS_DIR = path.join(ROOT_DIR, "assets");

console.log("Mode: \t", argv.mode || "development");
console.log("Root directory:\t\t", ROOT_DIR);
console.log("Source directory: \t", SRC_DIR);
console.log("Assets directory: \t", ASSETS_DIR);

module.exports = {
  entry: path.resolve(SRC_DIR, "index.tsx"),
  target: "web",
  node: {
    fs: "empty"
  },

  externals: [
    {
      ml5: "ml5",
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
      {
        test: /\.css$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new DynamicCdnWebpackPlugin(),
    new FaviconsWebpackPlugin(path.resolve(ASSETS_DIR, "favicon.png")),
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
};
