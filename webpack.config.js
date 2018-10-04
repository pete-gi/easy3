const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const DEV = process.env.NODE_ENV_DEV;
// SET NODE_ENV_DEV=true && webpack --watch
// SET NODE_ENV_DEV=false && webpack

const src = 'src';
const dist = 'app/public/assets';

const config = {
    mode: DEV ? 'development' : 'production',
    entry: {
        easy3: `./${src}/index.js`
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.(css)$/,
            use: ExtractTextWebpackPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        url: false
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
        new ExtractTextWebpackPlugin('css/[name].css'),
        new VueLoaderPlugin()
    ]
};

if (!DEV) {
    config.plugins.push(new UglifyJSPlugin({
        uglifyOptions: {
            mangle: false,
            sourcemap: false,
            output: {
                comments: false
            }
        }
    }));
}

module.exports = config;