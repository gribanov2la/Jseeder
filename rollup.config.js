import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

module.exports = {
	input: './src/index.js',
	output: [
		{
			file: 'dist/jseeder-b1.js',
			sourcemap: true,
			name: 'Jseeder',
			format: 'umd'
		},
		{
			file: 'dist/jseeder-b2.js',
			sourcemap: true,
			format: 'esm'
		},
		{
			file: 'dist/jseeder-b3.js',
			sourcemap: true,
			format: 'es'
		}
	],
	plugins: [
		serve({
			open: true,
			contentBase: 'dist'
		}),
		livereload({
			watch: 'dist'
		}),
		babel({
			exclude: './node_modules/**'
		})
	]
};
