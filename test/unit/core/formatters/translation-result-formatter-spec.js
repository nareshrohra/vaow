import {
  Locale
}
from '../../../../src/locale';

import {
  TranslationResultFormatter
}
from '../../../../src/core/formatters/translation-result-formatter';

import {
  TranslationResult
}
from '../../../../src/core/types/translation-result';

describe('the TranslationResultFormatter class', () => {
  it('handles null value', () => {
    expect(x => TranslationResultFormatter.format(null)).toThrow(Locale.Error.InvalidArgTranslationResult);
  });

  it('handles undefined value', () => {
    let test = {};
    expect(x => TranslationResultFormatter.format(test.undefined)).toThrow(Locale.Error.InvalidArgTranslationResult);
  });

  it('formats TranslationResult with digit value', () => {
    let result = new TranslationResult();
    result.setFactoredValue(100);
    expect(TranslationResultFormatter.format(result)).toBe('100');
  });

  it('formats TranslationResult with large digit value', () => {
    let result = new TranslationResult();
    result.setFactoredValue(100000);
    expect(TranslationResultFormatter.format(result)).toBe('100,000');
  });

  it('formats TranslationResult with digit value and unit', () => {
    let result = new TranslationResult();
    result.setFactoredValue(100);
    result.setUnit('feet');
    expect(TranslationResultFormatter.format(result)).toBe('100 feet');
  });

  it('formats TranslationResult with digit value, unit and magnitude', () => {
    let result = new TranslationResult();
    result.setFactoredValue(5);
    result.setUnit('feet');
    result.increaseByMagnitude('five');
    expect(TranslationResultFormatter.format(result)).toBe('five feet');
  });

  it('formats TranslationResult with digit value, unit and multiple magnitudes', () => {
    let result = new TranslationResult();
    result.setFactoredValue(35);
    result.setUnit('feet');
    result.increaseByMagnitude('thirty');
    result.increaseByMagnitude('five');
    expect(TranslationResultFormatter.format(result)).toBe('thirty five feet');
  });

  it('formats TranslationResult with digit value, unit and order of magnitude', () => {
    let result = new TranslationResult();
    result.setFactoredValue(100);
    result.setUnit('feet');
    result.increaseByOrderOfMagnitude('million');
    expect(TranslationResultFormatter.format(result)).toBe('100 million feet');
  });

  it('formats TranslationResult with digit value, unit, magnitudes and order of magnitude', () => {
    let result = new TranslationResult();
    result.setFactoredValue(35);
    result.setUnit('feet');
    result.increaseByMagnitude('thirty');
    result.increaseByMagnitude('five');
    result.increaseByOrderOfMagnitude('million');
    expect(TranslationResultFormatter.format(result)).toBe('thirty five million feet');
  });

  it('formats TranslationResult with digit value, unit and multiple order of magnitudes', () => {
    let result = new TranslationResult();
    result.setFactoredValue(100);
    result.setUnit('feet');
    result.increaseByOrderOfMagnitude('undecillion');
    result.increaseByOrderOfMagnitude('million');
    expect(TranslationResultFormatter.format(result)).toBe('100 million undecillion feet');
  });

  it('formats TranslationResult with digit value, unit, magnitudes and order of magnitudes', () => {
    let result = new TranslationResult();
    result.setFactoredValue(35);
    result.setUnit('feet');
    result.increaseByMagnitude('thirty');
    result.increaseByMagnitude('five');
    result.increaseByOrderOfMagnitude('trillion');
    result.increaseByOrderOfMagnitude('million');
    expect(TranslationResultFormatter.format(result)).toBe('thirty five million trillion feet');
  });
});
