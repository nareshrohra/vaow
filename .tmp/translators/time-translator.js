define(['exports', './translator-helper', '../core/chain/circular-translation-chain', '../core/constants/time/units'], function (exports, _translatorHelper, _coreChainCircularTranslationChain, _coreConstantsTimeUnits) {
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
      value: function translate(number) {
        if (number && !isNaN(number)) {
          return this.translationChain.translate(Math.round(number));
        } else {
          throw new Error("number is invalid");
        }
      }
    }]);

    return TimeTranslator;
  })();

  exports.TimeTranslator = TimeTranslator;
});
//# sourceMappingURL=../translators/time-translator.js.map