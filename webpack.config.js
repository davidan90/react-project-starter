/*
    Configuracion de base
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const BASE_CONFIG = {
  entry: './src/app',

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader?url=false!sass-loader?sourceMap' }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}

module.exports = BASE_CONFIG;