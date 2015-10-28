import {
  Locale
}
from '../../../src/locale';

import {
  TimeTranslator
}
from '../../../src/translators/time-translator';

import {
  OrderOfMagnitudes
}
from '../../../src/core/constants/number/order-of-magnitudes';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../../../src/core/types/translator-options';

import {
  Time
}
from '../../../src/core/constants/time/units';

let translator = null;

describe('the TimeTranslator class', () => {
  describe('with default translator options', () => {
    beforeEach(() => {
      translator = new TimeTranslator();
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

    it('translates 0 seconds', () => {
      expect(translator.translate(0)).toBe('0 seconds');
    });

    it('translates 30 seconds', () => {
      expect(translator.translate(30)).toBe('30 seconds');
    });

    it('translates a minute', () => {
      let value = Time.Minute.getValue();
      expect(translator.translate(value)).toBe('1 minutes');
    });

    it('translates an hour', () => {
      let value = Time.Hour.getValue();
      expect(translator.translate(value)).toBe('1 hours');
    });

    it('translates a day', () => {
      let value = Time.Day.getValue();
      expect(translator.translate(value)).toBe('1 days');
    });

    it('translates a month', () => {
      let value = Time.Month.getValue();
      expect(translator.translate(value)).toBe('1 months');
    });

    it('translates a year', () => {
      let value = Time.Year.getValue();
      expect(translator.translate(value)).toBe('1 years');
    });

    it('translates a decade', () => {
      let value = Time.Decade.getValue();
      expect(translator.translate(value)).toBe('1 decades');
    });

    it('translates a century', () => {
      let value = Time.Century.getValue();
      expect(translator.translate(value)).toBe('1 centuries');
    });

    it('translates a million centuries', () => {
      let value = OrderOfMagnitudes.Million.getValue() * Time.Century.getValue();
      expect(translator.translate(value)).toBe('1 million centuries');
    });

    it('translates 100 million centuries', () => {
      let value = 100 * OrderOfMagnitudes.Million.getValue() * Time.Century.getValue();
      expect(translator.translate(value)).toBe('100 million centuries');
    });

    it('translates with rounding: 1.15 million centuries', () => {
      let value = 1.15 * OrderOfMagnitudes.Million.getValue() * Time.Century.getValue();
      expect(translator.translate(value)).toBe('1.15 million centuries');
    });
  });

  describe('with magnitudes translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateMagnitudes = true;
      translator = new TimeTranslator(magnitudeOptions);
    });

    it('translates 0', () => {
      expect(translator.translate(0)).toBe('0 seconds');
    });

    it('translates 5', () => {
      expect(translator.translate(5)).toBe('five seconds');
    });

    it('translates 10', () => {
      expect(translator.translate(10)).toBe('ten seconds');
    });

    it('translates 67 centuries', () => {
      let value = Time.Century.getValue() * 67;
      expect(translator.translate(value)).toBe('sixty seven centuries');
    });

    it('translates 95', () => {
      let value = Time.Century.getValue() * 95;
      expect(translator.translate(value)).toBe('ninety five centuries');
    });

    it('translates 99 centuries', () => {
      let value = Time.Century.getValue() * 99;
      expect(translator.translate(value)).toBe('ninety nine centuries');
    });
  });

  describe('with low order magnitude translation in translator options', () => {
    beforeEach(() => {
      let magnitudeOptions = new MagnitudeOptions();
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
      translator = new TimeTranslator(magnitudeOptions);
    });

    it('translates 100 centuries', () => {
      let value = Time.Century.getValue() * 100;
      expect(translator.translate(value)).toBe('1 hundred centuries');
    });

    it('translates 1000 centuries', () => {
      let value = Time.Century.getValue() * 1000;
      expect(translator.translate(value)).toBe('1 thousand centuries');
    });
  });
});
