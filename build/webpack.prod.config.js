
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const prodConfig = {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin()
	]
}

module.exports = prodConfig;