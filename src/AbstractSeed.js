export default class AbstractSeed {
	constructor(params) {
		this.id = params.id;
	}
	
	setId(value) {
		this.id = value;
		return this;
	}
	
	hasId() {
		return typeof this.id !== 'undefined';
	}
	
	generateValue() {
		return '';
	}
}
