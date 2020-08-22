const path = require("path");
const webpack = require("webpack");

// Webpack plugins
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");

const ROOT_DIR = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const ASSETS_DIR = path.join(ROOT_DIR, "assets");

console.debug("Root directory:\t\t", ROOT_DIR);
console.debug("Source directory: \t", SRC_DIR);
console.debug("Assets directory: \t", ASSETS_DIR);

module.exports = {
  entry: path.resolve(SRC_DIR, "index.tsx"),
  target: "web",
  node: {
    fs: "empty",
  },

  externals: [
    {
      ml5: "ml5",
      logrocket: "LogRocket",
      "@sentry/browser": "Sentry",
    },
  ],

  module: {
    rules: [
      {
        test: /.tsx?$/,
        include: [SRC_DIR],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              plugins: ["@babel/plugin-transform-react-display-name"],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackDeployPlugin({
      packages: {
        "@sentry/browser": {
          scripts: {
            variableName: "Sentry",
            path: "bundle.min.js",
          },
          useCdn: true,
          getCdnPath: (packageName, packageVersion, packagePath) =>
            `https://browser.sentry-cdn.com/${packageVersion}/${packagePath}`,
        },
      },
      usePackagesPath: false,
    }),
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
