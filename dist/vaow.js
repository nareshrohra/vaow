/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  //TODO: Fix this hack
	  'use strict';

	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2), __webpack_require__(8), __webpack_require__(3), __webpack_require__(9), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (chain, translationChain, circularTranslationChain, translationChainElement, numberTranslator, timeTranslator) {
	    window.vaow = {
	      Chain: chain.Chain,
	      TranslationChain: translationChain.TranslationChain,
	      CircularTranslationChain: circularTranslationChain.CircularTranslationChain,
	      TranslationChainElement: translationChainElement.TranslationChainElement,
	      NumberTranslator: numberTranslator.NumberTranslator,
	      TimeTranslator: timeTranslator.TimeTranslator
	    };
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=index.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  var Chain = (function () {
	    function Chain() {
	      _classCallCheck(this, Chain);

	      this.setChainStart(null);
	    }

	    _createClass(Chain, [{
	      key: "isNotEmpty",
	      value: function isNotEmpty() {
	        return this.head !== null;
	      }
	    }, {
	      key: "getHead",
	      value: function getHead() {
	        return this.head;
	      }
	    }, {
	      key: "getTail",
	      value: function getTail() {
	        return this.tail;
	      }
	    }, {
	      key: "setChainStart",
	      value: function setChainStart(firstElement) {
	        this.head = this.tail = firstElement;
	      }
	    }, {
	      key: "addChainElement",
	      value: function addChainElement(chainElement) {
	        if (this.head) {
	          this.appendToChain(chainElement);
	        } else {
	          this.setChainStart(chainElement);
	        }
	      }
	    }, {
	      key: "appendToChain",
	      value: function appendToChain(chainElement) {
	        this.tail.setNextElement(chainElement);
	        this.tail = chainElement;
	      }
	    }, {
	      key: "translate",
	      value: function translate(value) {
	        if (this.isNotEmpty()) {
	          return this.head.translate(value);
	        } else {
	          throw "Chain is empty";
	        }
	      }
	    }]);

	    return Chain;
	  })();

	  exports.Chain = Chain;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/chain.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(7), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _chain, _translationChainElement, _translatorsFallbackTranslator, _typesTranslationResult) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationChain = (function () {
	    function TranslationChain(fallbackTranslator) {
	      _classCallCheck(this, TranslationChain);

	      this.unitChain = new _chain.Chain();
	      this.magnitudeChain = new _chain.Chain();
	      this.finalResult = null;
	      this.currentValue = null;
	      this.fallbackTranslator = fallbackTranslator || new _translatorsFallbackTranslator.FallbackTranslator();
	    }

	    _createClass(TranslationChain, [{
	      key: 'addUnit',
	      value: function addUnit(unit) {
	        this.unitChain.addChainElement(new _translationChainElement.TranslationChainElement(unit));
	      }
	    }, {
	      key: 'addMagnitude',
	      value: function addMagnitude(magnitude) {
	        this.magnitudeChain.addChainElement(new _translationChainElement.TranslationChainElement(magnitude));
	      }
	    }, {
	      key: 'isUnitChainNotEmpty',
	      value: function isUnitChainNotEmpty() {
	        return this.unitChain.isNotEmpty();
	      }
	    }, {
	      key: 'isMagnitudeChainNotEmpty',
	      value: function isMagnitudeChainNotEmpty() {
	        return this.magnitudeChain.isNotEmpty();
	      }
	    }, {
	      key: 'translate',
	      value: function translate(value) {
	        this.currentValue = value;
	        if (value && !isNaN(value) && value >= 0) {
	          if (this.isUnitChainNotEmpty() || this.isMagnitudeChainNotEmpty()) {
	            this.performTranslation();
	            return this.finalResult.toString();
	          } else {
	            throw 'Units and/or magnitudes are not added';
	          }
	        } else {
	          throw '${value} is not valid. Translation supported only for positive values';
	        }
	      }
	    }, {
	      key: 'performTranslation',
	      value: function performTranslation() {
	        this.finalResult = new _typesTranslationResult.TranslationResult();
	        if (this.isUnitChainNotEmpty()) {
	          this.performUnitAndMagnitudeTranslation();
	        } else {
	          this.performMagnitudeTranslation();
	        }
	      }
	    }, {
	      key: 'performUnitAndMagnitudeTranslation',
	      value: function performUnitAndMagnitudeTranslation(isMagnitudeChainEmpty) {
	        //TODO: refactor
	        var result = this.unitChain.translate(this.currentValue);
	        if (result.isOverflow()) {
	          this.finalResult.setUnit(result.getWord());
	          this.currentValue = result.getDigitValue();
	          if (this.isMagnitudeChainNotEmpty()) {
	            this.performMagnitudeTranslation();
	          } else {
	            this.performFallbackTranslation();
	          }
	        } else if (result.isUnderflow()) {
	          this.finalResult.setDigitValue(result.getDigitValue());
	        } else {
	          this.finalResult.setUnit(result.getWord());
	          this.finalResult.setDigitValue(result.getDigitValue());
	        }
	      }
	    }, {
	      key: 'performMagnitudeTranslation',
	      value: function performMagnitudeTranslation() {
	        //TODO: refactor
	        var result = this.magnitudeChain.translate(this.currentValue);
	        if (result.isOverflow()) {
	          this.finalResult.increaseByMagnitude(result.getWord());
	          this.currentValue = result.getDigitValue();
	          this.performFallbackTranslation();
	        } else if (result.isUnderflow()) {
	          this.finalResult.setDigitValue(result.getDigitValue());
	        } else {
	          this.finalResult.setDigitValue(result.getDigitValue());
	          this.finalResult.increaseByMagnitude(result.getWord());
	        }
	      }
	    }, {
	      key: 'performFallbackTranslation',
	      value: function performFallbackTranslation(value) {
	        var result = this.fallbackTranslator.translate(this.currentValue);
	        this.finalResult.setDigitValue(result.digitValue);
	      }
	    }]);

	    return TranslationChain;
	  })();

	  exports.TranslationChain = TranslationChain;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/translation-chain.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _typesTranslationResult) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationChainElement = (function () {
	    function TranslationChainElement(base) {
	      _classCallCheck(this, TranslationChainElement);

	      this.translationBase = base;
	      this.nextElement = null;
	    }

	    _createClass(TranslationChainElement, [{
	      key: 'getValue',
	      value: function getValue() {
	        return this.translationBase.getValue();
	      }
	    }, {
	      key: 'getWord',
	      value: function getWord() {
	        return this.translationBase.getWord();
	      }
	    }, {
	      key: 'setNextElement',
	      value: function setNextElement(nextElement) {
	        this.nextElement = nextElement;
	      }
	    }, {
	      key: 'translate',
	      value: function translate(value) {
	        if (value < this.getValue()) {
	          return new _typesTranslationResult.UnderflowElementTranslationResult(value, this.getWord());
	        } else if (!this.nextElement) {
	          var factoredValue = this.factorWithCurrentBase(value);
	          return new _typesTranslationResult.OverflowElementTranslationResult(factoredValue, this.getWord());
	        } else if (value < this.nextElement.getValue()) {
	          var factoredValue = this.factorWithCurrentBase(value);
	          return new _typesTranslationResult.ElementTranslationResult(factoredValue, this.getWord());
	        } else {
	          return this.nextElement.translate(value);
	        }
	      }
	    }, {
	      key: 'factorWithCurrentBase',
	      value: function factorWithCurrentBase(value) {
	        var conversionFactor = this.getValue();
	        conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
	        return Math.round(value / conversionFactor);
	      }
	    }]);

	    return TranslationChainElement;
	  })();

	  exports.TranslationChainElement = TranslationChainElement;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/translation-chain-element.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _formattersTranslationResultFormatter) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationResult = (function () {
	    function TranslationResult() {
	      _classCallCheck(this, TranslationResult);

	      this.digitValue = 0;
	      this.unit = '';
	      this.magnitudes = [];
	    }

	    _createClass(TranslationResult, [{
	      key: 'setDigitValue',
	      value: function setDigitValue(digitValue) {
	        this.digitValue = digitValue;
	      }
	    }, {
	      key: 'setUnit',
	      value: function setUnit(unit) {
	        this.unit = unit;
	      }
	    }, {
	      key: 'increaseByMagnitude',
	      value: function increaseByMagnitude(magnitude) {
	        this.magnitudes.push(magnitude);
	      }
	    }, {
	      key: 'getUnit',
	      value: function getUnit() {
	        return this.unit;
	      }
	    }, {
	      key: 'getDigitValue',
	      value: function getDigitValue() {
	        return this.digitValue;
	      }
	    }, {
	      key: 'getMagnitudes',
	      value: function getMagnitudes() {
	        return this.magnitudes;
	      }
	    }, {
	      key: 'toString',
	      value: function toString() {
	        return _formattersTranslationResultFormatter.TranslationResultFormatter.format(this);
	      }
	    }]);

	    return TranslationResult;
	  })();

	  exports.TranslationResult = TranslationResult;

	  var ElementTranslationResult = (function () {
	    function ElementTranslationResult(digitValue, word) {
	      _classCallCheck(this, ElementTranslationResult);

	      this.digitValue = digitValue;
	      this.word = word;
	      this.overflow = false;
	      this.underflow = false;
	    }

	    _createClass(ElementTranslationResult, [{
	      key: 'setOverflow',
	      value: function setOverflow() {
	        this.overflow = true;
	      }
	    }, {
	      key: 'setUnderflow',
	      value: function setUnderflow() {
	        this.underflow = true;
	      }
	    }, {
	      key: 'isOverflow',
	      value: function isOverflow() {
	        return this.overflow;
	      }
	    }, {
	      key: 'isUnderflow',
	      value: function isUnderflow() {
	        return this.underflow;
	      }
	    }, {
	      key: 'getWord',
	      value: function getWord() {
	        return this.word;
	      }
	    }, {
	      key: 'getDigitValue',
	      value: function getDigitValue() {
	        return this.digitValue;
	      }
	    }]);

	    return ElementTranslationResult;
	  })();

	  exports.ElementTranslationResult = ElementTranslationResult;

	  var OverflowElementTranslationResult = (function (_ElementTranslationResult) {
	    _inherits(OverflowElementTranslationResult, _ElementTranslationResult);

	    function OverflowElementTranslationResult(digitValue, word) {
	      _classCallCheck(this, OverflowElementTranslationResult);

	      _get(Object.getPrototypeOf(OverflowElementTranslationResult.prototype), 'constructor', this).call(this, digitValue, word);
	      this.setOverflow();
	    }

	    return OverflowElementTranslationResult;
	  })(ElementTranslationResult);

	  exports.OverflowElementTranslationResult = OverflowElementTranslationResult;

	  var UnderflowElementTranslationResult = (function (_ElementTranslationResult2) {
	    _inherits(UnderflowElementTranslationResult, _ElementTranslationResult2);

	    function UnderflowElementTranslationResult(digitValue, word) {
	      _classCallCheck(this, UnderflowElementTranslationResult);

	      _get(Object.getPrototypeOf(UnderflowElementTranslationResult.prototype), 'constructor', this).call(this, digitValue, word);
	      this.setUnderflow();
	    }

	    return UnderflowElementTranslationResult;
	  })(ElementTranslationResult);

	  exports.UnderflowElementTranslationResult = UnderflowElementTranslationResult;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/types/translation-result.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _digitFormatter) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationResultFormatter = (function () {
	    function TranslationResultFormatter() {
	      _classCallCheck(this, TranslationResultFormatter);
	    }

	    _createClass(TranslationResultFormatter, null, [{
	      key: 'format',
	      value: function format(translationResult) {
	        var digitValue = translationResult.getDigitValue(),
	            unit = translationResult.getUnit(),
	            magnitudes = translationResult.getMagnitudes();

	        return _digitFormatter.DigitFormatter.format(digitValue) + (magnitudes.length > 0 ? ' ' + magnitudes.reverse().join(' ') : '') + (unit ? ' ' + unit : '');
	      }
	    }]);

	    return TranslationResultFormatter;
	  })();

	  exports.TranslationResultFormatter = TranslationResultFormatter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/formatters/translation-result-formatter.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  var DigitFormatter = (function () {
	    function DigitFormatter() {
	      _classCallCheck(this, DigitFormatter);
	    }

	    _createClass(DigitFormatter, null, [{
	      key: "format",
	      value: function format(value) {
	        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	      }
	    }]);

	    return DigitFormatter;
	  })();

	  exports.DigitFormatter = DigitFormatter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/formatters/digit-formatter.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _coreFormattersDigitFormatter) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var FallbackTranslator = (function () {
	    function FallbackTranslator() {
	      _classCallCheck(this, FallbackTranslator);
	    }

	    _createClass(FallbackTranslator, null, [{
	      key: 'translate',
	      value: function translate(value) {
	        var translatedValue = value.toString();
	        var mantissa = this.getMantissa(translatedValue),
	            exponent = this.getExponent(translatedValue);
	        return _coreFormattersDigitFormatter.DigitFormatter.format(mantissa) + (exponent > 1 ? ' X 10^' + exponent : '');
	      }
	    }, {
	      key: 'getExponent',
	      value: function getExponent(translatedValue) {
	        return translatedValue.substring(translatedValue.indexOf("+") + 1);
	      }
	    }, {
	      key: 'getMantissa',
	      value: function getMantissa(translatedValue) {
	        var decimalPosition = translatedValue.indexOf('.');
	        return translatedValue;
	      }
	    }]);

	    return FallbackTranslator;
	  })();

	  exports.FallbackTranslator = FallbackTranslator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/fallback-translator.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translationChain) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var CircularTranslationChain = (function (_TranslationChain) {
	    _inherits(CircularTranslationChain, _TranslationChain);

	    function CircularTranslationChain(fallbackTranslator) {
	      _classCallCheck(this, CircularTranslationChain);

	      _get(Object.getPrototypeOf(CircularTranslationChain.prototype), 'constructor', this).call(this, fallbackTranslator);
	    }

	    _createClass(CircularTranslationChain, [{
	      key: 'performMagnitudeTranslation',
	      value: function performMagnitudeTranslation() {
	        //TODO: refactor
	        var result = this.magnitudeChain.translate(this.currentValue);
	        if (result.isOverflow()) {
	          this.finalResult.increaseByMagnitude(result.getWord());
	          this.currentValue = result.getDigitValue();
	          this.performMagnitudeTranslation();
	        } else if (result.isUnderflow()) {
	          this.finalResult.setDigitValue(result.getDigitValue());
	        } else {
	          this.finalResult.setDigitValue(result.getDigitValue());
	          this.finalResult.increaseByMagnitude(result.getWord());
	        }
	      }
	    }]);

	    return CircularTranslationChain;
	  })(_translationChain.TranslationChain);

	  exports.CircularTranslationChain = CircularTranslationChain;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/circular-translation-chain.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translatorHelper, _coreChainCircularTranslationChain) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var NumberTranslator = (function () {
	    _createClass(NumberTranslator, null, [{
	      key: 'getInstance',
	      value: function getInstance() {
	        if (!NumberTranslator.instance) {
	          NumberTranslator.instance = new NumberTranslator();
	        }
	        return NumberTranslator.instance;
	      }
	    }]);

	    function NumberTranslator() {
	      _classCallCheck(this, NumberTranslator);

	      this.translationChain = new _coreChainCircularTranslationChain.CircularTranslationChain();
	      this.constructChain();
	    }

	    _createClass(NumberTranslator, [{
	      key: 'constructChain',
	      value: function constructChain() {
	        _translatorHelper.TranslatorHelper.addMagnitudes(this.translationChain);
	      }
	    }, {
	      key: 'translate',
	      value: function translate(number) {
	        return this.translationChain.translate(number);
	      }
	    }]);

	    return NumberTranslator;
	  })();

	  exports.NumberTranslator = NumberTranslator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/number-translator.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _coreConstantsMagnitudeMagnitudes) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslatorHelper = (function () {
	    function TranslatorHelper() {
	      _classCallCheck(this, TranslatorHelper);
	    }

	    _createClass(TranslatorHelper, null, [{
	      key: 'addMagnitudes',
	      value: function addMagnitudes(translationChain) {
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Million);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Billion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Trillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Quadrillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Quintillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Sextillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Septillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Octillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Nonillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Decillion);
	        translationChain.addMagnitude(_coreConstantsMagnitudeMagnitudes.Magnitudes.Undecillion);
	      }
	    }]);

	    return TranslatorHelper;
	  })();

	  exports.TranslatorHelper = TranslatorHelper;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/translator-helper.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _typesMagnitude) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Magnitudes = function Magnitudes() {
	    _classCallCheck(this, Magnitudes);
	  };

	  exports.Magnitudes = Magnitudes;

	  Magnitudes.Unit = new _typesMagnitude.Magnitude('', 0);
	  Magnitudes.Million = new _typesMagnitude.Magnitude('million', Math.pow(10, 6));
	  Magnitudes.Billion = new _typesMagnitude.Magnitude('billion', Math.pow(10, 9));
	  Magnitudes.Trillion = new _typesMagnitude.Magnitude('trillion', Math.pow(10, 12));
	  Magnitudes.Quadrillion = new _typesMagnitude.Magnitude('quadrillion', Math.pow(10, 15));
	  Magnitudes.Quintillion = new _typesMagnitude.Magnitude('quintillion', Math.pow(10, 18));
	  Magnitudes.Sextillion = new _typesMagnitude.Magnitude('sextillion', Math.pow(10, 21));
	  Magnitudes.Septillion = new _typesMagnitude.Magnitude('septillion', Math.pow(10, 24));
	  Magnitudes.Octillion = new _typesMagnitude.Magnitude('octillion', Math.pow(10, 27));
	  Magnitudes.Nonillion = new _typesMagnitude.Magnitude('nonillion', Math.pow(10, 30));
	  Magnitudes.Decillion = new _typesMagnitude.Magnitude('decillion', Math.pow(10, 33));
	  Magnitudes.Undecillion = new _typesMagnitude.Magnitude('undecillion', Math.pow(10, 36));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/magnitude/magnitudes.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  var Magnitude = (function () {
	    function Magnitude(word, value) {
	      _classCallCheck(this, Magnitude);

	      this.word = word;
	      this.value = value;
	    }

	    _createClass(Magnitude, [{
	      key: "getWord",
	      value: function getWord() {
	        return this.word;
	      }
	    }, {
	      key: "getValue",
	      value: function getValue() {
	        return this.value;
	      }
	    }]);

	    return Magnitude;
	  })();

	  exports.Magnitude = Magnitude;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/types/magnitude.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translatorHelper, _coreChainCircularTranslationChain, _coreConstantsTimeUnits) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TimeTranslator = (function () {
	    _createClass(TimeTranslator, null, [{
	      key: 'getInstance',
	      value: function getInstance() {
	        if (!TimeTranslator.instance) {
	          TimeTranslator.instance = new TimeTranslator();
	        }
	        return TimeTranslator.instance;
	      }
	    }]);

	    function TimeTranslator() {
	      _classCallCheck(this, TimeTranslator);

	      this.translationChain = new _coreChainCircularTranslationChain.CircularTranslationChain();
	      this.constructChain();
	    }

	    _createClass(TimeTranslator, [{
	      key: 'constructChain',
	      value: function constructChain() {
	        this.addTimeChainElements();
	        _translatorHelper.TranslatorHelper.addMagnitudes(this.translationChain);
	      }
	    }, {
	      key: 'addTimeChainElements',
	      value: function addTimeChainElements() {
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Second);
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Minute);
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Hour);
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Day);
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Month);
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Year);
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Decade);
	        this.translationChain.addUnit(_coreConstantsTimeUnits.Time.Century);
	      }
	    }, {
	      key: 'translate',
	      value: function translate(time) {
	        return this.translationChain.translate(time);
	      }
	    }]);

	    return TimeTranslator;
	  })();

	  exports.TimeTranslator = TimeTranslator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/time-translator.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _typesUnit) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Time = function Time() {
	    _classCallCheck(this, Time);
	  };

	  exports.Time = Time;

	  Time.Second = new _typesUnit.Unit('seconds', 0);
	  Time.Minute = new _typesUnit.Unit('minutes', 60);
	  Time.Hour = new _typesUnit.Unit('hours', Time.Minute.getValue() * 60);
	  Time.Day = new _typesUnit.Unit('days', Time.Hour.getValue() * 24);
	  Time.Month = new _typesUnit.Unit('months', Time.Day.getValue() * 30.43);
	  Time.Year = new _typesUnit.Unit('years', Time.Day.getValue() * 365.24);
	  Time.Decade = new _typesUnit.Unit('decades', Time.Year.getValue() * 10);
	  Time.Century = new _typesUnit.Unit('centuries', Time.Year.getValue() * 100);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/time/units.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  var Unit = (function () {
	    function Unit(word, value) {
	      _classCallCheck(this, Unit);

	      this.word = word;
	      this.value = value;
	    }

	    _createClass(Unit, [{
	      key: "getWord",
	      value: function getWord() {
	        return this.word;
	      }
	    }, {
	      key: "getValue",
	      value: function getValue() {
	        return this.value;
	      }
	    }]);

	    return Unit;
	  })();

	  exports.Unit = Unit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/types/unit.js.map

/***/ }
/******/ ]);