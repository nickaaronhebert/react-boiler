const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
        'babel-polyfill', 
        path.join(__dirname, "src/index.js")
    ],
	module: {
		rules: [
			/* Used to transpile es6 (presets in .babelrc file) */
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			/* Converts sass to css then loads the css as a style tag */
			/* Note loaders work from right to left (e.g sass-loader runs then css-loader then style-loader */
			{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
			},
			/* Loads css as a style tag */
			{
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    publicPath: '/dist'
                })
			},
			/* Used to load images */
			{
                test: /\.(jpe?g|png|gif|svg|eot|woff|woff2|ttf)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: path.join(__dirname, 'img/[name].[ext]'),
                        publicPath: '/dist'
                    }
                }
			}
		]
	},
	/* Defines the webpack plugins we want to apply */
	plugins: [
		/* Do not emit if there are errors */
        new webpack.NoEmitOnErrorsPlugin(),
        /* Load a custom template (lodash by default see the FAQ for details) */
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
	]
};