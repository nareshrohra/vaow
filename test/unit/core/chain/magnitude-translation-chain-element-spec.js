import {
  Locale
}
from '../../../../src/locale';

import {
  MagnitudeTranslationChainElement
}
from '../../../../src/core/chain/magnitude-translation-chain-element';

import {
  Magnitude
}
from '../../../../src/core/types/magnitude';

import {
  Unit
}
from '../../../../src/core/types/unit';

import {
  Units
}
from '../../../../src/core/constants/number/units';

import {
  Tens
}
from '../../../../src/core/constants/number/tens';

import {
  UnderflowElementTranslationResult,
  OverflowElementTranslationResult,
  IncompleteElementTranslationResult,
  ElementTranslationResult
}
from '../../../../src/core/types/translation-result';

describe('the MagnitudeTranslationChainElement class', () => {
  it('handles null value for base', () => {
    expect(x => new MagnitudeTranslationChainElement(null)).toThrow(Locale.Error.InvalidArgBase);
  });

  it('handles undefined value for base', () => {
    let testObj = {};
    expect(x => new MagnitudeTranslationChainElement(testObj.notDefined)).toThrow(Locale.Error.InvalidArgBase);
  });

  it('handles null value for setting next element', () => {
    let translationChainElement = new MagnitudeTranslationChainElement(Units.Five);
    expect(x => translationChainElement.setNextElement(null)).toThrow(Locale.Error.InvalidArgNextElement);
  });

  it('handles undefined value for setting next element', () => {
    let translationChainElement = new MagnitudeTranslationChainElement(Units.Five);
    let testObj = {};
    expect(x => translationChainElement.setNextElement(testObj.notDefined)).toThrow(Locale.Error.InvalidArgNextElement);
  });

  it('gets value', () => {
    let translationChainElement = new MagnitudeTranslationChainElement(Units.Five);
    expect(translationChainElement.getValue()).toBe(Units.Five.getValue());
  });

  it('gets word', () => {
    let translationChainElement = new MagnitudeTranslationChainElement(Units.Five);
    expect(translationChainElement.getWord()).toBe(Units.Five.getWord());
  });

  it('returns underflow translation result', () => {
    let element = new MagnitudeTranslationChainElement(Units.Five);
    let value = Units.Five.getValue() - 1;
    let result = element.translate(value);
    let expectedResult = new UnderflowElementTranslationResult();
    expectedResult.setFactoredValue(value);
    expect(result).toEqual(expectedResult);
  });

  it('returns overflow translation result', () => {
    let element = new MagnitudeTranslationChainElement(Units.Five);
    let value = Units.Five.getValue() + 1;
    let result = element.translate(value);
    let expectedResult = new OverflowElementTranslationResult();
    expectedResult.setFactoredValue(value);
    expect(result).toEqual(expectedResult);
  });

  it('returns translation result', () => {
    let element = new MagnitudeTranslationChainElement(Units.Five);
    let value = Units.Five.getValue();
    let result = element.translate(value);
    let expectedResult = new ElementTranslationResult(element.getWord());
    expect(result).toEqual(expectedResult);
  });

  it('returns underflow translation result with 2 chained elements', () => {
    let five = new MagnitudeTranslationChainElement(Units.Five);
    let six = new MagnitudeTranslationChainElement(Units.Six);
    five.setNextElement(six);
    let value = Units.Five.getValue() - 1;
    let result = five.translate(value);
    let expectedResult = new UnderflowElementTranslationResult();
    expectedResult.setFactoredValue(value);
    expect(result).toEqual(expectedResult);
  });

  it('returns overflow translation result with 2 chained elements', () => {
    let five = new MagnitudeTranslationChainElement(Units.Five);
    let six = new MagnitudeTranslationChainElement(Units.Six);
    five.setNextElement(six);
    let value = Units.Six.getValue() + 1;
    let result = five.translate(value);
    let expectedResult = new OverflowElementTranslationResult();
    expectedResult.setFactoredValue(value);
    expect(result).toEqual(expectedResult);
  });

  it('returns translation result with 2 chained elements', () => {
    let five = new MagnitudeTranslationChainElement(Units.Five);
    let six = new MagnitudeTranslationChainElement(Units.Six);
    five.setNextElement(six);
    let value = Units.Six.getValue();
    let result = five.translate(value);
    let expectedResult = new ElementTranslationResult(six.getWord());
    expect(result).toEqual(expectedResult);
  });

  it('returns incomplete translation result', () => {
    let thirty = new MagnitudeTranslationChainElement(Tens.Thirty);
    let fourty = new MagnitudeTranslationChainElement(Tens.Fourty);
    thirty.setNextElement(fourty);
    let value = 35;
    let result = thirty.translate(value);
    let expectedResult = new IncompleteElementTranslationResult(thirty.getWord());
    expectedResult.setRemainder(5);
    expect(result).toEqual(expectedResult);
  });
});
