const path = require('path');
const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8000,
    overlay: {
      errors: true,
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
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
    new webpack.HotModuleReplacementPlugin(),
  ]
});
