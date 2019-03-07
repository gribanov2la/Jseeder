import AbstractGenerator from '../AbstractGenerator';

export default class StringGenerator extends AbstractGenerator {
	constructor(i18n, pnrg, {size = 8, customCharset}) {
		super(i18n, pnrg);
		this._size = size;
		this._customCharset = customCharset;
	}
	
	
	generate() {
		const charset = this._getCharset();
		let value = '';
		
		for (let i = 0; i < this._size; i++) {
			value += this._getRandomFromArray(charset.split(''));
		}
		
		return value;
	}
	
	size(size) {
		this._size = size;
		return this;
	}
	
	customCharset(charset) {
		this._charset = charset;
		return this;
	}
	
	_getCharset() {
		return this._customCharset || (this._dictionary.alphabet + '0123456789');
	}
}
