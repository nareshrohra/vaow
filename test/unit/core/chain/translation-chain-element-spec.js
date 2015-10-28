import {
  Locale
}
from '../../../../src/locale';

import {
  TranslationChainElement
}
from '../../../../src/core/chain/translation-chain-element';

import {
  Magnitude
}
from '../../../../src/core/types/magnitude';

import {
  Unit
}
from '../../../../src/core/types/unit';

import {
  OrderOfMagnitudes
}
from '../../../../src/core/constants/number/order-of-magnitudes';

import {
  UnderflowElementTranslationResult,
  OverflowElementTranslationResult,
  ElementTranslationResult
}
from '../../../../src/core/types/translation-result';

describe('the TranslationChainElement class', () => {
  it('handles null value for base', () => {
    expect(x => new TranslationChainElement(null)).toThrow(Locale.Error.InvalidArgBase);
  });

  it('handles undefined value for base', () => {
    let testObj = {};
    expect(x => new TranslationChainElement(testObj.notDefined)).toThrow(Locale.Error.InvalidArgBase);
  });

  it('handles null value for setting next element', () => {
    let translationChainElement = new TranslationChainElement(OrderOfMagnitudes.Million);
    expect(x => translationChainElement.setNextElement(null)).toThrow(Locale.Error.InvalidArgNextElement);
  });

  it('handles undefined value for setting next element', () => {
    let translationChainElement = new TranslationChainElement(OrderOfMagnitudes.Million);
    let testObj = {};
    expect(x => translationChainElement.setNextElement(testObj.notDefined)).toThrow(Locale.Error.InvalidArgNextElement);
  });

  it('gets value', () => {
    let translationChainElement = new TranslationChainElement(OrderOfMagnitudes.Million);
    expect(translationChainElement.getValue()).toBe(OrderOfMagnitudes.Million.getValue());
  });

  it('gets word', () => {
    let translationChainElement = new TranslationChainElement(OrderOfMagnitudes.Million);
    expect(translationChainElement.getWord()).toBe(OrderOfMagnitudes.Million.getWord());
  });

  it('returns underflow translation result', () => {
    let billion = new TranslationChainElement(OrderOfMagnitudes.Billion);
    let value = OrderOfMagnitudes.Million.getValue();
    let result = billion.translate(value);
    let expectedResult = new UnderflowElementTranslationResult();
    expectedResult.setFactoredValue(value);
    expect(result).toEqual(expectedResult);
  });

  it('returns overflow translation result', () => {
    let million = new TranslationChainElement(OrderOfMagnitudes.Million);
    let value = OrderOfMagnitudes.Billion.getValue();
    let result = million.translate(value);
    let expectedResult = new OverflowElementTranslationResult(OrderOfMagnitudes.Million.getWord());
    expectedResult.setFactoredValue(1000);
    expect(result).toEqual(expectedResult);
  });

  it('returns underflow translation result with 2 chained elements', () => {
    let million = new TranslationChainElement(OrderOfMagnitudes.Million);
    let billion = new TranslationChainElement(OrderOfMagnitudes.Billion);
    million.setNextElement(billion);
    let value = 1000;
    let result = million.translate(value);
    let expectedResult = new UnderflowElementTranslationResult();
    expectedResult.setFactoredValue(value);
    expect(result).toEqual(expectedResult);
  });

  it('returns overflow translation result with 2 chained elements', () => {
    let million = new TranslationChainElement(OrderOfMagnitudes.Million);
    let billion = new TranslationChainElement(OrderOfMagnitudes.Billion);
    million.setNextElement(billion);
    let value = OrderOfMagnitudes.Trillion.getValue();
    let result = million.translate(value);
    let expectedResult = new OverflowElementTranslationResult(OrderOfMagnitudes.Billion.getWord());
    expectedResult.setFactoredValue(1000);
    expect(result).toEqual(expectedResult);
  });

  it('returns translation result with 2 chained elements', () => {
    let million = new TranslationChainElement(OrderOfMagnitudes.Million);
    let billion = new TranslationChainElement(OrderOfMagnitudes.Billion);
    million.setNextElement(billion);
    let value = 5 * OrderOfMagnitudes.Million.getValue();
    let result = million.translate(value);
    let expectedResult = new ElementTranslationResult(OrderOfMagnitudes.Million.getWord());
    expectedResult.setFactoredValue(5);
    expect(result).toEqual(expectedResult);
  });
});
