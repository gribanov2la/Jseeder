export default class Collection {
    _structure;
    _sourceArray;
    _size;

    constructor(structure) {
        this._structure = structure;
        this._sourceArray = null;
        this._size = null;
    }

    structure(structure) {
        this._structure = structure;
        return this;
    }

    size(value) {
        this._size = value;
        return this;
    }

    sourceArray(array) {
        this._sourceArray = array;
        return this;
    }

    process() {
        return this._getArrayForFill().map(element => {
            return this._structure.process(element);
        });
    }

    _getArrayForFill() {
        let sourceArray;

        if (this._sourceArray !== null && this._size !== null) {
            sourceArray = this._normalizeSourceArrayByCount(this._sourceArray, this._size);
        } else if (this._sourceArray !== null) {
            sourceArray = [...this._sourceArray];
        } else {
            sourceArray = new Array(this._size || 0).fill({});
        }

        return sourceArray;
    }

    _normalizeSourceArrayByCount(array, count) {
        return count > array.length ?
            [...array, new Array(count - array.length).fill({})]
            : array.filter((item, index) => index < count);
    }
}
