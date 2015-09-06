import {
  NumberTranslator
}
from '../../../src/translators/number-translator';

import {
  Magnitudes
}
from '../../../src/core/constants/magnitude/magnitudes';

let translator = null;

beforeEach(() => {
  translator = new NumberTranslator.getInstance();
});

describe('the NumberTranslator module', () => {
  it('handles null input', () => {
    expect(x => translator.translate(null)).toThrow();
  });

  it('handles string input', () => {
    expect(x => translator.translate("a")).toThrow();
  });

  it('handles negative input', () => {
    expect(x => translator.translate(-1)).toThrow();
  });

  it('translates 0', () => {
    expect(translator.translate(0)).toBe('0');
  });

  it('translates 100', () => {
    expect(translator.translate(100)).toBe('100');
  });

  it('translates 100 thousand', () => {
    expect(translator.translate(100 * 1000)).toBe('100,000');
  });

  it('translates a million', () => {
    let value = Magnitudes.Million.getValue();
    expect(translator.translate(value)).toBe('1 million');
  });

  it('translates a billion', () => {
    let value = Magnitudes.Billion.getValue();
    expect(translator.translate(value)).toBe('1 billion');
  });

  it('translates a trillion', () => {
    let value = Magnitudes.Trillion.getValue();
    expect(translator.translate(value)).toBe('1 trillion');
  });

  it('translates a quadrillion', () => {
    let value = Magnitudes.Quadrillion.getValue();
    expect(translator.translate(value)).toBe('1 quadrillion');
  });

  it('translates a quintillion', () => {
    let value = Magnitudes.Quintillion.getValue();
    expect(translator.translate(value)).toBe('1 quintillion');
  });

  it('translates a sextillion', () => {
    let value = Magnitudes.Sextillion.getValue();
    expect(translator.translate(value)).toBe('1 sextillion');
  });

  it('translates a septillion', () => {
    let value = Magnitudes.Septillion.getValue();
    expect(translator.translate(value)).toBe('1 septillion');
  });

  it('translates a octillion', () => {
    let value = Magnitudes.Octillion.getValue();
    expect(translator.translate(value)).toBe('1 octillion');
  });

  it('translates a nonillion', () => {
    let value = Magnitudes.Nonillion.getValue();
    expect(translator.translate(value)).toBe('1 nonillion');
  });

  it('translates a decillion', () => {
    let value = Magnitudes.Decillion.getValue();
    expect(translator.translate(value)).toBe('1 decillion');
  });

  it('translates an undecillion', () => {
    let value = Magnitudes.Undecillion.getValue();
    expect(translator.translate(value)).toBe('1 undecillion');
  });
});
