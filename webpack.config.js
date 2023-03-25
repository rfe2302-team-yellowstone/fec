var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'development',
  plugins: [
    new NodePolyfillPlugin(),
    new Dotenv({systemvars: true})
],

  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  devtool:'source-map', // allows writing of where errors occurred within source files
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },

    ],
  },
};
