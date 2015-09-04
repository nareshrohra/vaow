define(['exports', '../core/formatters/digit-formatter'], function (exports, _coreFormattersDigitFormatter) {
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
});
//# sourceMappingURL=../translators/fallback-translator.js.map