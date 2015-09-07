import {
  TranslationResultFormatter
}
from '../formatters/translation-result-formatter';

import {
  Validator
}
from '../../util/validator';

export class TranslationResult {
  constructor() {
    this.digitValue = '0';
    this.unit = '';
    this.magnitudes = [];
  }

  setDigitValue(digitValue) {
    if (Validator.isDefinedAndNotNull(digitValue)) {
      this.digitValue = digitValue;
    } else {
      throw 'Invalid argument for "digitValue"';
    }
  }

  setUnit(unit) {
    if (Validator.isDefinedAndNotNull(unit)) {
      this.unit = unit;
    } else {
      throw 'Invalid argument for "unit"'
    }
  }

  increaseByMagnitude(magnitude) {
    if (Validator.isDefinedAndNotNull(magnitude)) {
      this.magnitudes.push(magnitude);
    } else {
      throw 'Invalid argument for "magnitude"';
    }
  }

  getUnit() {
    return this.unit;
  }

  getDigitValue() {
    return this.digitValue;
  }

  getMagnitudes() {
    return this.magnitudes;
  }

  toString() {
    return TranslationResultFormatter.format(this);
  }
}

export class ElementTranslationResult {
  constructor(digitValue, word) {
    this.validate(digitValue, word);

    this.digitValue = digitValue;
    this.word = word;
    this.overflow = false;
    this.underflow = false;
  }

  validate(digitValue, word) {
    if (!Validator.isNumber(digitValue)) {
      throw 'Invalid argument for "digitValue". value should be a number';
    }

    if (!Validator.isDefinedAndNotNull(word)) {
      throw 'Invalid argument for "word"';
    }
  }

  setOverflow() {
    this.overflow = true;
  }

  setUnderflow() {
    this.underflow = true;
  }

  isOverflow() {
    return this.overflow;
  }

  isUnderflow() {
    return this.underflow;
  }

  getWord() {
    return this.word;
  }

  getDigitValue() {
    return this.digitValue;
  }
}

export class OverflowElementTranslationResult extends ElementTranslationResult {
  constructor(digitValue, word) {
    super(digitValue, word);
    this.setOverflow();
  }
}

export class UnderflowElementTranslationResult extends ElementTranslationResult {
  constructor(digitValue, word) {
    super(digitValue, word);
    this.setUnderflow();
  }
}
