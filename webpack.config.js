const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './_js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js')
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.scss$/, use: 'sass-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
