const uglifyPlugin = require('rollup-plugin-uglify').uglify;
const modules = require('./configs/modules');
const typescriptPlugin = require('./configs/typescriptPlugin.js');


module.exports = {
	input: './src/index.ts',
	output: [modules.umdProd],
	plugins: [
		typescriptPlugin,
		uglifyPlugin()
	]
};
