import {
  TranslationResultFormatter
}
from '../../../../src/core/formatters/translation-result-formatter';

import {
  TranslationResult
}
from '../../../../src/core/types/translation-result';

let valueArgError = 'Invalid argument for "translationResult"';

describe('the TranslationResultFormatter class', () => {
  it('handles null value', () => {
    expect(x => TranslationResultFormatter.format(null)).toThrow(valueArgError);
  });

  it('handles undefined value', () => {
    let test = {};
    expect(x => TranslationResultFormatter.format(test.undefined)).toThrow(valueArgError);
  });

  it('formats TranslationResult with digit value', () => {
    let result = new TranslationResult();
    result.setDigitValue(100);
    expect(TranslationResultFormatter.format(result)).toBe('100');
  });

  it('formats TranslationResult with large digit value', () => {
    let result = new TranslationResult();
    result.setDigitValue(100000);
    expect(TranslationResultFormatter.format(result)).toBe('100,000');
  });

  it('formats TranslationResult with digit value and unit', () => {
    let result = new TranslationResult();
    result.setDigitValue(100);
    result.setUnit('feet');
    expect(TranslationResultFormatter.format(result)).toBe('100 feet');
  });

  it('formats TranslationResult with digit value, unit and a magnitude', () => {
    let result = new TranslationResult();
    result.setDigitValue(100);
    result.setUnit('feet');
    result.increaseByMagnitude('million');
    expect(TranslationResultFormatter.format(result)).toBe('100 million feet');
  });

  it('formats TranslationResult with digit value, unit and multiple magnitudes', () => {
    let result = new TranslationResult();
    result.setDigitValue(100);
    result.setUnit('feet');
    result.increaseByMagnitude('undecillion');
    result.increaseByMagnitude('million');
    expect(TranslationResultFormatter.format(result)).toBe('100 million undecillion feet');
  });
});
