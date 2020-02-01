const webpack = require('webpack');

const devConfig = {
	devServer: {
		hot: true,
		// open: true,
		overlay: true,
		port: 8080,
		proxy: {
      '/api': 'http://localhost:8080'
    }
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			loader: 'babel-loader'
	// 		},
	// 		{
	// 			test: /\.css$/,
	// 			loader: 'babel-loader'
	// 		}
	// 	]
	// },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = devConfig