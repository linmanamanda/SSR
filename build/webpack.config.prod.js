const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniExtractCSSPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          MiniExtractCSSPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniExtractCSSPlugin({
      name: '[name].css',
      MiniCssExtractPlugin: '[id].css'
    }),
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
});
