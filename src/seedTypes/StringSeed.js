import AbstractSeed from '../AbstractSeed';

export default class StringSeed extends AbstractSeed {
	constructor(params) {
		super(params);
		this._size = params.size || 6;
		this._charset = params.charset || 'abcdefghijklmnopqrstuvwxyz0123456789';
	}
	
	setSize(value) {
		this._size = value;
		return this;
	}
	
	setCharset(value) {
		this._charset = value;
		return this;
	}
	
	generateValue() {
		let value = '';
		
		for (let i = 0; i < this._size; i++) {
			value += this._charset.charAt(Math.floor(Math.random() * charset.length));
		}
		
		return value;
	}
}
