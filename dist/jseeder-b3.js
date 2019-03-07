
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var I18n =
/*#__PURE__*/
function () {
  function I18n(locale, dictionaries) {
    _classCallCheck(this, I18n);

    this._locale = locale;
    this._dictionaries = dictionaries;
  }

  _createClass(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      this._locale = locale;
      return this;
    }
  }, {
    key: "setDictionaries",
    value: function setDictionaries(dictionaries) {
      this._dictionaries = dictionaries;
      return this;
    }
  }, {
    key: "activeDictionary",
    get: function get() {
      return this._dictionaries[this._locale];
    }
  }]);

  return I18n;
}();

var AbstractGenerator =
/*#__PURE__*/
function () {
  _createClass(AbstractGenerator, [{
    key: "_dictionary",
    get: function get() {
      return this._i18n.activeDictionary;
    }
  }, {
    key: "_hexCharset",
    get: function get() {
      return '0123456789ABCDEF';
    }
  }]);

  function AbstractGenerator(i18n, pnrg, params) {
    _classCallCheck(this, AbstractGenerator);

    this._params = params;
    this._i18n = i18n;
    this._pnrg = pnrg;
  }

  _createClass(AbstractGenerator, [{
    key: "generate",
    value: function generate() {
      return null;
    }
  }, {
    key: "_random",
    value: function _random() {
      return this._pnrg.random();
    }
  }, {
    key: "_mapMask",
    value: function _mapMask() {
      var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var replaceableChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
      return function (callback) {
        return mask.split('').map(function (character) {
          return character === replaceableChar ? callback(character) : character;
        }).join('');
      };
    }
  }, {
    key: "_getRandomFromArray",
    value: function _getRandomFromArray(array) {
      return array[Math.floor(this._random() * array.length)];
    }
  }]);

  return AbstractGenerator;
}();

var StringGenerator =
/*#__PURE__*/
function (_AbstractGenerator) {
  _inherits(StringGenerator, _AbstractGenerator);

  function StringGenerator(i18n, pnrg, _ref) {
    var _this;

    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? 8 : _ref$size,
        customCharset = _ref.customCharset;

    _classCallCheck(this, StringGenerator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StringGenerator).call(this, i18n, pnrg));
    _this._size = size;
    _this._customCharset = customCharset;
    return _this;
  }

  _createClass(StringGenerator, [{
    key: "generate",
    value: function generate() {
      var charset = this._getCharset();

      var value = '';

      for (var i = 0; i < this._size; i++) {
        value += this._getRandomFromArray(charset.split(''));
      }

      return value;
    }
  }, {
    key: "size",
    value: function size(_size) {
      this._size = _size;
      return this;
    }
  }, {
    key: "customCharset",
    value: function customCharset(charset) {
      this._charset = charset;
      return this;
    }
  }, {
    key: "_getCharset",
    value: function _getCharset() {
      return this._customCharset || this._dictionary.alphabet + '0123456789';
    }
  }]);

  return StringGenerator;
}(AbstractGenerator);

var StringGenerator$1 =
/*#__PURE__*/
function (_AbstractGenerator) {
  _inherits(StringGenerator, _AbstractGenerator);

  _createClass(StringGenerator, [{
    key: "_uuidMask",
    get: function get() {
      return '########-####-####-####-###########';
    }
  }]);

  function StringGenerator(i18n, pnrg) {
    _classCallCheck(this, StringGenerator);

    return _possibleConstructorReturn(this, _getPrototypeOf(StringGenerator).call(this, i18n, pnrg));
  }

  _createClass(StringGenerator, [{
    key: "generate",
    value: function generate() {
      var _this = this;

      return this._mapMask(this._uuidMask)(function () {
        return _this._getRandomFromArray(_this._hexCharset.split('')).toLowerCase();
      });
    }
  }]);

  return StringGenerator;
}(AbstractGenerator);

var RangeGenerator =
/*#__PURE__*/
function (_AbstractGenerator) {
  _inherits(RangeGenerator, _AbstractGenerator);

  function RangeGenerator(i18n, pnrg, _ref) {
    var _this;

    var _ref$data = _ref.data,
        data = _ref$data === void 0 ? [] : _ref$data;

    _classCallCheck(this, RangeGenerator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeGenerator).call(this, i18n, pnrg));
    _this._data = data;
    return _this;
  }

  _createClass(RangeGenerator, [{
    key: "generate",
    value: function generate() {
      return this._getRandomFromArray(this._data);
    }
  }, {
    key: "data",
    value: function data(_data) {
      this._data = _data;
      return this;
    }
  }]);

  return RangeGenerator;
}(AbstractGenerator);

