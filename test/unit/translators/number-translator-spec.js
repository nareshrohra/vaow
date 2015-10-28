import {
  Locale
}
from '../../../src/locale';

import {
  NumberTranslator
}
from '../../../src/translators/number-translator';

import {
  OrderOfMagnitudes
}
from '../../../src/core/constants/number/order-of-magnitudes';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../../../src/core/types/translator-options';

let translator = null;

describe('the NumberTranslator class', () => {
  describe('with default translator options', () => {
    beforeEach(() => {
      translator = new NumberTranslator();
    });

    it('handles null input', () => {
      expect(x => translator.translate(null)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
    });

    it('handles undefined value', () => {
      let test = {};
      expect(x => translator.translate(test.notDefined)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
    });

    it('handles string input', () => {
      expect(x => translator.translate("a")).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
    });

    it('handles negative input', () => {
      expect(x => translator.translate(-1)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
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
      let value = OrderOfMagnitudes.Million.getValue();
      expect(translator.translate(value)).toBe('1 million');
    });

    it('translates a billion', () => {
      let value = OrderOfMagnitudes.Billion.getValue();
      expect(translator.translate(value)).toBe('1 billion');
    });

    it('translates a trillion', () => {
      let value = OrderOfMagnitudes.Trillion.getValue();
      expect(translator.translate(value)).toBe('1 trillion');
    });

    it('translates a quadrillion', () => {
      let value = OrderOfMagnitudes.Quadrillion.getValue();
      expect(translator.translate(value)).toBe('1 quadrillion');
    });

    it('translates a quintillion', () => {
      let value = OrderOfMagnitudes.Quintillion.getValue();
      expect(translator.translate(value)).toBe('1 quintillion');
    });

    it('translates a sextillion', () => {
      let value = OrderOfMagnitudes.Sextillion.getValue();
      expect(translator.translate(value)).toBe('1 sextillion');
    });

    it('translates a septillion', () => {
      let value = OrderOfMagnitudes.Septillion.getValue();
      expect(translator.translate(value)).toBe('1 septillion');
    });

    it('translates a octillion', () => {
      let value = OrderOfMagnitudes.Octillion.getValue();
      expect(translator.translate(value)).toBe('1 octillion');
    });

    it('translates a nonillion', () => {
      let value = OrderOfMagnitudes.Nonillion.getValue();
      expect(translator.translate(value)).toBe('1 nonillion');
    });

    it('translates a decillion', () => {
      let value = OrderOfMagnitudes.Decillion.getValue();
      expect(translator.translate(value)).toBe('1 decillion');
    });

    it('translates an undecillion', () => {
      let value = OrderOfMagnitudes.Undecillion.getValue();
      expect(translator.translate(value)).toBe('1 undecillion');
    });

    it('translates with rounding: 1.2 billion', () => {
      let value = 1.25 * OrderOfMagnitudes.Billion.getValue();
      expect(translator.translate(value)).toBe('1.25 billion');
    });
  });

  describe('with magnitudes translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateMagnitudes = true;
      translator = new NumberTranslator(magnitudeOptions);
    });

    it('translates 0', () => {
      expect(translator.translate(0)).toBe('0');
    });

    it('translates 5', () => {
      expect(translator.translate(5)).toBe('five');
    });

    it('translates 10', () => {
      expect(translator.translate(10)).toBe('ten');
    });

    it('translates 67', () => {
      expect(translator.translate(67)).toBe('sixty seven');
    });

    it('translates 95', () => {
      expect(translator.translate(95)).toBe('ninety five');
    });
    
    it('translates 99', () => {
      expect(translator.translate(99)).toBe('ninety nine');
    });
  });

  describe('with low order magnitude translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
      translator = new NumberTranslator(magnitudeOptions);
    });

    it('translates 100', () => {
      expect(translator.translate(100)).toBe('1 hundred');
    });

    it('translates 1000', () => {
      expect(translator.translate(1000)).toBe('1 thousand');
    });
  });
});
