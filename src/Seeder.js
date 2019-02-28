import SeedFabric from './SeedFabric';
import SeedProcessor from './SeedProcessor';

export default class Seeder {
	/**
	 * @param {SeedProcessor} seedProcessor
	 * @param {Boolean} isSubSeed
	 */
	constructor(seedProcessor, isSubSeed = false) {
		this._seedProcessor = seedProcessor;
		this._isSubSeed = isSubSeed;
	}
	
	static make(structure) {
		return new this(new SeedProcessor(structure));
	}
	
	static makeSubSeeder(structure) {
		return new this(new SeedProcessor(structure), true);
	}
	
	static get types() {
		return SeedFabric;
	}
	
	seed(count) {
		this._seedProcessor.createArrayForFill(count);
		return this._process();
	}
	
	seedToArray(array) {
		this._seedProcessor.setArrayForFill(array);
		return this._process();
	}
	
	setStructure(value = {}) {
		this._seedProcessor.setStructure(value);
	}
	
	/**
	 * @return {SeedProcessor}
	 * @private
	 */
	_process() {
		return this._isSubSeed ? this._seedProcessor : this._seedProcessor.process();
	}
}
