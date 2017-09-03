import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

import {
  TranslationResultFormatter
}
from '../formatters/translation-result-formatter';

class TranslationResultBase {
  _factoredValue = 0;
  _remainder = 0;

  setRemainder(remainder) {
    if (Validator.isPositiveNumber(remainder)) {
      this._remainder = remainder;
    } else {
      throw Locale.Error.InvalidArgRemainder;
    }
  }

  getRemainder() {
    return this._remainder;
  }

  setFactoredValue(factoredValue) {
    if (Validator.isNumber(factoredValue)) {
      this._factoredValue = factoredValue;
    } else {
      throw Locale.Error.InvalidArgFactoredValue;
    }
  }

  getFactoredValue() {
    return this._factoredValue;
  }
}

export class TranslationResult extends TranslationResultBase {
  _unit = null;
  _magnitudes = [];
  _orderOfMagnitudes = [];

  setUnit(unit) {
    if (Validator.isDefinedAndNotNull(unit)) {
      this._unit = unit;
    } else {
      throw Locale.Error.InvalidArgUnit;
    }
  }

  getUnit() {
    return this._unit;
  }

  increaseByMagnitude(magnitude) {
    if (Validator.isDefinedAndNotNull(magnitude)) {
      if (magnitude !== '') {
        this._magnitudes.push(magnitude);
      }
    } else {
      throw Locale.Error.InvalidArgMagnitude;
    }
  }

  getMagnitudes() {
    return this._magnitudes;
  }

  increaseByOrderOfMagnitude(orderOfMagnitude) {
    if (Validator.isDefinedAndNotNull(orderOfMagnitude)) {
      if (orderOfMagnitude !== '') {
        this._orderOfMagnitudes.push(orderOfMagnitude);
      }
    } else {
      throw Locale.Error.InvalidArgOrderOfMagnitude;
    }
  }

  getOrderOfMagnitudes() {
    return this._orderOfMagnitudes;
  }

  applyElementTranslationResult(elementResult) {
    if (Validator.isDefinedAndNotNull(elementResult)) {
      let remainder = elementResult.getRemainder(),
        factoredValue = elementResult.getFactoredValue();
      if (Validator.isNonZeroPositiveNumber(remainder)) {
        this.setRemainder(remainder);
      }

      if (Validator.isNumber(factoredValue)) {
        this.setFactoredValue(factoredValue);
      }
    } else {
      throw Locale.Error.InvalidArgElementResult;
    }
  }

  applyElementTranslationResultAsUnit(elementResult) {
    if (Validator.isDefinedAndNotNull(elementResult)) {
      this.applyElementTranslationResult(elementResult);
      this.setUnit(elementResult.getWord());
    } else {
      throw Locale.Error.InvalidArgElementResult;
    }
  }

  applyElementTranslationResultAsMagnitude(elementResult) {
    if (Validator.isDefinedAndNotNull(elementResult)) {
      this.applyElementTranslationResult(elementResult);
      this.increaseByMagnitude(elementResult.getWord());
    } else {
      throw Locale.Error.InvalidArgElementResult;
    }
  }

  applyElementTranslationResultAsOrderOfMagnitude(elementResult) {
    if (Validator.isDefinedAndNotNull(elementResult)) {
      //elementResult.getRemainder() === 3 && console.log('applyElementTranslationResultAsOrderOfMagnitude', 'before', elementResult);
      this.applyElementTranslationResult(elementResult);
      this.increaseByOrderOfMagnitude(elementResult.getWord());
      //elementResult.getRemainder() === 3 && console.log('applyElementTranslationResultAsOrderOfMagnitude', 'after', elementResult);
    } else {
      throw Locale.Error.InvalidArgElementResult;
    }
  }

  toString() {
    return TranslationResultFormatter.format(this);
  }
}

export class ElementTranslationResult extends TranslationResultBase {
  _overflow = false;
  _underflow = false;
  _incomplete = false;
  _word = '';

  constructor(word) {
    if (Validator.isDefinedAndNotNull(word)) {
      super();
      this._word = word;
    } else {
      throw Locale.Error.InvalidArgWord;
    }
  }

  getWord() {
    return this._word;
  }


  setIncomplete() {
    this._incomplete = true;
  }

  isIncomplete() {
    return this._incomplete;
  }

  setOverflow() {
    this._overflow = true;
  }

  isOverflow() {
    return this._overflow;
  }

  setUnderflow() {
    this._underflow = true;
  }

  isUnderflow() {
    return this._underflow;
  }
}

export class OverflowElementTranslationResult extends ElementTranslationResult {
  constructor(word) {
    super(word || '');
    this.setOverflow();
  }
}

export class UnderflowElementTranslationResult extends ElementTranslationResult {
  constructor(word) {
    super(word || '');
    this.setUnderflow();
  }
}

export class IncompleteElementTranslationResult extends ElementTranslationResult {
  constructor(word) {
    super(word || '');
    this.setIncomplete();
  }
}
