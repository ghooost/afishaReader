const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'background.js':'./src/background.js'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dst')
  },
  module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/manifest.json', to: 'manifest.json' },
      { from: './src/icons', to: 'icons' }
    ]),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    }),
  ]
};
