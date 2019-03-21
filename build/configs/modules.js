module.exports = {
	cjs: {
		file: 'dist/jseeder.common.js',
		sourcemap: true,
		format: 'cjs'
	},
	umdDev: {
		file: 'dist/jseeder.js',
		sourcemap: true,
		name: 'Jseeder',
		format: 'umd'
	},
	umdProd: {
		file: 'dist/jseeder.min.js',
		name: 'Jseeder',
		format: 'umd'
	},
	esm: {
		file: 'dist/jseeder.esm.js',
		sourcemap: true,
		format: 'esm'
	}
};
