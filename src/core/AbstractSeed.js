export default class AbstractSeed {
	constructor({id} = {}) {
		this._id = id;
	}
	
	setId(value) {
		this._id = value;
		return this;
	}
	
	getId() {
		return this._id;
	}
	
	hasId() {
		return typeof this._id !== 'undefined';
	}
	
	generateValue() {
		return '';
	}
}
