const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const assetsPath = function(_path) {
	const assetsSubDirectory = 'assets';
	console.log(path.posix.join(assetsSubDirectory, _path))
	return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.js', '.json', '.css', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
			},
			{
				test: /\.html$/,
				use: 'html-withimg-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 500,
							// name: assetsPath('img/[name].[ext]')
							name: 'images/[name]_[hash:7].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new ExtractTextPlugin('./style.css'),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
}
