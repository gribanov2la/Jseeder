!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dataSeeder=t():e.dataSeeder=t()}(global,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t.id}var t,n,o;return t=e,(n=[{key:"setId",value:function(e){return this.id=e,this}},{key:"hasId",value:function(){return void 0!==this.id}},{key:"generateValue",value:function(){return""}}])&&r(t.prototype,n),o&&r(t,o),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,a(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o),n=t,(r=[{key:"generateValue",value:function(){return"string-"+Math.random().toString(36).substring(7)}}])&&i(n.prototype,r),u&&i(n,u),t}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,b(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o),n=t,(r=[{key:"generateValue",value:function(){return"uuid-"+Math.random().toString(36).substring(7)}}])&&y(n.prototype,r),u&&y(n,u),t}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,S(t).call(this,e))).range=e.range||[],n}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o),n=t,(r=[{key:"setRange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.range=e,this}},{key:"generateValue",value:function(){return"range-"+this.range[Math.floor(Math.random()*this.range.length)]}}])&&m(n.prototype,r),u&&m(n,u),t}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"string",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new l(e)}},{key:"uuid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new d(e)}},{key:"range",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new _(e)}}],(n=null)&&w(t.prototype,n),r&&w(t,r),e}();function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e,t){return Object.keys(e).reduce(function(n,r,o){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){P(e,t,n[t])})}return e}({},n,P({},r,t(e[r],r,o,n)))},{})};function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.count=t,this.structure=n,this.parentProcessor=null,this.cachedSeedsValues={}}var t,n,r;return t=e,(n=[{key:"process",value:function(e){var t=this;return this._setParentProcessor(e),new Array(this.count).fill("").map(function(){return t._clearSeedCache(),t._processItem(t.structure)})}},{key:"_setParentProcessor",value:function(e){e instanceof this.constructor&&(this.parentProcessor=e)}},{key:"_processItem",value:function(e){var t=this;return k(e,function(e){return t._processProperty(e)})}},{key:"_processProperty",value:function(e){return e instanceof o?this._processSeed(e):e instanceof this.constructor?e.process(this):"object"===V(e)?this._processItem(e):e}},{key:"_processSeed",value:function(e){return e.hasId()?this._processSeedWithId(e):e.generateValue()}},{key:"_processSeedWithId",value:function(e){return this._checkCachedSeedValue(e.id)||this._setCachedSeedValue(e.id,e.generateValue()),this._getCachedSeedValue(e.id)}},{key:"_checkCachedSeedValue",value:function(e){return this.cachedSeedsValues.hasOwnProperty(e)||null!==this.parentProcessor&&this.parentProcessor._getCachedSeedValue(e)}},{key:"_getCachedSeedValue",value:function(e){return this.cachedSeedsValues.hasOwnProperty(e)?this.cachedSeedsValues[e]:null!==this.parentProcessor?this.parentProcessor._getCachedSeedValue(e):void 0}},{key:"_setCachedSeedValue",value:function(e,t){this.cachedSeedsValues[e]=t}},{key:"_clearSeedCache",value:function(){this.cachedSeedsValues={}}}])&&C(t.prototype,n),r&&C(t,r),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"seed",value:function(e,t){return new E(e,t).process()}},{key:"makeSubSeed",value:function(e,t){return new E(e,t)}},{key:"types",get:function(){return j}}],(n=null)&&x(t.prototype,n),r&&x(t,r),e}();t.default=T}])});