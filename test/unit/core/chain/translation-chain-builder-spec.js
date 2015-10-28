import {
  TranslationChainBuilder
}
from '../../../../src/core/chain/translation-chain-builder';

import {
  Time
}
from '../../../../src/core/constants/time/units';

import {
  OrderOfMagnitudes
}
from '../../../../src/core/constants/number/order-of-magnitudes';

import {
  Tens
}
from '../../../../src/core/constants/number/tens';

import {
  Units
}
from '../../../../src/core/constants/number/units';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../../../../src/core/types/translator-options';

let translationChainBuilder = null, options = null;

describe('the TranslationChainBuilder class', () => {
  beforeEach(() => {
    translationChainBuilder = new TranslationChainBuilder();
  });

  describe('builds number translation chain', ()=>{
    beforeEach(() => {
      options = new TranslatorOptions(TranslatorOptions.Type.Number);
    });

    it('with default magnitude options', () => {
      let translationChain = translationChainBuilder.build(options);
      let value = 10 * OrderOfMagnitudes.Million.getValue();
      expect(translationChain.translate(value)).toBe("10 million");
    });

    it('with magnitude', () => {
      let magnitudeOptions = new MagnitudeOptions();

      magnitudeOptions.TranslateMagnitudes = true;
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = false;
      magnitudeOptions.TranslateLowOrderOfMagnitudes = false;
      magnitudeOptions.TranslateHighOrderOfMagnitudes = false;

      options.MagnitudeOptions = magnitudeOptions;
      let translationChain = translationChainBuilder.build(options);
      let value = 11;
      expect(translationChain.translate(value)).toBe("eleven");
    });

    it('with very low magnitude', () => {
      let magnitudeOptions = new MagnitudeOptions();

      magnitudeOptions.TranslateMagnitudes = false;
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
      magnitudeOptions.TranslateLowOrderOfMagnitudes = false;
      magnitudeOptions.TranslateHighOrderOfMagnitudes = false;

      options.MagnitudeOptions = magnitudeOptions;
      let translationChain = translationChainBuilder.build(options);
      let value = 100;
      expect(translationChain.translate(value)).toBe("1 hundred");
    });

    it('with low magnitude', () => {
      let magnitudeOptions = new MagnitudeOptions();

      magnitudeOptions.TranslateMagnitudes = false;
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = false;
      magnitudeOptions.TranslateLowOrderOfMagnitudes = true;
      magnitudeOptions.TranslateHighOrderOfMagnitudes = false;

      options.MagnitudeOptions = magnitudeOptions;
      let translationChain = translationChainBuilder.build(options);
      let value = OrderOfMagnitudes.Million.getValue();
      expect(translationChain.translate(value)).toBe("1 million");
    });

    it('with high magnitude', () => {
      let magnitudeOptions = new MagnitudeOptions();

      magnitudeOptions.TranslateMagnitudes = false;
      magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = false;
      magnitudeOptions.TranslateLowOrderOfMagnitudes = false;
      magnitudeOptions.TranslateHighOrderOfMagnitudes = true;

      options.MagnitudeOptions = magnitudeOptions;
      let translationChain = translationChainBuilder.build(options);
      let value = OrderOfMagnitudes.Undecillion.getValue();
      expect(translationChain.translate(value)).toBe("1 undecillion");
    });
  });

  describe('builds time translation chain', ()=>{
    beforeEach(() => {
      options = new TranslatorOptions(TranslatorOptions.Type.Time);
    });

    it('translates 10', () => {
      let translationChain = translationChainBuilder.build(options);
      let time = 10;
      expect(translationChain.translate(time)).toBe("10 seconds");
    });

    it('translates 10 centuries', () => {
      let translationChain = translationChainBuilder.build(options);
      let time = 10 * Time.Century.getValue();
      expect(translationChain.translate(time)).toBe("10 centuries");
    });

    it('translates 10 million centuries', () => {
      let translationChain = translationChainBuilder.build(options);
      let time = 10 * OrderOfMagnitudes.Million.getValue() * Time.Century.getValue();
      expect(translationChain.translate(time)).toBe("10 million centuries");
    });
  });
});
