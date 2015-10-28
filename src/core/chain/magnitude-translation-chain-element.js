import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

import {
  TranslationChainElement
}
from './translation-chain-element';

import {
  UnderflowElementTranslationResult,
  OverflowElementTranslationResult,
  IncompleteElementTranslationResult,
  ElementTranslationResult
}
from '../types/translation-result';

export class MagnitudeTranslationChainElement extends TranslationChainElement {
  translate(value) {
    let result = null;
    if (value === this.getValue()) {
      result = new ElementTranslationResult(this.getWord());
      return result;
    } else if (value < this.getValue()) {
      result = new UnderflowElementTranslationResult();
      result.setFactoredValue(value);
      return result;
    } else if (!this.nextElement) {
      result = new OverflowElementTranslationResult();
      result.setFactoredValue(value);
      return result;
    } else if (value < this.nextElement.getValue()) {
      result = new IncompleteElementTranslationResult(this.getWord());
      result.setRemainder(this.getRemainderWithBase(value));
      return result;
    } else {
      return this.nextElement.translate(value);
    }
  }

  factorWithCurrentBase(value) {
    let conversionFactor = this.getValue();
    conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
    return value / conversionFactor;
  }
}
