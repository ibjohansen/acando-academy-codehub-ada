const path = require('path'); //NodeJS path module wich provides utilities for working with file and directory paths
const webpack = require('webpack');

module.exports = {
  entry: { //entry point for code-graph - https://webpack.js.org/concepts/#entry
    app: ['webpack-hot-middleware/client', path.resolve(__dirname, 'src/index.jsx')]
  },
  output: { //location of bundeled code - https://webpack.js.org/concepts/#output
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist/ada.bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // webpacks plugin for hot reloading - https://webpack.js.org/plugins/hot-module-replacement-plugin
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devtool: 'inline-source-map', //source map generation for debugging - https://webpack.js.org/configuration/devtool/
  module: { // https://webpack.js.org/concepts/modules/
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  resolve: {  // resolving extensions and aliases - https://webpack.js.org/configuration/resolve/
    extensions: ['.js', '.jsx', '.json', '.scss']
  }
};