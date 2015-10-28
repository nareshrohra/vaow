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
    let result = null;
    if (value < this.getValue()) {
      result = new UnderflowElementTranslationResult();
      result.setFactoredValue(value);
      return result;
    } else if (!this.nextElement) {
      result = new OverflowElementTranslationResult(this.getWord());
      result.setFactoredValue(this.factorWithBase(value));
      result.setRemainder(this.getRemainderWithBase(value));
      return result;
    } else if (value < this.nextElement.getValue()) {
      result = new ElementTranslationResult(this.getWord());
      result.setFactoredValue(this.factorWithBase(value));
      result.setRemainder(this.getRemainderWithBase(value));
      return result;
    } else {
      return this.nextElement.translate(value);
    }
  }

  factorWithBase(value) {
    let conversionFactor = this.getValue();
    conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
    return value / conversionFactor;
  }

  getRemainderWithBase(value) {
    let conversionFactor = this.getValue();
    conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
    return value % conversionFactor;
  }
}
