import AbstractSeed from './AbstractSeed';
import objectMap from './utils/objectMap';

export default class SeedsProcessor {
	constructor(count, structure) {
		this.count = count;
		this.structure = structure;
		this.parentProcessor = null;
		this.cachedSeedsValues = {};
	}
	
	process(parentProcessor) {
		this._setParentProcessor(parentProcessor);
		return new Array(this.count).fill('').map(() => {
			this._clearSeedCache();
			return this._processItem(this.structure);
		});
	}
	
	_setParentProcessor(parentProcessor) {
		if (parentProcessor instanceof this.constructor) {
			this.parentProcessor = parentProcessor;
		}
	}
	
	_processItem(structure) {
		return objectMap(structure, propertyValue => this._processProperty(propertyValue));
	}
	
	_processProperty(value) {
		let processedValue;
		
		if (value instanceof AbstractSeed) {
			processedValue = this._processSeed(value);
		} else if (value instanceof this.constructor) {
			processedValue = value.process(this);
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
		if (!this._checkCachedSeedValue(seed.id)) {
			this._setCachedSeedValue(seed.id, seed.generateValue());
		}
		
		return this._getCachedSeedValue(seed.id);
	}
	
	_checkCachedSeedValue(seedId) {
		return this.cachedSeedsValues.hasOwnProperty(seedId) ||
			(this.parentProcessor !== null && this.parentProcessor._getCachedSeedValue(seedId));
	}
	
	_getCachedSeedValue(seedId) {
		return this.cachedSeedsValues.hasOwnProperty(seedId)
			? this.cachedSeedsValues[seedId]
			: this.parentProcessor !== null
				? this.parentProcessor._getCachedSeedValue(seedId)
				: undefined;
	}
	
	_setCachedSeedValue(seedId, value) {
		this.cachedSeedsValues[seedId] = value;
	}
	
	_clearSeedCache() {
		this.cachedSeedsValues = {};
	}
}
