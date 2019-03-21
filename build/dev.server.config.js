const servePlugin = require('rollup-plugin-serve');
const livereloadPlugin = require('rollup-plugin-livereload');
const tslintPlugin = require('rollup-plugin-tslint');
const modules = require('./configs/modules');
const typescriptPlugin = require('./configs/typescriptPlugin.js');


module.exports = {
	input: './src/index.ts',
	output: [
		modules.esm,
		modules.cjs,
		modules.umdDev
	],
	watch: {
		// chokidar: true,
		include: 'src/utils/**'
	},
	plugins: [
		servePlugin({
			open: true,
			contentBase: 'examples'
		}),
		livereloadPlugin({
			watch: 'dist'
		}),
		tslintPlugin(),
		typescriptPlugin
	]
};
