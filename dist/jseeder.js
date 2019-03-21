(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Jseeder = factory());
}(this, function () { 'use strict';

    var Collection = /** @class */ (function () {
        function Collection(structure) {
            this.structure = structure;
        }
        Collection.prototype.setStructure = function (structure) {
            this.structure = structure;
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
                return _this.structure.process(sourceObject);
            });
        };
        Collection.prototype.getArrayForFill = function () {
            var sourceArray;
            if (this.sourceArray != null && this.size != null) {
                sourceArray = this.normalizeSourceArrayByCount(this.sourceArray, this.size);
            }
            else if (this.sourceArray != null) {
                sourceArray = this.sourceArray.slice();
            }
            else {
                sourceArray = (new Array(this.size || 0)).fill({});
            }
            return sourceArray;
        };
        Collection.prototype.normalizeSourceArrayByCount = function (array, count) {
            return count > array.length ? array.concat([new Array(count - array.length).fill({})]) : array.filter(function (item, index) { return index < count; });
        };
        return Collection;
    }());

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

    var Generator = /** @class */ (function () {
        function Generator(i18n, pnrg) {
            this.hexNumberCharset = '0123456789ABCDEF';
            this.decNumberCharset = '0123456789';
            this.i18n = i18n;
            this.pnrg = pnrg;
        }
        Generator.prototype.getDictionary = function () {
            return this.i18n.getActiveDictionary();
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
        Generator.prototype.getRandomFromArray = function (array) {
            return array[Math.floor(this.random() * array.length)];
        };
        return Generator;
    }());

    var StringGenerator = /** @class */ (function (_super) {
        __extends(StringGenerator, _super);
        function StringGenerator(i18n, pnrg, _a) {
            var _b = _a.size, size = _b === void 0 ? 8 : _b, customCharset = _a.customCharset;
            var _this = _super.call(this, i18n, pnrg) || this;
            _this.size = size;
            _this.customCharset = customCharset;
            return _this;
        }
        StringGenerator.prototype.generate = function () {
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

    var StringGenerator$1 = /** @class */ (function (_super) {
        __extends(StringGenerator, _super);
        function StringGenerator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mask = '########-####-####-####-###########';
            return _this;
        }
        StringGenerator.prototype.generate = function () {
            var _this = this;
            return this.makeMaskMapper(this.mask)(function () { return _this.getRandomFromArray(_this.hexNumberCharset.split('')).toLowerCase(); });
        };
        return StringGenerator;
    }(Generator));

    var DatasetGenerator = /** @class */ (function (_super) {
        __extends(DatasetGenerator, _super);
        function DatasetGenerator(i18n, pnrg, _a) {
            var _b = _a.data, data = _b === void 0 ? [] : _b;
            var _this = _super.call(this, i18n, pnrg) || this;
            _this.data = data;
            return _this;
        }
        DatasetGenerator.prototype.generate = function () {
            return this.getRandomFromArray(this.data);
        };
        DatasetGenerator.prototype.setData = function (data) {
            this.data = data;
            return this;
        };
        return DatasetGenerator;
    }(Generator));

    var GeneratorFabric = /** @class */ (function () {
        function GeneratorFabric(i18n, pnrg) {
            this.i18n = i18n;
            this.pnrg = pnrg;
        }
        GeneratorFabric.prototype.string = function (params) {
            return new StringGenerator(this.i18n, this.pnrg, params);
        };
        GeneratorFabric.prototype.uuid = function () {
            return new StringGenerator$1(this.i18n, this.pnrg);
        };
        GeneratorFabric.prototype.dataset = function (params) {
            return new DatasetGenerator(this.i18n, this.pnrg, params);
        };
        return GeneratorFabric;
    }());

    var I18n = /** @class */ (function () {
        function I18n(locale, dictionaries) {
            this.locale = locale;
            this.dictionaries = dictionaries;
        }
        I18n.prototype.getActiveDictionary = function () {
            return this.dictionaries[this.locale];
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

    var objectMap = (function (object, callback) { return Object.keys(object).reduce(function (result, propName, index) {
        var _a;
        return (__assign({}, result, (_a = {}, _a[propName] = callback(object[propName], propName, index, result), _a)));
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
            return __assign({}, sourceObject, this.processObject(this.object));
        };
        Structure.prototype.processObject = function (object) {
            var _this = this;
            return objectMap(object, function (value) { return _this.processProperty(value); });
        };
        Structure.prototype.processProperty = function (value) {
            var processedValue;
            if (value instanceof Generator) {
                processedValue = value.generate();
            }
            else if (value instanceof Collection) { // recursion to child collection
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

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    var en = {
        alphabet: alphabet
    };

    var dictionaries = {
        en: en
    };

    var globalI18n = new I18n('en', dictionaries);
    var globalPnrg = new Pnrg();
    var globalGeneratorFabric = new GeneratorFabric(globalI18n, globalPnrg);
    var Jseeder = /** @class */ (function () {
        function Jseeder(i18n, pnrg, generatorFabric) {
            this.i18n = i18n;
            this.pnrg = pnrg;
            this.generatorFabric = generatorFabric;
        }
        Jseeder.types = function () {
            return globalGeneratorFabric;
        };
        Jseeder.collection = function (structure) {
            structure = structure instanceof Structure ? structure : Jseeder.structure(structure);
            return new Collection(structure);
        };
        Jseeder.structure = function (object) {
            return new Structure(object);
        };
        Jseeder.locale = function (locale) {
            globalI18n.setLocale(locale);
            return Jseeder;
        };
        Jseeder.seed = function (seed) {
            globalPnrg.setSeed(seed);
            return Jseeder;
        };
        Jseeder.prototype.types = function () {
            return this.generatorFabric;
        };
        Jseeder.prototype.instance = function (lang) {
            if (lang === void 0) { lang = 'en'; }
            var i18n = new I18n(lang, dictionaries);
            var pnrg = new Pnrg();
            var generatorFabric = new GeneratorFabric(i18n, globalPnrg);
            return new Jseeder(i18n, pnrg, generatorFabric);
        };
        Jseeder.prototype.collection = function (structure) {
            return Jseeder.collection(structure);
        };
        Jseeder.prototype.structure = function (object) {
            return Jseeder.structure(object);
        };
        Jseeder.prototype.locale = function (locale) {
            this.i18n.setLocale(locale);
            return this;
        };
        Jseeder.prototype.seed = function (seed) {
            this.pnrg.setSeed(seed);
            return this;
        };
        return Jseeder;
    }());

    return Jseeder;

}));
//# sourceMappingURL=jseeder.js.map
