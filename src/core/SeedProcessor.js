import AbstractSeed from './AbstractSeed';
import objectMap from '../utils/objectMap';

export default class SeedProcessor {
	constructor(structure = {}) {
		this._structure = structure;
		this._arrayForFill = [];
		this._parentProcessor = null;
		this._cachedSeedsValues = {};
	}
	
	setStructure(value = {}) {
		this._structure = value;
	}
	
	setArrayForFill(value = []) {
		this._arrayForFill = value;
	}
	
	createArrayForFill(count) {
		this._arrayForFill = new Array(count).fill({});
	}
	
	setParentProcessor(parentProcessor) {
		this._parentProcessor = parentProcessor;
	}
	
	process() {
		return this._arrayForFill.map(preparedItem => {
			this._clearSeedCache();
			return this._processItem(this._structure, preparedItem);
		});
	}
	
	_processItem(structure, preparedItem) {
		return {
			...preparedItem,
			...objectMap(structure, propertyValue => this._processProperty(propertyValue))
		};
	}
	
	_processProperty(value) {
		let processedValue;
		
		if (value instanceof AbstractSeed) {
			processedValue = this._processSeed(value);
		} else if (value instanceof this.constructor) {
			value.setParentProcessor(this);
			processedValue = value.process();
		} else if (typeof value === 'object') {
			processedValue = this._processItem(value);
		} else {
			processedValue = value;
		}
		
		return processedValue;
	}
	
	_processSeed(seed) {
		return seed.hasId() ? this._processSeedWithId(seed) : seed.generateValue();
	}
	
	_processSeedWithId(seed) {
		const seedId = seed.getId();
		
		if (!this._checkCachedSeedValue(seedId)) {
			this._setCachedSeedValue(seedId, seed.generateValue());
		}
		
		return this._getCachedSeedValue(seedId);
	}
	
	_checkCachedSeedValue(seedId) {
		return this._cachedSeedsValues.hasOwnProperty(seedId) ||
			(this._parentProcessor !== null && this._parentProcessor._getCachedSeedValue(seedId));
	}
	
	_getCachedSeedValue(seedId) {
		return this._cachedSeedsValues.hasOwnProperty(seedId)
			? this._cachedSeedsValues[seedId]
			: this._parentProcessor !== null
				? this._parentProcessor._getCachedSeedValue(seedId)
				: undefined;
	}
	
	_setCachedSeedValue(seedId, value) {
		this._cachedSeedsValues[seedId] = value;
	}
	
	_clearSeedCache() {
		this._cachedSeedsValues = {};
	}
}
