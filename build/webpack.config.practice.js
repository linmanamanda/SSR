const path = require('path')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  entry: path.join(__dirname, '../practice/index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8001,
    overlay: {
      errors: true
    },
    hot: true
  },
  // resolve: {
  //   alias: {
  //     'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
