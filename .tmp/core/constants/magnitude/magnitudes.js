define(['exports', '../../types/magnitude'], function (exports, _typesMagnitude) {
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
});
//# sourceMappingURL=../../../core/constants/magnitude/magnitudes.js.map