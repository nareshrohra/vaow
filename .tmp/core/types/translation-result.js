define(['exports', '../formatters/translation-result-formatter'], function (exports, _formattersTranslationResultFormatter) {
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
});
//# sourceMappingURL=../../core/types/translation-result.js.map