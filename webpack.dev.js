const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge'),
    common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    output: {
        filename: "bundle.[hash].js",
        publicPath: '/'
    },
	devServer: {
        publicPath: '/',
		compress: true, // Should compress files
        port: process.env.DASH_FRONTEND_PORT | 6900, // Port for dev server
        host: '0.0.0.0',
        open: true,  // The dev server will open in the browser
        overlay: true, // Shows a full-screen overlay in the browser when there are compiler errors or warnings
        historyApiFallback: true //Redirect all web traffic back to index.html if a path is not found.

    },

    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new Dotenv()
    ]

});
