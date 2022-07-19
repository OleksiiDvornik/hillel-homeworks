const path = require('path');
const html = require('html-webpack-plugin');
const css = require("mini-css-extract-plugin");
const minifyCSS = require("css-minimizer-webpack-plugin");
const minifyJS = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.min.js",
        assetModuleFilename: 'img/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    css.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new minifyCSS(),
            new minifyJS()
        ],
    },
    plugins: [
        new html({template: './src/index.html'}),
        new css({filename: './css/style.min.css'}),
    ],
}