import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

import {
  UnderflowElementTranslationResult,
  OverflowElementTranslationResult,
  ElementTranslationResult
}
from '../types/translation-result';

export class TranslationChainElement {
  constructor(base) {
    if (Validator.isDefinedAndNotNull(base)) {
      this.translationBase = base;
      this.nextElement = null;
    } else {
      throw Locale.Error.InvalidArgBase;
    }
  }

  getValue() {
    return this.translationBase.getValue();
  }

  getWord() {
    return this.translationBase.getWord();
  }

  setNextElement(nextElement) {
    if (Validator.isDefinedAndNotNull(nextElement)) {
      this.nextElement = nextElement;
    } else {
      throw Locale.Error.InvalidArgNextElement;
    }
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
