define(['exports', './digit-formatter'], function (exports, _digitFormatter) {
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
});
//# sourceMappingURL=../../core/formatters/translation-result-formatter.js.map