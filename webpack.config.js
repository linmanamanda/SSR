const path = require('path');
const webpack = require('webpack');
const CleanWebpackPluign = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniExtractCSSPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
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
        inline: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    // 'style-loader',
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
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    },
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPluign(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new MiniExtractCSSPlugin({
            name: '[name].css',
            MiniCssExtractPlugin: '[id].css'
        }),
    ]
}
