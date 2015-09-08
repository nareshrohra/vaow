import {
  Locale
}
from '../../../../src/locale';

import {
  TranslationChain
}
from '../../../../src/core/chain/translation-chain';

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

let translationChain = null;

beforeEach(() => {
  translationChain = new TranslationChain();
});

describe('the TranslationChain class', () => {
  it('handles null value for adding magnitude', () => {
    expect(x => translationChain.addMagnitude(null)).toThrow(Locale.Error.InvalidArgMagnitude);
  });Locale.Error.InvalidArgUnit

  it('handles undefined value for adding magnitude', () => {
    let test = {};
    expect(x => translationChain.addMagnitude(test.notDefined)).toThrow(Locale.Error.InvalidArgMagnitude);
  });

  it('handles null value for adding unit', () => {
    expect(x => translationChain.addUnit(null)).toThrow(Locale.Error.InvalidArgUnit);
  });

  it('handles undefined value for adding unit', () => {
    let test = {};
    expect(x => translationChain.addUnit(test.notDefined)).toThrow(Locale.Error.InvalidArgUnit);
  });

  it('translates 0', () => {
    let grand = new Magnitude('grand', 1000);
    translationChain.addMagnitude(grand);
    expect(translationChain.translate(0)).toBe("0");
  });

  it('translates with a single chain element', () => {
    let grand = new Magnitude('grand', 1000);
    translationChain.addMagnitude(grand);
    expect(translationChain.translate(1000)).toBe("1 grand");
  });

  it('translates with value in multiple magnitudes', () => {
    translationChain.addMagnitude(Magnitudes.Million);
    translationChain.addMagnitude(Magnitudes.Billion);
    translationChain.addMagnitude(Magnitudes.Trillion);

    let value = Magnitudes.Million.getValue() * Magnitudes.Trillion.getValue();
    expect(translationChain.translate(value)).toBe("1 x 10^6 trillion");
  });

  it('translates a very large value', () => {
    translationChain.addMagnitude(Magnitudes.Million);
    translationChain.addMagnitude(Magnitudes.Billion);
    translationChain.addMagnitude(Magnitudes.Trillion);

    let value = Magnitudes.Million.getValue() * Magnitudes.Decillion.getValue();
    expect(translationChain.translate(value)).toBe("1 x 10^27 trillion");
  });

  it('translates with units and magnitudes', () => {
    let mm = new Unit("millimeters", 0);
    translationChain.addUnit(mm);

    let feet = new Unit("feet", 304.8);
    translationChain.addUnit(feet);

    translationChain.addMagnitude(Magnitudes.Million);
    translationChain.addMagnitude(Magnitudes.Billion);

    let value = Magnitudes.Million.getValue() * feet.getValue();
    expect(translationChain.translate(value)).toBe("1 million feet");
  });

  it('translates with unit and magnitude but value is within units', () => {
    let mm = new Unit("millimeters", 0);
    translationChain.addUnit(mm);

    let feet = new Unit("feet", 304.8);
    translationChain.addUnit(feet);

    translationChain.addMagnitude(Magnitudes.Million);

    let value = 100 * feet.getValue();
    expect(translationChain.translate(value)).toBe("100 feet");
  });

  it('translates with interleaved magnitudes', () => {
    translationChain.addMagnitude(Magnitudes.Million);
    translationChain.addMagnitude(Magnitudes.Trillion);

    let value = Magnitudes.Billion.getValue();
    expect(translationChain.translate(value)).toBe("1,000 million");
  });
});
