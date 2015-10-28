import {
  Locale
}
from '../../../../src/locale';

import {
  TranslationChain
}
from '../../../../src/core/chain/translation-chain';

import {
  Magnitude, OrderOfMagnitude
}
from '../../../../src/core/types/magnitude';

import {
  Unit
}
from '../../../../src/core/types/unit';

import {
  OrderOfMagnitudes
}
from '../../../../src/core/constants/number/order-of-magnitudes';

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
    let grand = new OrderOfMagnitude('grand', 1000);
    translationChain.addOrderOfMagnitude(grand);
    expect(translationChain.translate(0)).toBe("0");
  });

  it('translates with a single chain element', () => {
    let grand = new OrderOfMagnitude('grand', 1000);
    translationChain.addOrderOfMagnitude(grand);
    expect(translationChain.translate(1000)).toBe("1 grand");
  });

  it('translates with value in multiple magnitudes', () => {
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Billion);
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Trillion);

    let value = OrderOfMagnitudes.Million.getValue() * OrderOfMagnitudes.Trillion.getValue();
    expect(translationChain.translate(value)).toBe("1 x 10^6 trillion");
  });

  it('translates with value in multiple magnitudes with addMagnitudes', () => {
    translationChain.addOrderOfMagnitudes([OrderOfMagnitudes.Million, OrderOfMagnitudes.Billion, OrderOfMagnitudes.Trillion]);

    let value = OrderOfMagnitudes.Million.getValue() * OrderOfMagnitudes.Trillion.getValue();
    expect(translationChain.translate(value)).toBe("1 x 10^6 trillion");
  });

  it('translates a very large value', () => {
    translationChain.addOrderOfMagnitudes([OrderOfMagnitudes.Million, OrderOfMagnitudes.Billion, OrderOfMagnitudes.Trillion]);

    let value = OrderOfMagnitudes.Million.getValue() * OrderOfMagnitudes.Decillion.getValue();
    expect(translationChain.translate(value)).toBe("1 x 10^27 trillion");
  });

  it('translates with units and OrderOfMagnitudes', () => {
    let mm = new Unit("millimeters", 0);
    translationChain.addUnit(mm);

    let feet = new Unit("feet", 304.8);
    translationChain.addUnit(feet);

    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Billion);

    let value = OrderOfMagnitudes.Million.getValue() * feet.getValue();
    expect(translationChain.translate(value)).toBe("1 million feet");
  });

  it('translates with multiple units', () => {
    let mm = new Unit("millimeters", 0);
    let feet = new Unit("feet", 304.8);
    translationChain.addUnits([mm, feet]);

    let value = 100 * feet.getValue();
    expect(translationChain.translate(value)).toBe("100 feet");
  });

  it('translates with unit and magnitude but value is within units', () => {
    let mm = new Unit("millimeters", 0);
    translationChain.addUnit(mm);

    let feet = new Unit("feet", 304.8);
    translationChain.addUnit(feet);

    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);

    let value = 100 * feet.getValue();
    expect(translationChain.translate(value)).toBe("100 feet");
  });

  it('translates with interleaved magnitudes', () => {
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Trillion);

    let value = OrderOfMagnitudes.Billion.getValue();
    expect(translationChain.translate(value)).toBe("1,000 million");
  });

  it('translates with rounding', () => {
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);

    let value = 1.256 * OrderOfMagnitudes.Million.getValue();
    expect(translationChain.translate(value)).toBe("1.26 million");
  });
});
