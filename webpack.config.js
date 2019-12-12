const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'production',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	// resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     '@': resolve('src'),
  //     'common': resolve('src/common'),
  //     'components': resolve('src/components'),
  //     'base': resolve('src/base'),
	// 		'api': resolve('src/api'),
	// 		'vue': 'vue/dist/vue.esm.js'
  //   }
  // },
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}
