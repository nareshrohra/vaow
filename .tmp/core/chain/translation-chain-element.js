define(['exports', '../types/translation-result'], function (exports, _typesTranslationResult) {
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
});
//# sourceMappingURL=../../core/chain/translation-chain-element.js.map