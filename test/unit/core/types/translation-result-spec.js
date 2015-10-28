import {
  Locale
}
from '../../../../src/locale';

import {
  TranslationResult,
  ElementTranslationResult,
  OverflowElementTranslationResult,
  UnderflowElementTranslationResult,
  IncompleteElementTranslationResult
}
from '../../../../src/core/types/translation-result';

describe('the TranslationResult class', () => {
  it('handles null value for remainder', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.setRemainder(null)).toThrow(Locale.Error.InvalidArgRemainder);
  });

  it('handles undefined value for remainder', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.setRemainder(test.notDefined)).toThrow(Locale.Error.InvalidArgRemainder);
  });

  it('handles null value for factoredValue', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.setFactoredValue(null)).toThrow(Locale.Error.InvalidArgFactoredValue);
  });

  it('handles undefined value for factoredValue', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.setFactoredValue(test.notDefined)).toThrow(Locale.Error.InvalidArgFactoredValue);
  });

  it('handles null value for unit', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.setUnit(null)).toThrow(Locale.Error.InvalidArgUnit);
  });

  it('handles undefined value for unit', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.setUnit(test.notDefined)).toThrow(Locale.Error.InvalidArgUnit);
  });

  it('handles null value for magnitude', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.increaseByMagnitude(null)).toThrow(Locale.Error.InvalidArgMagnitude);
  });

  it('handles undefined value for magnitude', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.increaseByMagnitude(test.notDefined)).toThrow(Locale.Error.InvalidArgMagnitude);
  });

  it('handles null value for order of magnitude', () => {
    let translationResult = new TranslationResult();
    expect(x => translationResult.increaseByOrderOfMagnitude(null)).toThrow(Locale.Error.InvalidArgOrderOfMagnitude);
  });

  it('handles undefined value for order of magnitude', () => {
    let translationResult = new TranslationResult();
    let test = {};
    expect(x => translationResult.increaseByOrderOfMagnitude(test.notDefined)).toThrow(Locale.Error.InvalidArgOrderOfMagnitude);
  });

  it('sets and gets factoredValue', () => {
    let translationResult = new TranslationResult();
    translationResult.setFactoredValue(100);
    expect(translationResult.getFactoredValue()).toBe(100);
  });

  it('sets and gets unit', () => {
    let translationResult = new TranslationResult();
    translationResult.setUnit('feet');
    expect(translationResult.getUnit()).toBe('feet');
  });

  it('increases by a magnitude', () => {
    let translationResult = new TranslationResult();
    translationResult.increaseByMagnitude('five');
    expect(translationResult.getMagnitudes()).toEqual(['five']);
  });

  it('increases by multiple magnitudes', () => {
    let translationResult = new TranslationResult();
    translationResult.increaseByMagnitude('thirty');
    translationResult.increaseByMagnitude('five');
    expect(translationResult.getMagnitudes()).toEqual(['thirty', 'five']);
  });

  it('increases by a order of magnitude', () => {
    let translationResult = new TranslationResult();
    translationResult.increaseByOrderOfMagnitude('million');
    expect(translationResult.getOrderOfMagnitudes()).toEqual(['million']);
  });

  it('increases by multiple magnitudes', () => {
    let translationResult = new TranslationResult();
    translationResult.increaseByOrderOfMagnitude('million');
    translationResult.increaseByOrderOfMagnitude('trillion');
    expect(translationResult.getOrderOfMagnitudes()).toEqual(['million', 'trillion']);
  });

  it('applies element translation result', () => {
    let translationResult = new TranslationResult();
    let elementTranslationResult = new ElementTranslationResult('grand');

    elementTranslationResult.setFactoredValue(10);
    elementTranslationResult.setRemainder(5);
    translationResult.applyElementTranslationResult(elementTranslationResult);

    expect(translationResult.getFactoredValue()).toEqual(10);
    expect(translationResult.getRemainder()).toEqual(5);
  });

  it('applies element translation result as unit', () => {
    let unit = 'feet';
    let translationResult = new TranslationResult();
    let elementTranslationResult = new ElementTranslationResult(unit);

    translationResult.applyElementTranslationResultAsUnit(elementTranslationResult);

    expect(translationResult.getUnit()).toEqual(unit);
  });

  it('applies element translation result as magnitude', () => {
    let magnitude = 'five';
    let translationResult = new TranslationResult();
    let elementTranslationResult = new ElementTranslationResult(magnitude);

    translationResult.applyElementTranslationResultAsMagnitude(elementTranslationResult);

    expect(translationResult.getMagnitudes()).toEqual([magnitude]);
  });

  it('applies element translation result as order of magnitude', () => {
    let orderOfMagnitude = 'million';
    let translationResult = new TranslationResult();
    let elementTranslationResult = new ElementTranslationResult(orderOfMagnitude);

    translationResult.applyElementTranslationResultAsOrderOfMagnitude(elementTranslationResult);

    expect(translationResult.getOrderOfMagnitudes()).toEqual([orderOfMagnitude]);
  });
});

