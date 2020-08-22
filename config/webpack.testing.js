const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");

const path = require("path");
const common = require("./webpack.config.js");

const ROOT_DIR = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");

module.exports = merge(common, {
  mode: "production",
  devtool: "inline-source-map",

  resolve: {
    alias: {
      log: path.resolve(SRC_DIR, "log.testing.ts"),
      init: path.resolve(SRC_DIR, "init.testing.ts"),
    },
  },

  plugins: [
    new DefinePlugin({
      RELEASE: "testing",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, "index.html"),
      title: "sing vocally",
    }),
    new HtmlWebpackDeployPlugin({
      packages: {
        "@sentry/browser": {
          scripts: {
            variableName: "Sentry",
            path: "bundle.apm.min.js",
          },
          useCdn: true,
          getCdnPath: (packageName, packageVersion, packagePath) =>
            `https://browser.sentry-cdn.com/${packageVersion}/${packagePath}`,
        },
      },
      usePackagesPath: false,
    }),
  ],
});
