import {
  Locale
}
from '../../../../src/locale';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../../../../src/core/types/translator-options';

describe('the TranslatorOptions class', () => {
  it('handles null value for type', () => {
    expect(x => new TranslatorOptions(null)).toThrow(Locale.Error.InvalidArgType);
  });

  it('handles undefined value for remainder', () => {
    let test = {};
    expect(x => new TranslatorOptions(test.notDefined)).toThrow(Locale.Error.InvalidArgType);
  });

  it('handles undefined value for MagnitudeOptions', () => {
    let translatorOptions = new TranslatorOptions(TranslatorOptions.Type.Number);
    expect(translatorOptions.MagnitudeOptions).toEqual(new MagnitudeOptions());
  });

  it('sets and gets TranslatorOptions Type', () => {
    let type = TranslatorOptions.Type.Number;
    let translationResult = new TranslatorOptions(type);
    expect(translationResult.Type).toBe(type);
  });

  it('sets and gets MagnitudeOptions', () => {
    let translatorOptions = new TranslatorOptions(TranslatorOptions.Type.Number);
    let magnitudeOptions = new MagnitudeOptions();
    magnitudeOptions.TranslateMagnitudes = true;
    translatorOptions.MagnitudeOptions = magnitudeOptions;
    expect(translatorOptions.MagnitudeOptions).toEqual(magnitudeOptions);
  });
});

describe('the MagnitudeOptions class', () => {
  it('sets and gets Magnitudes', () => {
    let magnitudeOptions = new MagnitudeOptions();
    magnitudeOptions.TranslateMagnitudes = true;
    expect(magnitudeOptions.TranslateMagnitudes).toBeTruthy();
  });

  it('sets and gets Very Low Order of Magnitudes', () => {
    let magnitudeOptions = new MagnitudeOptions();
    magnitudeOptions.TranslateVeryLowOrderOfMagnitudes = true;
    expect(magnitudeOptions.TranslateVeryLowOrderOfMagnitudes).toBeTruthy();
  });

  it('sets and gets Low Order of Magnitudes', () => {
    let magnitudeOptions = new MagnitudeOptions();
    magnitudeOptions.TranslateLowOrderOfMagnitudes = true;
    expect(magnitudeOptions.TranslateLowOrderOfMagnitudes).toBeTruthy();
  });

  it('sets and gets High Order of Magnitudes', () => {
    let magnitudeOptions = new MagnitudeOptions();
    magnitudeOptions.TranslateHighOrderOfMagnitudes = true;
    expect(magnitudeOptions.TranslateHighOrderOfMagnitudes).toBeTruthy();
  });
});
