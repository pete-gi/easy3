const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const src = 'src';
const dist = 'www/view/assets';

const config = {
    mode: 'development',
    entry: `./${src}/index.js`,
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'js/index.js'
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: ExtractTextWebpackPlugin.extract({
                use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            processCssUrls: false
                        }
                    },
                ]
            })
        }, {
            test: /\.css$/,
            use: [{
                    loader: 'url-loader'
                },
                {
                    loader: 'css-loader'
                }
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }]
        }, {
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    useRelativePath: true,
                    outputPath: './',
                    publicPath: '../img',
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.(ttf|otf|woff|woff2|eot|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    useRelativePath: true,
                    outputPath: './',
                    publicPath: '../fonts',
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'jquery': 'jquery',
            'window.jquery': 'jquery',
            '$': 'jquery',
            'window.$': 'jquery',
        }),
        new ExtractTextWebpackPlugin('css/index.css')
    ]
};

module.exports = config;