import {
  CircularTranslationChain
}
from '../../src/core/chain/circular-translation-chain';

import {
  TranslationChainElement
}
from '../../src/core/chain/translation-chain-element';

import {
  Magnitude
}
from '../../src/core/types/magnitude';

import {
  MagnitudeTranslationElement
}
from '../../src/core/constants/magnitude/translation-elements';

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
    expect(x => translationChain.translate()).toThrow();
  });

  it('translates with a single chain element', () => {
    let grand = new Unit('grand', 1000);
    let grandChainElement = new TranslationChainElement(grand);
    translationChain.addMagnitude(grandChainElement);
    expect(translationChain.translate(1000)).toBe("1 grand");
  });

  it('translates with unit and magnitude in between', () => {
    let mm = new Unit("millimeters", 0),
      mmChainElement = new TranslationChainElement(mm);
    translationChain.addUnit(mmChainElement);

    let feet = new Unit("feet", 304.8),
      feetChainElement = new TranslationChainElement(feet);
    translationChain.addUnit(feetChainElement);

    translationChain.addMagnitude(MagnitudeTranslationElement.Million);

    let value = Magnitudes.Million.getValue() * feet.getValue();
    expect(translationChain.translate(value)).toBe("1 million feet");
  });

  it('translates with unit and magnitude in between but value is below magnitude', () => {
    let mm = new Unit("millimeters", 0),
      mmChainElement = new TranslationChainElement(mm);
    translationChain.addUnit(mmChainElement);

    let feet = new Unit("feet", 304.8),
      feetChainElement = new TranslationChainElement(feet);
    translationChain.addUnit(feetChainElement);

    translationChain.addMagnitude(MagnitudeTranslationElement.Million);

    let value = 100 * feet.getValue();
    expect(translationChain.translate(value)).toBe("100 feet");
  });
});
