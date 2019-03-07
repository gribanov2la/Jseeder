import Collection from './Collection';
import AbstractGenerator from './AbstractGenerator';
import objectMap from './utils/objectMap';

export default class Structure {
    _object;

    constructor(object = {}) {
        this._object = object;
    }

    object(value) {
        this._object = value;
        return this;
    }

    process(sourceObject = {}) {
        return {
            ...sourceObject,
            ...objectMap(this._object, (value, key) => this._processProperty(value, key, sourceObject))
        };
    }

    _processProperty(value, key, sourceObject) {
        let processedValue;

        if (value instanceof AbstractGenerator) {
            processedValue = value.generate();
        } else if (value instanceof Collection) { // recursion to child collection
            processedValue = value.process();
        } else if (typeof value === 'object' && value.constructor === Object) { // only plain objects
            processedValue = this.process(sourceObject[key]);
        } else { // plain value
            processedValue = value;
        }

        return processedValue;
    }
}
