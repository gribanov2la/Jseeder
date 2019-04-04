import Generator from './Generator';
import {instanceOfICollection} from './interfaces/collection';
import objectMap from './utils/objectMap';

export default class Structure {
    protected object: object;

    constructor(object: object = {}) {
        this.object = object;
    }

    public setObject(value): this {
        this.object = value;
        return this;
    }

    public process(sourceObject: object = {}): object {
        return {
            ...sourceObject,
            ...this.processObject(this.object)
        };
    }

    protected processObject(object: object): object {
        return objectMap(object, value => this.processProperty(value));
    }

    protected processProperty(value: any): any {
        let processedValue;

        if (value instanceof Generator) {
            processedValue = value.get();
        } else if (instanceOfICollection(value)) { // recursion to child collection
            processedValue = value.process();
        } else if (value instanceof Object) {
            processedValue = this.process(value);
        } else { // plain value
            processedValue = value;
        }

        return processedValue;
    }
}
