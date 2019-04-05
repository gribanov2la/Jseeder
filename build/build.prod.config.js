const uglifyPlugin = require('rollup-plugin-uglify').uglify;
const cleanerPlugin = require('rollup-plugin-cleaner');
const modules = require('./configs/modules');
const typescriptPlugin = require('./configs/typescriptPlugin.js');


module.exports = {
	input: './src/index.ts',
	output: [modules.umdProd],
	plugins: [
		cleanerPlugin({
			targets: [
				'./dist/',
				'./types/'
			]
		}),
		typescriptPlugin,
		uglifyPlugin()
	]
};
