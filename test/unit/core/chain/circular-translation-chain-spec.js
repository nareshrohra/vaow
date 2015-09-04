
import {
  CircularTranslationChain
}
from '../../src/core/chain/circular-translation-chain';

import {
  Magnitude
}
from '../../src/core/types/magnitude';

import {
  Unit
}
from '../../src/core/types/unit';

import {
  Magnitudes
}
from '../../src/core/constants/magnitude/magnitudes';

let translationChain = null;

beforeEach(() => {
  translationChain = new CircularTranslationChain();
});

describe('the CircularTranslationChain module', () => {
  it('handles empty chain', () => {
    expect(x => translationChain.translate(1000)).toThrow();
  });

  it('handles null value', () => {
    expect(x => translationChain.translate(null)).toThrow();
  });

  it('handles string value', () => {
    expect(x => translationChain.translate('a')).toThrow();
  });

  it('handles negative input', () => {
    expect(x => translationChain.translate(-1)).toThrow();
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
    expect(translationChain.translate(value)).toBe("1 million trillion");
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
