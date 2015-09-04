define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var DigitFormatter = (function () {
    function DigitFormatter() {
      _classCallCheck(this, DigitFormatter);
    }

    _createClass(DigitFormatter, null, [{
      key: "format",
      value: function format(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }]);

    return DigitFormatter;
  })();

  exports.DigitFormatter = DigitFormatter;
});
//# sourceMappingURL=../../core/formatters/digit-formatter.js.map