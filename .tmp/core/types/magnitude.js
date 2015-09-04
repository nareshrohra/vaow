define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Magnitude = (function () {
    function Magnitude(word, value) {
      _classCallCheck(this, Magnitude);

      this.word = word;
      this.value = value;
    }

    _createClass(Magnitude, [{
      key: "getWord",
      value: function getWord() {
        return this.word;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.value;
      }
    }]);

    return Magnitude;
  })();

  exports.Magnitude = Magnitude;
});
//# sourceMappingURL=../../core/types/magnitude.js.map