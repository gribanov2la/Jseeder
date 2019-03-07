export default class AbstractGenerator {
	_params;
	_i18n;
	_pnrg;

	get _dictionary() {
		return this._i18n.activeDictionary;
	}

	get _hexCharset() {
		return '0123456789ABCDEF';
	}

	constructor(i18n, pnrg, params = {}) {
		this._params = params;
		this._i18n = i18n;
		this._pnrg = pnrg;
	}

	generate() {
		return null;
	}

	_random() {
		return this._pnrg.random();
	}

	_mapMask(mask = '', replaceableChar = '#') {
		return callback => mask.split('')
			.map(character => character === replaceableChar ? callback(character) : character)
			.join('');
	}

	_getRandomFromArray(array) {
		return array[Math.floor(this._random() * array.length)];
	}
}
