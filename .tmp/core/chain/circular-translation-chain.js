define(['exports', './translation-chain'], function (exports, _translationChain) {
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
});
//# sourceMappingURL=../../core/chain/circular-translation-chain.js.map