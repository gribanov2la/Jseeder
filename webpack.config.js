const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const nodeNotifier = require('node-notifier')

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: './index.js',
		library: 'dataSeeder',
		libraryTarget: 'umd'
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname),
		compress: true,
		port: 9009,
		watchContentBase: true,
		progress: true,
		clientLogLevel: 'warning',
		hot: true,
		overlay: 1 === 1
			? {warnings: false, errors: true}
			: false,
		// quiet: true // necessary for FriendlyErrorsPlugin
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		// new FriendlyErrorsPlugin({
		// 	compilationSuccessInfo: {
		// 		messages: [`Your application is running here: http://localhost:9009`]
		// 	},
		// 	onErrors: (severity, errors) => {
		// 		if (severity !== 'error') return
		//
		// 		const error = errors[0]
		// 		const filename = error.file && error.file.split('!').pop()
		//
		// 		nodeNotifier.notify({
		// 			title: 'javascript-data-seeder',
		// 			message: severity + ': ' + error.name,
		// 			subtitle: filename || '',
		// 			icon: path.join(__dirname, 'logo.png')
		// 		})
		// 	}
		// })
	]
}
