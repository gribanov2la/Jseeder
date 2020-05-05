var I18n = /** @class */ (function () {
    function I18n(locale, dictionaries) {
        this.locale = locale;
        this.dictionaries = dictionaries;
    }
    I18n.prototype.getDictionary = function (locale) {
        return this.dictionaries[locale];
    };
    I18n.prototype.getActiveDictionary = function () {
        return this.getDictionary(this.locale);
    };
    I18n.prototype.setLocale = function (locale) {
        this.locale = locale;
        return this;
    };
    I18n.prototype.setDictionaries = function (dictionaries) {
        this.dictionaries = dictionaries;
        return this;
    };
    return I18n;
}());
var i18n = new I18n();

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var en = {
    alphabet: alphabet
};

var dictionaries = {
    en: en
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var Pnrg = /** @class */ (function () {
    function Pnrg() {
        this.seed = Math.floor((Math.random() * 0xF4240) + 1);
    }
    Pnrg.prototype.random = function () {
        return Math.abs(Math.sin(++this.seed * (this.seed + 0xFF))); // very stupid algorithm
    };
    Pnrg.prototype.setSeed = function (seed) {
        this.seed = seed;
        return this;
    };
    return Pnrg;
}());
var pnrg = new Pnrg();

var Generator = /** @class */ (function () {
    function Generator(params) {
        if (params === void 0) { params = {}; }
        this.hexNumberCharset = '0123456789ABCDEF';
        this.decNumberCharset = '0123456789';
        var _a = params.locale, locale = _a === void 0 ? '' : _a;
        this.internalLocale = locale;
        this.i18n = i18n;
        this.pnrg = pnrg;
    }
    Generator.prototype.getDictionary = function () {
        return this.internalLocale === ''
            ? this.i18n.getActiveDictionary()
            : this.i18n.getDictionary(this.internalLocale);
    };
    Generator.prototype.random = function () {
        return this.pnrg.random();
    };
    Generator.prototype.makeMaskMapper = function (mask, replaceableChar) {
        if (replaceableChar === void 0) { replaceableChar = '#'; }
        return function (callback) { return mask.split('')
            .map(function (character) { return character === replaceableChar ? callback(character) : character; })
            .join(''); };
    };
    Generator.prototype.getRandomFromArray = function (array, weights) {
        var normalizedWeights = weights && weights.length > 0 ? weights : array.map(function () { return 1; });
        var arrayLength = normalizedWeights.reduce(function (total, weight) { return weight + total; }, 0);
        var weightResultIndex = Math.floor(this.random() * arrayLength);
        var weightCache = 0;
        for (var i = 0; i < array.length; i++) {
            weightCache += normalizedWeights[i];
            if (weightResultIndex < weightCache) {
                return array[i];
            }
        }
    };
    return Generator;
}());

function instanceOfICollection(object) {
    return [
        'setObject',
        'setSize',
        'setSourceArray',
        'process'
    ].every(function (methodName) { return methodName in object; });
}

var objectMap = (function (object, callback) { return Object.keys(object).reduce(function (result, propName, index) {
    var _a;
    return (__assign(__assign({}, result), (_a = {}, _a[propName] = callback(object[propName], propName, index, result), _a)));
}, {}); });

var Structure = /** @class */ (function () {
    function Structure(object) {
        if (object === void 0) { object = {}; }
        this.object = object;
    }
    Structure.prototype.setObject = function (value) {
        this.object = value;
        return this;
    };
    Structure.prototype.process = function (sourceObject) {
        if (sourceObject === void 0) { sourceObject = {}; }
        return __assign(__assign({}, sourceObject), this.processObject(this.object));
    };
    Structure.prototype.processObject = function (object) {
        var _this = this;
        return objectMap(object, function (value) { return _this.processProperty(value); });
    };
    Structure.prototype.processProperty = function (value) {
        var processedValue;
        if (value instanceof Generator) {
            processedValue = value.get();
        }
        else if (instanceOfICollection(value)) { // recursion to child collection
            processedValue = value.process();
        }
        else if (value instanceof Object) {
            processedValue = this.process(value);
        }
        else { // plain value
            processedValue = value;
        }
        return processedValue;
    };
    return Structure;
}());

var Collection = /** @class */ (function () {
    function Collection(object) {
        this.structure = new Structure(object);
    }
    Collection.make = function (object) {
        return new this(object);
    };
    Collection.prototype.setObject = function (object) {
        this.structure = object;
        return this;
    };
    Collection.prototype.setSize = function (value) {
        this.size = value;
        return this;
    };
    Collection.prototype.setSourceArray = function (array) {
        this.sourceArray = array;
        return this;
    };
    Collection.prototype.process = function () {
        var _this = this;
        return this.getArrayForFill().map(function (sourceObject) {
            return new Structure(_this.structure).process(sourceObject);
        });
    };
    Collection.prototype.getArrayForFill = function () {
        var sourceArray;
        if (this.sourceArray != null && this.size != null) {
            sourceArray = this.normalizeSourceArrayByCount(this.sourceArray, this.size);
        }
        else if (this.sourceArray != null) {
            sourceArray = __spreadArrays(this.sourceArray);
        }
        else {
            sourceArray = (new Array(this.size || 0)).fill({});
        }
        return sourceArray;
    };
    Collection.prototype.normalizeSourceArrayByCount = function (array, count) {
        return count > array.length ? __spreadArrays(array, [new Array(count - array.length).fill({})]) : array.filter(function (item, index) { return index < count; });
    };
    return Collection;
}());

var collection = (function (object) { return new Collection(object); });

var DatasetGenerator = /** @class */ (function (_super) {
    __extends(DatasetGenerator, _super);
    function DatasetGenerator(params) {
        if (params === void 0) { params = {}; }
        var _this = _super.call(this, params) || this;
        var _a = params.data, data = _a === void 0 ? [] : _a, _b = params.weights, weights = _b === void 0 ? [] : _b;
        _this.data = data;
        _this.weights = weights;
        return _this;
    }
    DatasetGenerator.prototype.get = function () {
        return this.getRandomFromArray(this.data, this.weights);
    };
    DatasetGenerator.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    DatasetGenerator.prototype.setWeights = function (weights) {
        this.weights = weights;
        return this;
    };
    return DatasetGenerator;
}(Generator));

var StringGenerator = /** @class */ (function (_super) {
    __extends(StringGenerator, _super);
    function StringGenerator(params) {
        if (params === void 0) { params = {}; }
        var _this = _super.call(this, params) || this;
        var _a = params.size, size = _a === void 0 ? 8 : _a, _b = params.customCharset, customCharset = _b === void 0 ? '' : _b;
        _this.size = size;
        _this.customCharset = customCharset;
        return _this;
    }
    StringGenerator.prototype.get = function () {
        var charset = this.getCharset();
        var value = '';
        for (var i = 0; i < this.size; i++) {
            value += this.getRandomFromArray(charset.split(''));
        }
        return value;
    };
    StringGenerator.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    StringGenerator.prototype.setCustomCharset = function (charset) {
        this.customCharset = charset;
        return this;
    };
    StringGenerator.prototype.getCharset = function () {
        return this.customCharset || (this.getDictionary().alphabet + this.decNumberCharset);
    };
    return StringGenerator;
}(Generator));

var UuidGenerator = /** @class */ (function (_super) {
    __extends(UuidGenerator, _super);
    function UuidGenerator(params) {
        if (params === void 0) { params = {}; }
        var _this = _super.call(this, params) || this;
        _this.mask = '########-####-####-####-###########';
        return _this;
    }
    UuidGenerator.prototype.get = function () {
        var _this = this;
        return this.makeMaskMapper(this.mask)(function () { return _this.getRandomFromArray(_this.hexNumberCharset.split('')).toLowerCase(); });
    };
    return UuidGenerator;
}(Generator));

var generators = {
    dataset: function (params) { return new DatasetGenerator(params); },
    string: function (params) { return new StringGenerator(params); },
    uuid: function (params) { return new UuidGenerator(params); }
};

var setLocale = (function (locale) {
    i18n.setLocale(locale);
});

var setSeed = (function (seed) {
    pnrg.setSeed(seed);
});

i18n.setDictionaries(dictionaries);

export { collection, generators, setLocale, setSeed };
//# sourceMappingURL=jseeder.esm.js.map
