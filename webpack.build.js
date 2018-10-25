const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const src = 'src';
const dist = 'www/view/assets';

const config = {
    mode: 'production',
    entry: {
        index: `./${src}/index.js`,
        libs: `./${src}/libs.js`
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.(scss|sass|css)$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        minimize: true,
                        url: false
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        processCssUrls: false,
                        includePaths: [path.resolve(__dirname, src), path.resolve(__dirname, `${src}/styles`)]
                    }
                }]
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
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
        new ExtractTextWebpackPlugin('css/[name].css'),
        new VueLoaderPlugin(),
        new UglifyJSPlugin({
            uglifyOptions: {
                mangle: false,
                sourcemap: false,
                output: {
                    comments: false
                }
            }
        })
    ]
};

module.exports = config;