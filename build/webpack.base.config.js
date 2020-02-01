const path = require('path');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.dev.config.js');
const prodConfig = require('./webpack.prod.config.js');

const assetsPath = function(_path) {
	const assetsSubDirectory = 'assets';
	return path.posix.join(assetsSubDirectory, _path)
}
console.log('===============', path.resolve(__dirname, '../src'))
const baseConfig = {
	entry: {
		main: './src/main.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['.js', '.json', '.css', '.vue', '.less', '.scss', '.stylus']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["style-loader", "css-loader", "postcss-loader"]
        })
			},
			{
				test: /\.less$/,
				loader: ['css-loader', 'style-loader', 'postcss-loader', 'less-loader']
			},
			{
				test: /\.scss$/,
				loader: ['css-loader', 'style-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.stylus$/,
				loader: ['css-loader', 'style-loader', 'postcss-loader', 'stylus-loader']
			},
			{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					options: {
						// name: utils.assetsPath('media/[name].[hash:7].[ext]'),
						limit: 10000,
					}
				}
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
					loader: 'url-loader',
					options: {
						// name: utils.assetsPath('media/[name].[hash:7].[ext]'),
						limit: 10000,
					}
				}
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
					loader: 'url-loader',
					options: {
						// name: utils.assetsPath('media/[name].[hash:7].[ext]'),
						limit: 10000,
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
			template: 'index.html',
			// inject: true
		})
	]
}

module.exports = env => {
	if(env && env.production) {
		return merge(baseConfig, prodConfig)
	} else {
		return merge(baseConfig, devConfig)
	}
}