import AbstractSeed from '../AbstractSeed';

export default class RangeSeed extends AbstractSeed {
	constructor(params) {
		super(params);
		this.range = params.range || [];
	}
	
	setRange(range = []) {
		this.range = range;
		return this;
	}
	
	generateValue() {
		return 'range-' + this.range[Math.floor(Math.random() * this.range.length)];
	}
}
