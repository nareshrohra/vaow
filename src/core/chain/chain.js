import {
  Validator
}
from '../../util/validator';

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
      throw 'Invalid argument for "chainElement"';
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
        throw 'Chain is empty';
      }
    } else {
      throw 'Invalid argument for "value". value should be a positive number';
    }
  }
}
