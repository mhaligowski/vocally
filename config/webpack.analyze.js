const { merge } = require("webpack-merge");

const common = require("./webpack.testing.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  plugins: [new BundleAnalyzerPlugin()],
});
