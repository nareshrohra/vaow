import {
  Locale
}
from '../../../src/locale';

import {
  ExponentTranslator
}
from '../../../src/translators/exponent-translator';

import {
  Magnitudes
}
from '../../../src/core/constants/magnitude/magnitudes';

let translator = null;

beforeEach(() => {
  translator = new ExponentTranslator();
});

describe('the ExponentTranslator class', () => {
  it('handles null value', () => {
    expect(x => translator.translate(null)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('handles undefined value', () => {
    let test = {};
    expect(x => translator.translate(test.notDefined)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('handles string value', () => {
    expect(x => translator.translate("a")).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('handles negative value', () => {
    let value = -1;
    expect(x => translator.translate(value)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('translates 0', () => {
    let value = 0;
    expect(translator.translate(value)).toBe('0');
  });

  it('translates 100', () => {
    let value = 100;
    expect(translator.translate(value)).toBe('100');
  });

  it('translates 10^6', () => {
    let value = Math.pow(10, 6);
    expect(translator.translate(value)).toBe('1 x 10^6');
  });

  it('translates 10.214^6', () => {
    let value = 1.214 * Math.pow(10, 6);
    expect(translator.translate(value)).toBe('1.21 x 10^6');
  });
});
