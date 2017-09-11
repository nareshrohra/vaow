import {
  Locale
}
from '../../../src/locale';

import {
  WeightTranslator
}
from '../../../src/translators/weight-translator';

import {
  OrderOfMagnitudes
}
from '../../../src/core/constants/number/order-of-magnitudes';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../../../src/core/types/translator-options';

import {
  Weight
}
from '../../../src/core/constants/units/weight';

let translator = null;

describe('the WeightTranslator class', () => {
  describe('with default translator options', () => {
    beforeEach(() => {
      translator = new WeightTranslator();
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

    it('translates 0 milligrams', () => {
      expect(translator.translate(0)).toBe('0 milligrams');
    });

    it('translates 30 milligrams', () => {
      expect(translator.translate(30)).toBe('30 milligrams');
    });

    it('translates a gram', () => {
      let value = Weight.Gram.getValue();
      expect(translator.translate(value)).toBe('1 grams');
    });

    it('translates a kilogram', () => {
      let value = Weight.Kilogram.getValue();
      expect(translator.translate(value)).toBe('1 kilograms');
    });

    it('translates a million kilograms', () => {
      let value = OrderOfMagnitudes.Million.getValue() * Weight.Kilogram.getValue();
      expect(translator.translate(value)).toBe('1 million kilograms');
    });

    it('translates 100 million kilograms', () => {
      let value = 100 * OrderOfMagnitudes.Million.getValue() * Weight.Kilogram.getValue();
      expect(translator.translate(value)).toBe('100 million kilograms');
    });

    it('translates with rounding: 1.15 million kilograms', () => {
      let value = 1.15 * OrderOfMagnitudes.Million.getValue() * Weight.Kilogram.getValue();
      expect(translator.translate(value)).toBe('1.15 million kilograms');
    });
  });

  describe('with magnitudes translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateMagnitudes = true;
      translator = new WeightTranslator(magnitudeOptions);
    });

    it('translates 0', () => {
      expect(translator.translate(0)).toBe('0 milligrams');
    });

    it('translates 5', () => {
      expect(translator.translate(5)).toBe('5 milligrams');
    });

    it('translates 10', () => {
      expect(translator.translate(10)).toBe('10 milligrams');
    });

    it('translates 67 kilograms', () => {
      let value = Weight.Kilogram.getValue() * 67;
      expect(translator.translate(value)).toBe('sixty seven kilograms');
    });

    it('translates 95', () => {
      let value = Weight.Kilogram.getValue() * 95;
      expect(translator.translate(value)).toBe('ninety five kilograms');
    });

    it('translates 99 kilograms', () => {
      let value = Weight.Kilogram.getValue() * 99;
      expect(translator.translate(value)).toBe('ninety nine kilograms');
    });
  });

  describe('with low order magnitude translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
      translator = new WeightTranslator(magnitudeOptions);
    });

    it('translates 100 kilograms', () => {
      let value = Weight.Kilogram.getValue() * 100;
      expect(translator.translate(value)).toBe('1 hundred kilograms');
    });

    it('translates 1000 kilograms', () => {
      let value = Weight.Kilogram.getValue() * 1000;
      expect(translator.translate(value)).toBe('1 thousand kilograms');
    });
  });

  describe('with recursive translation option', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateMagnitudes = true;
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
      translator = new WeightTranslator(magnitudeOptions, true);
    });

    it('translates 100 kilograms', () => {
      let value = Weight.Kilogram.getValue() * 100;
      expect(translator.translate(value)).toBe('one hundred kilograms');
    });

    it('translates 1000 kilograms', () => {
      let value = Weight.Kilogram.getValue() * 1000;
      expect(translator.translate(value)).toBe('one thousand kilograms');
    });

    it('translates 1 kilograms + 3 grams', () => {
      let value = Weight.Kilogram.getValue() + (Weight.Gram.getValue() * 3);
      expect(translator.translate(value)).toBe('one kilograms three grams');
    });
  });
});
