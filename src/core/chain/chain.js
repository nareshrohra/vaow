import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

export class Chain {
  constructor() {
    this.setChainStart(null);
  }

  isNotEmpty() {
    return (this.head !== null);
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  setChainStart(firstElement) {
    this.head = this.tail = firstElement;
  }

  addChainElement(chainElement) {
    if (Validator.isDefinedAndNotNull(chainElement)) {
      if (this.head) {
        this.appendToChain(chainElement);
      } else {
        this.setChainStart(chainElement);
      }
    } else {
      throw Locale.Error.InvalidArgChainElement;
    }
  }

  appendToChain(chainElement) {
    this.tail.setNextElement(chainElement);
    this.tail = chainElement;
  }

  translate(value) {
    if (Validator.isPositiveNumber(value)) {
      if (this.isNotEmpty()) {
        return this.head.translate(value);
      } else {
        throw Locale.Error.ChainEmpty;
      }
    } else {
      throw Locale.Error.InvalidArgPositiveNumberValue;
    }
  }
}
