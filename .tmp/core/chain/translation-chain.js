define(['exports', './chain', './translation-chain-element', '../../translators/fallback-translator', '../types/translation-result'], function (exports, _chain, _translationChainElement, _translatorsFallbackTranslator, _typesTranslationResult) {
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
        if (this.isUnitChainNotEmpty() || this.isMagnitudeChainNotEmpty()) {
          this.performTranslation();
          return this.finalResult.toString();
        } else {
          throw 'Units and/or magnitudes are not added';
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
});
//# sourceMappingURL=../../core/chain/translation-chain.js.map