var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var src = path.resolve('src');

module.exports = {
  context: src,
  entry: [
    './index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist/'),
    publicPath: '/public/'
  },
  devServer: {
    contentBase: 'src'
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: src,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      include: src,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.scss$/,
      include: src,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }, {
      test: /\.elm$/,
      include: src,
      loader: 'elm-webpack'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
