import {
  UnderflowElementTranslationResult,
  OverflowElementTranslationResult,
  ElementTranslationResult
}
from '../types/translation-result';

export class TranslationChainElement {
  constructor(base) {
    this.translationBase = base;
    this.nextElement = null;
  }

  getValue() {
    return this.translationBase.getValue();
  }

  getWord() {
    return this.translationBase.getWord();
  }

  setNextElement(nextElement) {
    this.nextElement = nextElement;
  }

  translate(value) {
    if (value < this.getValue()) {
      return new UnderflowElementTranslationResult(value, this.getWord());
    } else if (!this.nextElement) {
      let factoredValue = this.factorWithCurrentBase(value);
      return new OverflowElementTranslationResult(factoredValue, this.getWord());
    } else if (value < this.nextElement.getValue()) {
      let factoredValue = this.factorWithCurrentBase(value);
      return new ElementTranslationResult(factoredValue, this.getWord());
    } else {
      return this.nextElement.translate(value);
    }
  }

  factorWithCurrentBase(value) {
    let conversionFactor = this.getValue();
    conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
    return Math.round(value / conversionFactor);
  }
}
