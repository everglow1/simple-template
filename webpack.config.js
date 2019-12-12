const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const assetsPath = function(_path) {
	const assetsSubDirectory = 'assets';
	return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
	// entry: ["babel-polyfill", './src/main.js'],
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		// filename: 'bundle.js'
		filename: '[name].[hash:7].js',
		// publicPath: './'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.js', '.json', '.css', '.vue', '.less', '.scss', '.stylus']
	},
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000
	},
	devServer:{
		inline: true,
		compress: true,
		host: '127.0.0.1',
		port: 8000,
		historyApiFallback: true
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
          use: ["style-loader", "css-loader", "postcss-loader"]
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
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'] //这里配置了babel就不需要。babelrc文件配置了
					}
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new ExtractTextPlugin({
			filename: assetsPath('css/[name].[md5:contenthash:hex:20].css'),
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
}
