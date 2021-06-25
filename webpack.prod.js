const { merge } = require("webpack-merge");
const shared = require("./webpack.shared.js");

module.exports = merge(shared, {
  mode: "production",
  devtool: "source-map"
});