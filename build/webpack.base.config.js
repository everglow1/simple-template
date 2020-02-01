const path = require('path');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.dev.config.js');
const prodConfig = require('./webpack.prod.config.js');

const devMode = process.env.NODE_ENV !== 'development';

const baseConfig = {
	entry: {
		main: './src/main.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '../dist')
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
        test: /\.(sa|sc|c)ss$/,
        use: [
					'style-loader',
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
					// 'sass-loader',
					// 'vue-style-loader'
        ],
      },
			{
				// test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				test: /\.(png|jpg|jepg|svg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						// name: utils.assetsPath('media/[name].[hash:7].[ext]'),
						// name: path.resolve(__dirname, '../images/[name]_[hash:7].[ext]'),
						// limit: 10000,
						name: '[name].[ext]',
						outputPath: 'images/',
						limit: 10000,
						// publicPath: 'assets',
						emitFile: true
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
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html'
			// inject: true
		}),
		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
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