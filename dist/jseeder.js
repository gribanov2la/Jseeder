(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jseeder"] = factory();
	else
		root["jseeder"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Seeder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SeedFabric.js":
/*!***************************!*\
  !*** ./src/SeedFabric.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeedFabric; });
/* harmony import */ var _seedTypes_StringSeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seedTypes/StringSeed */ "./src/seedTypes/StringSeed.js");
/* harmony import */ var _seedTypes_UuidSeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seedTypes/UuidSeed */ "./src/seedTypes/UuidSeed.js");
/* harmony import */ var _seedTypes_RangeSeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seedTypes/RangeSeed */ "./src/seedTypes/RangeSeed.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SeedFabric =
/*#__PURE__*/
function () {
  function SeedFabric() {
    _classCallCheck(this, SeedFabric);
  }

  _createClass(SeedFabric, null, [{
    key: "string",
    value: function string() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _seedTypes_StringSeed__WEBPACK_IMPORTED_MODULE_0__["default"](params);
    }
  }, {
    key: "uuid",
    value: function uuid() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _seedTypes_UuidSeed__WEBPACK_IMPORTED_MODULE_1__["default"](params);
    }
  }, {
    key: "range",
    value: function range() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _seedTypes_RangeSeed__WEBPACK_IMPORTED_MODULE_2__["default"](params);
    }
  }]);

  return SeedFabric;
}();



/***/ }),

/***/ "./src/Seeder.js":
/*!***********************!*\
  !*** ./src/Seeder.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Seeder; });
/* harmony import */ var _SeedFabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeedFabric */ "./src/SeedFabric.js");
/* harmony import */ var _core_SeedProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/SeedProcessor */ "./src/core/SeedProcessor.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Seeder =
/*#__PURE__*/
function () {
  /**
   * @param {SeedProcessor} seedProcessor
   */
  function Seeder(seedProcessor) {
    _classCallCheck(this, Seeder);

    this._seedProcessor = seedProcessor;
  }

  _createClass(Seeder, [{
    key: "fillByCount",
    value: function fillByCount(count) {
      this._seedProcessor.createArrayForFill(count);

      return this;
    }
  }, {
    key: "fillArray",
    value: function fillArray(array) {
      this._seedProcessor.setArrayForFill(array);

      return this;
    }
  }, {
    key: "process",
    value: function process() {
      return this._seedProcessor.process();
    }
  }, {
    key: "getChild",
    value: function getChild() {
      return this._seedProcessor;
    }
  }], [{
    key: "make",
    value: function make(structure) {
      return new this(new _core_SeedProcessor__WEBPACK_IMPORTED_MODULE_1__["default"](structure));
    }
  }, {
    key: "types",
    get: function get() {
      return _SeedFabric__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);

  return Seeder;
}();



/***/ }),

/***/ "./src/core/AbstractSeed.js":
/*!**********************************!*\
  !*** ./src/core/AbstractSeed.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractSeed; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractSeed =
/*#__PURE__*/
function () {
  function AbstractSeed() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id;

    _classCallCheck(this, AbstractSeed);

    this._id = id;
  }

  _createClass(AbstractSeed, [{
    key: "setId",
    value: function setId(value) {
      this._id = value;
      return this;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._id;
    }
  }, {
    key: "hasId",
    value: function hasId() {
      return typeof this._id !== 'undefined';
    }
  }, {
    key: "generateValue",
    value: function generateValue() {
      return '';
    }
  }]);

  return AbstractSeed;
}();



/***/ }),

