define(['exports', './translator-helper', '../core/chain/circular-translation-chain'], function (exports, _translatorHelper, _coreChainCircularTranslationChain) {
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
        if (number && !isNaN(number)) {
          return this.translationChain.translate(Math.round(number));
        } else {
          throw new Error("number is invalid");
        }
      }
    }]);

    return NumberTranslator;
  })();

  exports.NumberTranslator = NumberTranslator;
});
//# sourceMappingURL=../translators/number-translator.js.map