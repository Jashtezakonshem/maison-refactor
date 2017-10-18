'use strict';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    devtool: "eval-source-map",
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle/bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'static-js', to: 'static-js'},
            { from: 'static-css', to: 'static-css'},
            { from: 'asset', to: 'asset'},
            { from: 'fonts', to: 'fonts'},
            { from: 'index.html', to: 'index.html'}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['text-loader', 'postcss-html-loader']
            }
        ]
    }
};