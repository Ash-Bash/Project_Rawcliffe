
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
    entry: "./src/ts/app/app.tsx",
    output: {
        filename: "app.main.js",
        path: __dirname + "/dist/js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    typeCheck: true,
                    emitErrors: true
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader']
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
}