/***/ "./src/core/SeedProcessor.js":
/*!***********************************!*\
  !*** ./src/core/SeedProcessor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeedProcessor; });
/* harmony import */ var _AbstractSeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractSeed */ "./src/core/AbstractSeed.js");
/* harmony import */ var _utils_objectMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectMap */ "./src/utils/objectMap.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SeedProcessor =
/*#__PURE__*/
function () {
  function SeedProcessor() {
    var structure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SeedProcessor);

    this._structure = structure;
    this._arrayForFill = [];
    this._parentProcessor = null;
    this._cachedSeedsValues = {};
  }

  _createClass(SeedProcessor, [{
    key: "setStructure",
    value: function setStructure() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._structure = value;
    }
  }, {
    key: "setArrayForFill",
    value: function setArrayForFill() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this._arrayForFill = value;
    }
  }, {
    key: "createArrayForFill",
    value: function createArrayForFill(count) {
      this._arrayForFill = new Array(count).fill({});
    }
  }, {
    key: "setParentProcessor",
    value: function setParentProcessor(parentProcessor) {
      this._parentProcessor = parentProcessor;
    }
  }, {
    key: "process",
    value: function process() {
      var _this = this;

      return this._arrayForFill.map(function (preparedItem) {
        _this._clearSeedCache();

        return _this._processItem(_this._structure, preparedItem);
      });
    }
  }, {
    key: "_processItem",
    value: function _processItem(structure, preparedItem) {
      var _this2 = this;

      return _objectSpread({}, preparedItem, Object(_utils_objectMap__WEBPACK_IMPORTED_MODULE_1__["default"])(structure, function (propertyValue) {
        return _this2._processProperty(propertyValue);
      }));
    }
  }, {
    key: "_processProperty",
    value: function _processProperty(value) {
      var processedValue;

      if (value instanceof _AbstractSeed__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        processedValue = this._processSeed(value);
      } else if (value instanceof this.constructor) {
        value.setParentProcessor(this);
        processedValue = value.process();
      } else if (_typeof(value) === 'object') {
        processedValue = this._processItem(value);
      } else {
        processedValue = value;
      }

      return processedValue;
    }
  }, {
    key: "_processSeed",
    value: function _processSeed(seed) {
      return seed.hasId() ? this._processSeedWithId(seed) : seed.generateValue();
    }
  }, {
    key: "_processSeedWithId",
    value: function _processSeedWithId(seed) {
      var seedId = seed.getId();

      if (!this._checkCachedSeedValue(seedId)) {
        this._setCachedSeedValue(seedId, seed.generateValue());
      }

      return this._getCachedSeedValue(seedId);
    }
  }, {
    key: "_checkCachedSeedValue",
    value: function _checkCachedSeedValue(seedId) {
      return this._cachedSeedsValues.hasOwnProperty(seedId) || this._parentProcessor !== null && this._parentProcessor._getCachedSeedValue(seedId);
    }
  }, {
    key: "_getCachedSeedValue",
    value: function _getCachedSeedValue(seedId) {
      return this._cachedSeedsValues.hasOwnProperty(seedId) ? this._cachedSeedsValues[seedId] : this._parentProcessor !== null ? this._parentProcessor._getCachedSeedValue(seedId) : undefined;
    }
  }, {
    key: "_setCachedSeedValue",
    value: function _setCachedSeedValue(seedId, value) {
      this._cachedSeedsValues[seedId] = value;
    }
  }, {
    key: "_clearSeedCache",
    value: function _clearSeedCache() {
      this._cachedSeedsValues = {};
    }
  }]);

  return SeedProcessor;
}();



/***/ }),

/***/ "./src/seedTypes/RangeSeed.js":
/*!************************************!*\
  !*** ./src/seedTypes/RangeSeed.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeSeed; });
/* harmony import */ var _core_AbstractSeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AbstractSeed */ "./src/core/AbstractSeed.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RangeSeed =
/*#__PURE__*/
function (_AbstractSeed) {
  _inherits(RangeSeed, _AbstractSeed);

  function RangeSeed(params) {
    var _this;

    _classCallCheck(this, RangeSeed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeSeed).call(this, params));
    _this._range = params.range || [];
    return _this;
  }

  _createClass(RangeSeed, [{
    key: "setRange",
    value: function setRange() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this._range = value;
      return this;
    }
  }, {
    key: "generateValue",
    value: function generateValue() {
      return this._range.length ? this._range[this._getRandomRangeIndex(this._range)] : '';
    }
  }, {
    key: "_getRandomRangeIndex",
    value: function _getRandomRangeIndex(range) {
      return Math.floor(Math.random() * range.length);
    }
  }]);

  return RangeSeed;
}(_core_AbstractSeed__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/seedTypes/StringSeed.js":
/*!*************************************!*\
  !*** ./src/seedTypes/StringSeed.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringSeed; });
/* harmony import */ var _core_AbstractSeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AbstractSeed */ "./src/core/AbstractSeed.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StringSeed =
/*#__PURE__*/
function (_AbstractSeed) {
  _inherits(StringSeed, _AbstractSeed);

  function StringSeed(params) {
    var _this;

    _classCallCheck(this, StringSeed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StringSeed).call(this, params));
    _this._size = params.size || 6;
    _this._charset = params.charset || 'abcdefghijklmnopqrstuvwxyz0123456789';
    return _this;
  }

  _createClass(StringSeed, [{
    key: "setSize",
    value: function setSize(value) {
      this._size = value;
      return this;
    }
  }, {
    key: "setCharset",
    value: function setCharset(value) {
      this._charset = value;
      return this;
    }
  }, {
    key: "generateValue",
    value: function generateValue() {
      var value = '';

      for (var i = 0; i < this._size; i++) {
        value += this._charset.charAt(Math.floor(Math.random() * charset.length));
      }

      return value;
    }
  }]);

  return StringSeed;
}(_core_AbstractSeed__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/seedTypes/UuidSeed.js":
/*!***********************************!*\
  !*** ./src/seedTypes/UuidSeed.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UuidSeed; });
/* harmony import */ var _core_AbstractSeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AbstractSeed */ "./src/core/AbstractSeed.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UuidSeed =
/*#__PURE__*/
function (_AbstractSeed) {
  _inherits(UuidSeed, _AbstractSeed);

  function UuidSeed() {
    _classCallCheck(this, UuidSeed);

    return _possibleConstructorReturn(this, _getPrototypeOf(UuidSeed).apply(this, arguments));
  }

  _createClass(UuidSeed, [{
    key: "generateValue",
    value: function generateValue() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
  }]);

  return UuidSeed;
}(_core_AbstractSeed__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/utils/objectMap.js":
/*!********************************!*\
  !*** ./src/utils/objectMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (object, callback) {
  return Object.keys(object).reduce(function (result, propName, index) {
    return _objectSpread({}, result, _defineProperty({}, propName, callback(object[propName], propName, index, result)));
  }, {});
});

/***/ })

/******/ });
});
//# sourceMappingURL=jseeder.map