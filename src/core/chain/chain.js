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
    if (this.head) {
      this.appendToChain(chainElement);
    } else {
      this.setChainStart(chainElement);
    }
  }

  appendToChain(chainElement) {
    this.tail.setNextElement(chainElement);
    this.tail = chainElement;
  }

  translate(value) {
    if (this.head) {
      return this.head.translate(value);
    } else {
      throw "Chain is empty";
    }
  }
}
