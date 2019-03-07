import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

module.exports = {
	input: './src/index.ts',
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
		// typescript({
		// 	lib: ["es5", "es6", "dom"],
		// 	target: "es5",
		// 	include: './src'
		// })
		typescript({tsconfig: "tsconfig.json"})
		// babel({
		// 	exclude: './node_modules/**'
		// })
	]
};
