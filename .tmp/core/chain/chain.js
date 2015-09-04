define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Chain = (function () {
    function Chain() {
      _classCallCheck(this, Chain);

      this.setChainStart(null);
    }

    _createClass(Chain, [{
      key: "isNotEmpty",
      value: function isNotEmpty() {
        return this.head !== null;
      }
    }, {
      key: "getHead",
      value: function getHead() {
        return this.head;
      }
    }, {
      key: "getTail",
      value: function getTail() {
        return this.tail;
      }
    }, {
      key: "setChainStart",
      value: function setChainStart(firstElement) {
        this.head = this.tail = firstElement;
      }
    }, {
      key: "addChainElement",
      value: function addChainElement(chainElement) {
        if (this.head) {
          this.appendToChain(chainElement);
        } else {
          this.setChainStart(chainElement);
        }
      }
    }, {
      key: "appendToChain",
      value: function appendToChain(chainElement) {
        this.tail.setNextElement(chainElement);
        this.tail = chainElement;
      }
    }, {
      key: "translate",
      value: function translate(value) {
        if (this.isNotEmpty()) {
          return this.head.translate(value);
        } else {
          throw "Chain is empty";
        }
      }
    }]);

    return Chain;
  })();

  exports.Chain = Chain;
});
//# sourceMappingURL=../../core/chain/chain.js.map