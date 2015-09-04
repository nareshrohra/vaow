define(['exports', '../../types/unit'], function (exports, _typesUnit) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Time = function Time() {
    _classCallCheck(this, Time);
  };

  exports.Time = Time;

  Time.Second = new _typesUnit.Unit('seconds', 0);
  Time.Minute = new _typesUnit.Unit('minutes', 60);
  Time.Hour = new _typesUnit.Unit('hours', Time.Minute.getValue() * 60);
  Time.Day = new _typesUnit.Unit('days', Time.Hour.getValue() * 24);
  Time.Month = new _typesUnit.Unit('months', Time.Day.getValue() * 30.43);
  Time.Year = new _typesUnit.Unit('years', Time.Day.getValue() * 365.24);
  Time.Decade = new _typesUnit.Unit('decades', Time.Year.getValue() * 10);
  Time.Century = new _typesUnit.Unit('centuries', Time.Year.getValue() * 100);
});
//# sourceMappingURL=../../../core/constants/time/units.js.map