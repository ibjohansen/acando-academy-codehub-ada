const path = require('path'); //NodeJS path module wich provides utilities for working with file and directory paths
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'), //entry point for code-graph - https://webpack.js.org/concepts/#entry
  output: { //location of bundeled code - https://webpack.js.org/concepts/#output
    path: path.resolve(__dirname, 'dist'),
    filename: 'ada.bundle.js'
  },
  devServer: {  // config object for webpack-dev-server - https://webpack.js.org/configuration/dev-server/
    contentBase: path.resolve(__dirname, 'assets'),
    compress: true,
    port: 3000,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // webpacks plugin for hot reloading - https://webpack.js.org/plugins/hot-module-replacement-plugin
  ],
  devtool: 'inline-source-map', //source map generation for debugging - https://webpack.js.org/configuration/devtool/
  module: { // https://webpack.js.org/concepts/modules/
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {  // resolving extensions and aliases - https://webpack.js.org/configuration/resolve/
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      images: path.resolve(__dirname, 'src/images'),
      scss: path.resolve(__dirname, 'src/scss')
    }
  }
};