var GeneratorFabric =
/*#__PURE__*/
function () {
  function GeneratorFabric(i18n, pnrg) {
    _classCallCheck(this, GeneratorFabric);

    this._i18n = i18n;
    this._pnrg = pnrg;
  }

  _createClass(GeneratorFabric, [{
    key: "string",
    value: function string() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new StringGenerator(this._i18n, this._pnrg, params);
    }
  }, {
    key: "uuid",
    value: function uuid() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new StringGenerator$1(this._i18n, this._pnrg, params);
    }
  }, {
    key: "dataset",
    value: function dataset() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new RangeGenerator(this._i18n, this._pnrg, params);
    }
  }]);

  return GeneratorFabric;
}();

var Collection =
/*#__PURE__*/
function () {
  function Collection(structure) {
    _classCallCheck(this, Collection);

    this._structure = structure;
    this._sourceArray = null;
    this._size = null;
  }

  _createClass(Collection, [{
    key: "structure",
    value: function structure(_structure) {
      this._structure = _structure;
      return this;
    }
  }, {
    key: "size",
    value: function size(value) {
      this._size = value;
      return this;
    }
  }, {
    key: "sourceArray",
    value: function sourceArray(array) {
      this._sourceArray = array;
      return this;
    }
  }, {
    key: "process",
    value: function process() {
      var _this = this;

      return this._getArrayForFill().map(function (element) {
        return _this._structure.process(element);
      });
    }
  }, {
    key: "_getArrayForFill",
    value: function _getArrayForFill() {
      var sourceArray;

      if (this._sourceArray !== null && this._size !== null) {
        sourceArray = this._normalizeSourceArrayByCount();
      } else if (this._sourceArray !== null) {
        sourceArray = _toConsumableArray(this._sourceArray);
      } else {
        sourceArray = new Array(this._size || 0).fill({});
      }

      return sourceArray;
    }
  }, {
    key: "_normalizeSourceArrayByCount",
    value: function _normalizeSourceArrayByCount(array, count) {
      return count > array.length ? [].concat(_toConsumableArray(array), [new Array(count - array.length).fill({})]) : array.filter(function (item, index) {
        return index < count;
      });
    }
  }]);

  return Collection;
}();

var objectMap = (function (object, callback) {
  return Object.keys(object).reduce(function (result, propName, index) {
    return _objectSpread({}, result, _defineProperty({}, propName, callback(object[propName], propName, index, result)));
  }, {});
});

var Structure =
/*#__PURE__*/
function () {
  function Structure() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Structure);

    this._object = object;
  }

  _createClass(Structure, [{
    key: "object",
    value: function object(value) {
      this._object = value;
      return this;
    }
  }, {
    key: "process",
    value: function process() {
      var _this = this;

      var sourceObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread({}, sourceObject, objectMap(this._object, function (value, key) {
        return _this._processProperty(value, key, sourceObject);
      }));
    }
  }, {
    key: "_processProperty",
    value: function _processProperty(value, key, sourceObject) {
      var processedValue;

      if (value instanceof AbstractGenerator) {
        processedValue = value.generate();
      } else if (value instanceof Collection) {
        // recursion to child collection
        processedValue = value.process(sourceObject);
      } else if (_typeof(value) === 'object' && value.constructor === Object) {
        // only plain objects
        processedValue = this.process(value, sourceObject[key]);
      } else {
        // plain value
        processedValue = value;
      }

      return processedValue;
    }
  }]);

  return Structure;
}();

var Pnrg =
/*#__PURE__*/
function () {
  function Pnrg() {
    _classCallCheck(this, Pnrg);

    this._seed = Math.floor(Math.random() * 0xF4240 + 1);
  }

  _createClass(Pnrg, [{
    key: "random",
    value: function random() {
      // console.log('seed', this._seed)
      return Math.abs(Math.sin(++this._seed * (this._seed + 0xFF))); // very stupid algorithm
    }
  }, {
    key: "setSeed",
    value: function setSeed(seed) {
      this._seed = seed;
      return this;
    }
  }]);

  return Pnrg;
}();

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var en = {
  alphabet: alphabet
};

var dictionaries = {
  en: en
};

var i18n = new I18n('en', dictionaries);
var pnrg = new Pnrg();
var generatorFabric = new GeneratorFabric(i18n, pnrg);

var Jseeder =
/*#__PURE__*/
function () {
  function Jseeder() {
    _classCallCheck(this, Jseeder);
  }

  _createClass(Jseeder, null, [{
    key: "collection",
    value: function collection(structure) {
      structure = structure instanceof Structure ? structure : Jseeder.structure(structure);
      return new Collection(structure);
    }
  }, {
    key: "structure",
    value: function structure() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Structure(object);
    }
  }, {
    key: "locale",
    value: function locale(_locale) {
      i18n.setLocale(_locale);
      return this;
    }
  }, {
    key: "seed",
    value: function seed(_seed) {
      pnrg.setSeed(_seed);
      return this;
    }
  }, {
    key: "types",
    get: function get() {
      return generatorFabric;
    }
  }]);

  return Jseeder;
}();

export default Jseeder;
//# sourceMappingURL=jseeder-b3.js.map
