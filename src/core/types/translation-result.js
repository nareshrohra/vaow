import {
  TranslationResultFormatter
}
from '../formatters/translation-result-formatter';

export class TranslationResult {
  constructor() {
    this.digitValue = 0;
    this.unit = '';
    this.magnitudes = [];
  }

  setDigitValue(digitValue) {
    this.digitValue = digitValue;
  }

  setUnit(unit) {
    this.unit = unit;
  }

  increaseByMagnitude(magnitude) {
    this.magnitudes.push(magnitude);
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
    this.digitValue = digitValue;
    this.word = word;
    this.overflow = false;
    this.underflow = false;
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
