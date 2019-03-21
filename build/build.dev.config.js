const modules = require('./configs/modules');
const typescriptPlugin = require('./configs/typescriptPlugin.js');

module.exports = {
	input: './src/index.ts',
	output: [
		modules.esm,
		modules.cjs,
		modules.umdDev
	],
	plugins: [
		typescriptPlugin
	]
};
