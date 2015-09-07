import {
  TranslationResult,
  ElementTranslationResult,
  OverflowElementTranslationResult,
  UnderflowElementTranslationResult
}
from '../../../../src/core/types/translation-result';

let invalidArgDigitValueNumberError = 'Invalid argument for "digitValue". value should be a number';

let invalidArgDigitValueError = 'Invalid argument for "digitValue"';
let invalidArgUnitError = 'Invalid argument for "unit"';
let invalidArgMagnitudeError = 'Invalid argument for "magnitude"';
let invalidArgWordError = 'Invalid argument for "word"';

describe('the TranslationResult class', () => {
  it('handles null value for digitValue', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.setDigitValue(null)).toThrow(invalidArgDigitValueError);
  });

  it('handles undefined value for digitValue', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.setDigitValue(test.notDefined)).toThrow(invalidArgDigitValueError);
  });

  it('handles null value for unit', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.setUnit(null)).toThrow(invalidArgUnitError);
  });

  it('handles undefined value for unit', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.setUnit(test.notDefined)).toThrow(invalidArgUnitError);
  });

  it('handles null value for magnitude', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.increaseByMagnitude(null)).toThrow(invalidArgMagnitudeError);
  });

  it('handles undefined value for magnitude', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.increaseByMagnitude(test.notDefined)).toThrow(invalidArgMagnitudeError);
  });

  it('sets and gets digitValue', () => {
    let translationResult = new TranslationResult();
    translationResult.setDigitValue(100);
    expect(translationResult.getDigitValue()).toBe(100);
  });

  it('sets and gets unit', () => {
    let translationResult = new TranslationResult();
    translationResult.setUnit('feet');
    expect(translationResult.getUnit()).toBe('feet');
  });

  it('increases by a magnitude', () => {
    let translationResult = new TranslationResult();
    translationResult.increaseByMagnitude('million');
    expect(translationResult.getMagnitudes()).toEqual(['million']);
  });

  it('increases by multiple magnitudes', () => {
    let translationResult = new TranslationResult();
    translationResult.increaseByMagnitude('million');
    translationResult.increaseByMagnitude('billion');
    expect(translationResult.getMagnitudes()).toEqual(['million', 'billion']);
  });
});

describe('the ElementTranslationResult class', () => {
  it('handles null value for digitValue', () => {
    expect(x => new ElementTranslationResult(null, 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles undefined value for digitValue', () => {
    let test = {};
    expect(x => new ElementTranslationResult(test.notDefined, 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles string for digitValue', () => {
    expect(x => new ElementTranslationResult('a', 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles null for word', () => {
    expect(x => new ElementTranslationResult(10, null)).toThrow(invalidArgWordError);
  });

  it('handles undefined for word', () => {
    let test = {};
    expect(x => new ElementTranslationResult(10, test.notDefined)).toThrow(invalidArgWordError);
  });

  it('gets word', () => {
    let result = new ElementTranslationResult(10, 'feet');
    expect(result.getWord()).toBe('feet');
  });

  it('gets digitValue', () => {
    let result = new ElementTranslationResult(10, 'feet');
    expect(result.getDigitValue()).toBe(10);
  });

  it('constructs without overlow', () => {
    let result = new ElementTranslationResult(10, 'feet');
    expect(result.isOverflow()).toBe(false);
  });

  it('constructs without underflow', () => {
    let result = new ElementTranslationResult(10, 'feet');
    expect(result.isUnderflow()).toBe(false);
  });

  it('sets and gets overflow', () => {
    let result = new ElementTranslationResult(10, 'feet');
    result.setOverflow();
    expect(result.isOverflow()).toBe(true);
  });

  it('sets and gets underflow', () => {
    let result = new ElementTranslationResult(10, 'feet');
    result.setUnderflow();
    expect(result.isUnderflow()).toBe(true);
  });
});

describe('the OverflowElementTranslationResult class', () => {
  it('handles null value for digitValue', () => {
    expect(x => new OverflowElementTranslationResult(null, 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles undefined value for digitValue', () => {
    let test = {};
    expect(x => new OverflowElementTranslationResult(test.notDefined, 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles string for digitValue', () => {
    expect(x => new OverflowElementTranslationResult('a', 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles null for word', () => {
    expect(x => new OverflowElementTranslationResult(10, null)).toThrow(invalidArgWordError);
  });

  it('handles undefined for word', () => {
    let test = {};
    expect(x => new OverflowElementTranslationResult(10, test.notDefined)).toThrow(invalidArgWordError);
  });

  it('gets word', () => {
    let result = new OverflowElementTranslationResult(10, 'feet');
    expect(result.getWord()).toBe('feet');
  });

  it('gets digitValue', () => {
    let result = new OverflowElementTranslationResult(10, 'feet');
    expect(result.getDigitValue()).toBe(10);
  });

  it('constructs with overlow', () => {
    let result = new OverflowElementTranslationResult(10, 'feet');
    expect(result.isOverflow()).toBe(true);
  });

  it('constructs without underflow', () => {
    let result = new OverflowElementTranslationResult(10, 'feet');
    expect(result.isUnderflow()).toBe(false);
  });

  it('sets and gets overflow', () => {
    let result = new OverflowElementTranslationResult(10, 'feet');
    result.setOverflow();
    expect(result.isOverflow()).toBe(true);
  });

  it('sets and gets underflow', () => {
    let result = new OverflowElementTranslationResult(10, 'feet');
    result.setUnderflow();
    expect(result.isUnderflow()).toBe(true);
  });
});

describe('the UnderflowElementTranslationResult class', () => {
  it('handles null value for digitValue', () => {
    expect(x => new UnderflowElementTranslationResult(null, 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles undefined value for digitValue', () => {
    let test = {};
    expect(x => new UnderflowElementTranslationResult(test.notDefined, 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles string for digitValue', () => {
    expect(x => new UnderflowElementTranslationResult('a', 'unit')).toThrow(invalidArgDigitValueNumberError);
  });

  it('handles null for word', () => {
    expect(x => new UnderflowElementTranslationResult(10, null)).toThrow(invalidArgWordError);
  });

  it('handles undefined for word', () => {
    let test = {};
    expect(x => new UnderflowElementTranslationResult(10, test.notDefined)).toThrow(invalidArgWordError);
  });

  it('gets word', () => {
    let result = new UnderflowElementTranslationResult(10, 'feet');
    expect(result.getWord()).toBe('feet');
  });

  it('gets digitValue', () => {
    let result = new UnderflowElementTranslationResult(10, 'feet');
    expect(result.getDigitValue()).toBe(10);
  });

  it('constructs without overlow', () => {
    let result = new UnderflowElementTranslationResult(10, 'feet');
    expect(result.isOverflow()).toBe(false);
  });

  it('constructs with underflow', () => {
    let result = new UnderflowElementTranslationResult(10, 'feet');
    expect(result.isUnderflow()).toBe(true);
  });

  it('sets and gets overflow', () => {
    let result = new UnderflowElementTranslationResult(10, 'feet');
    result.setOverflow();
    expect(result.isOverflow()).toBe(true);
  });

  it('sets and gets underflow', () => {
    let result = new UnderflowElementTranslationResult(10, 'feet');
    result.setUnderflow();
    expect(result.isUnderflow()).toBe(true);
  });
});
