const path = require("path");
const outputDir = "./dist";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), 
  output: {
    path: path.join(__dirname, outputDir),
    filename: "[name].js",
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".js"], 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            exclude: /node_modules/,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
    ],
  },
};