describe('the ElementTranslationResult class', () => {
  it('handles null for word', () => {
    expect(x => new ElementTranslationResult()).toThrow(Locale.Error.InvalidArgWord);
  });

  it('handles undefined for word', () => {
    let test = {};
    expect(x => new ElementTranslationResult()).toThrow(Locale.Error.InvalidArgWord);
  });

  it('gets word', () => {
    let result = new ElementTranslationResult('feet');
    expect(result.getWord()).toBe('feet');
  });

  it('gets factoredValue', () => {
    let result = new ElementTranslationResult('feet');
    result.setFactoredValue(10)
    expect(result.getFactoredValue()).toBe(10);
  });

  it('constructs without overlow', () => {
    let result = new ElementTranslationResult('feet');
    expect(result.isOverflow()).toBe(false);
  });

  it('constructs without underflow', () => {
    let result = new ElementTranslationResult('feet');
    expect(result.isUnderflow()).toBe(false);
  });

  it('constructs as complete', () => {
    let result = new ElementTranslationResult('feet');
    expect(result.isIncomplete()).toBe(false);
  });

  it('sets and gets overflow', () => {
    let result = new ElementTranslationResult('feet');
    result.setOverflow();
    expect(result.isOverflow()).toBe(true);
  });

  it('sets and gets underflow', () => {
    let result = new ElementTranslationResult('feet');
    result.setUnderflow();
    expect(result.isUnderflow()).toBe(true);
  });

  it('sets and gets incomplete', () => {
    let result = new ElementTranslationResult('feet');
    result.setIncomplete();
    expect(result.isIncomplete()).toBe(true);
  });
});

describe('the OverflowElementTranslationResult class', () => {
  it('handles null for word', () => {
    let elementTranslationResult = new OverflowElementTranslationResult(null);
    expect(elementTranslationResult.getWord()).toBe('');
  });

  it('handles undefined for word', () => {
    let test = {};
    let elementTranslationResult = new OverflowElementTranslationResult(test.notDefined);
    expect(elementTranslationResult.getWord()).toBe('');
  });

  it('constructs with overlow', () => {
    let result = new OverflowElementTranslationResult('feet');
    expect(result.isOverflow()).toBe(true);
  });
});

describe('the UnderflowElementTranslationResult class', () => {
  it('handles null for word', () => {
    let elementTranslationResult = new UnderflowElementTranslationResult(null);
    expect(elementTranslationResult.getWord()).toBe('');
  });

  it('handles undefined for word', () => {
    let test = {};
    let elementTranslationResult = new UnderflowElementTranslationResult(test.notDefined);
    expect(elementTranslationResult.getWord()).toBe('');
  });

  it('constructs with underflow', () => {
    let result = new UnderflowElementTranslationResult('feet');
    expect(result.isUnderflow()).toBe(true);
  });
});

describe('the IncompleteElementTranslationResult class', () => {
  it('handles null for word', () => {
    let elementTranslationResult = new IncompleteElementTranslationResult(null);
    expect(elementTranslationResult.getWord()).toBe('');
  });

  it('handles undefined for word', () => {
    let test = {};
    let elementTranslationResult = new IncompleteElementTranslationResult(test.notDefined);
    expect(elementTranslationResult.getWord()).toBe('');
  });

  it('constructs with underflow', () => {
    let result = new IncompleteElementTranslationResult('feet');
    expect(result.isIncomplete()).toBe(true);
  });
});
