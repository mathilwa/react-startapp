const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    './app/public/index.js',
    './app/public/style/style.css',
  ],
  output: {
    path: path.resolve(__dirname, 'app/public/dist'),
    filename: './app.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: 'css-loader',
          options: {
            url: false,
          },
        }),
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new WebpackBuildNotifierPlugin({ sound: false }),
    new HtmlWebpackPlugin({
      template: 'app/public/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'app/public/img/'),
        to: 'img/',
      },
    ]),
    new ExtractTextPlugin('style/style.bundle.css', {
      allChunks: true,
    }),
  ],
};
