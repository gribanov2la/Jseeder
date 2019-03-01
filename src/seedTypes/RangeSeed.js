import AbstractSeed from '../core/AbstractSeed';

export default class RangeSeed extends AbstractSeed {
	constructor(params) {
		super(params);
		this._range = params.range || [];
	}
	
	setRange(value = []) {
		this._range = value;
		return this;
	}
	
	generateValue() {
		return this._range.length ? this._range[this._getRandomRangeIndex(this._range)] : '';
	}
	
	_getRandomRangeIndex(range) {
		return Math.floor(Math.random() * range.length);
	}
}
