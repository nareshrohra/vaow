
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
  Magnitudes
}
from '../../../../src/core/constants/magnitude/magnitudes';

import {
  UnderflowElementTranslationResult,
  OverflowElementTranslationResult,
  ElementTranslationResult
}
from '../../../../src/core/types/translation-result';

describe('the TranslationChainElement module', () => {
  it('handles passing base as null', () => {
    expect(x => new TranslationChainElement(null)).toThrow('Invalid argument "base"');
  });

  it('handles passing base as undefined', () => {
    let testObj = {};
    expect(x => new TranslationChainElement(testObj.notDefined)).toThrow('Invalid argument "base"');
  });

  it('gets value', () => {
    let translationChainElement = new TranslationChainElement(Magnitudes.Million);
    expect(translationChainElement.getValue()).toBe(Magnitudes.Million.getValue());
  });

  it('gets word', () => {
    let translationChainElement = new TranslationChainElement(Magnitudes.Million);
    expect(translationChainElement.getWord()).toBe(Magnitudes.Million.getWord());
  });

  it('returns underflow translation result', () => {
    let billion = new TranslationChainElement(Magnitudes.Billion);
    let value = Magnitudes.Million.getValue();
    let result = billion.translate(value);
    let expectedResult = new UnderflowElementTranslationResult(value, Magnitudes.Billion.getWord());
    expect(result).toEqual(expectedResult);
  });

  it('returns overflow translation result', () => {
    let million = new TranslationChainElement(Magnitudes.Million);
    let value = Magnitudes.Billion.getValue();
    let result = million.translate(value);
    let expectedResult = new OverflowElementTranslationResult(1000, Magnitudes.Million.getWord());
    expect(result).toEqual(expectedResult);
  });

  it('returns underflow translation result with 2 chained elements', () => {
    let million = new TranslationChainElement(Magnitudes.Million);
    let billion = new TranslationChainElement(Magnitudes.Billion);
    million.setNextElement(billion);
    let value = 1000;
    let result = million.translate(value);
    let expectedResult = new UnderflowElementTranslationResult(value, Magnitudes.Million.getWord());
    expect(result).toEqual(expectedResult);
  });

  it('returns overflow translation result with 2 chained elements', () => {
    let million = new TranslationChainElement(Magnitudes.Million);
    let billion = new TranslationChainElement(Magnitudes.Billion);
    million.setNextElement(billion);
    let value = Magnitudes.Trillion.getValue();
    let result = million.translate(value);
    let expectedResult = new OverflowElementTranslationResult(1000, Magnitudes.Billion.getWord());
    expect(result).toEqual(expectedResult);
  });

  it('returns translation result with 2 chained elements', () => {
    let million = new TranslationChainElement(Magnitudes.Million);
    let billion = new TranslationChainElement(Magnitudes.Billion);
    million.setNextElement(billion);
    let value = 5 * Magnitudes.Million.getValue();
    let result = million.translate(value);
    let expectedResult = new ElementTranslationResult(5, Magnitudes.Million.getWord());
    expect(result).toEqual(expectedResult);
  });

  it('returns overflow translation result with base value of 0', () => {
    let units = new TranslationChainElement(new Magnitude('Units', 0));
    let tens = new TranslationChainElement(new Magnitude('Tens', 10));
    units.setNextElement(tens);
    let value = 5;
    let result = units.translate(value);
    let expectedResult = new ElementTranslationResult(5, units.getWord());
    expect(result).toEqual(expectedResult);
  });
});
