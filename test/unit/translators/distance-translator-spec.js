import {
  Locale
}
from '../../../src/locale';

import {
  DistanceTranslator
}
from '../../../src/translators/distance-translator';

import {
  OrderOfMagnitudes
}
from '../../../src/core/constants/number/order-of-magnitudes';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../../../src/core/types/translator-options';

import {
  Distance
}
from '../../../src/core/constants/units/distance';

let translator = null;

describe('the DistanceTranslator class', () => {
  describe('with default translator options', () => {
    beforeEach(() => {
      translator = new DistanceTranslator();
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

    it('translates 0 millimeters', () => {
      expect(translator.translate(0)).toBe('0 millimeters');
    });

    it('translates 30 millimeters', () => {
      expect(translator.translate(30)).toBe('30 millimeters');
    });

    it('translates a gram', () => {
      let value = Distance.Meter.getValue();
      expect(translator.translate(value)).toBe('1 meters');
    });

    it('translates a kilogram', () => {
      let value = Distance.Kilometer.getValue();
      expect(translator.translate(value)).toBe('1 kilometers');
    });

    it('translates a million kilometers', () => {
      let value = OrderOfMagnitudes.Million.getValue() * Distance.Kilometer.getValue();
      expect(translator.translate(value)).toBe('1 million kilometers');
    });

    it('translates 100 million kilometers', () => {
      let value = 100 * OrderOfMagnitudes.Million.getValue() * Distance.Kilometer.getValue();
      expect(translator.translate(value)).toBe('100 million kilometers');
    });

    it('translates with rounding: 1.15 million kilometers', () => {
      let value = 1.15 * OrderOfMagnitudes.Million.getValue() * Distance.Kilometer.getValue();
      expect(translator.translate(value)).toBe('1.15 million kilometers');
    });
  });

  describe('with magnitudes translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateMagnitudes = true;
      translator = new DistanceTranslator(magnitudeOptions);
    });

    it('translates 0', () => {
      expect(translator.translate(0)).toBe('0 millimeters');
    });

    it('translates 5', () => {
      expect(translator.translate(5)).toBe('5 millimeters');
    });

    it('translates 10', () => {
      expect(translator.translate(10)).toBe('10 millimeters');
    });

    it('translates 67 kilometers', () => {
      let value = Distance.Kilometer.getValue() * 67;
      expect(translator.translate(value)).toBe('sixty seven kilometers');
    });

    it('translates 95', () => {
      let value = Distance.Kilometer.getValue() * 95;
      expect(translator.translate(value)).toBe('ninety five kilometers');
    });

    it('translates 99 kilometers', () => {
      let value = Distance.Kilometer.getValue() * 99;
      expect(translator.translate(value)).toBe('ninety nine kilometers');
    });
  });

  describe('with low order magnitude translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
      translator = new DistanceTranslator(magnitudeOptions);
    });

    it('translates 100 kilometers', () => {
      let value = Distance.Kilometer.getValue() * 100;
      expect(translator.translate(value)).toBe('1 hundred kilometers');
    });

    it('translates 1000 kilometers', () => {
      let value = Distance.Kilometer.getValue() * 1000;
      expect(translator.translate(value)).toBe('1 thousand kilometers');
    });
  });

  describe('with recursive translation option', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateMagnitudes = true;
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
      translator = new DistanceTranslator(magnitudeOptions, true);
    });

    it('translates 20 centimeters', () => {
      let value = Distance.Centimeter.getValue() * 20;
      expect(translator.translate(value)).toBe('two hundred millimeters');
    });

    it('translates 100 kilometers', () => {
      let value = Distance.Kilometer.getValue() * 100;
      expect(translator.translate(value)).toBe('one hundred kilometers');
    });

    it('translates 1000 kilometers', () => {
      let value = Distance.Kilometer.getValue() * 1000;
      expect(translator.translate(value)).toBe('one thousand kilometers');
    });

    it('translates 1 kilometers + 3 meters', () => {
      let value = Distance.Kilometer.getValue() + (Distance.Meter.getValue() * 3);
      expect(translator.translate(value)).toBe('one kilometers three meters');
    });

    it('translates 123120 millimeters', () => {
      let value = Distance.Kilometer.getValue() + (Distance.Meter.getValue() * 3);
      expect(translator.translate(123120)).toBe('one hundred twenty three millimeters meters one hundred twenty millimeters');
    });    
  });
});
