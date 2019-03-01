import SeedFabric from './SeedFabric';
import SeedProcessor from './core/SeedProcessor';

export default class Seeder {
	/**
	 * @param {SeedProcessor} seedProcessor
	 */
	constructor(seedProcessor) {
		this._seedProcessor = seedProcessor;
	}
	
	static make(structure) {
		return new this(new SeedProcessor(structure));
	}
	
	static get types() {
		return SeedFabric;
	}
	
	fillByCount(count) {
		this._seedProcessor.createArrayForFill(count);
		return this;
	}
	
	fillArray(array) {
		this._seedProcessor.setArrayForFill(array);
		return this;
	}
	
	process() {
		return this._seedProcessor.process();
	}
	
	getChild () {
		return this._seedProcessor
	}
}
