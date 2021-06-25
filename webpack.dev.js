const { merge } = require("webpack-merge");
const shared = require("./webpack.shared.js");

module.exports = merge(shared, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./",
    watchContentBase: true,
    open: true,
  },
});
