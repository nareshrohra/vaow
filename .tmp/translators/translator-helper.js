define(['exports', '../core/constants/magnitude/magnitudes'], function (exports, _coreConstantsMagnitudeMagnitudes) {
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
});
//# sourceMappingURL=../translators/translator-helper.js.map