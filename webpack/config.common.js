const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
  },
  plugins: [
    new CleanWebpackPlugin(["../dist", "../build"], {
      allowExternal: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
