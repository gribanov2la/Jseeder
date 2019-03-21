const typescript2Plugin = require('rollup-plugin-typescript2');

module.exports = typescript2Plugin({
	tsconfig: './tsconfig.json',
	useTsconfigDeclarationDir: true
});
