
import {
  CircularTranslationChain
}
from '../../../../src/core/chain/circular-translation-chain';

import {
  Magnitude, OrderOfMagnitude
}
from '../../../../src/core/types/magnitude';

import {
  Unit
}
from '../../../../src/core/types/unit';

import {
  Magnitudes, OrderOfMagnitudes
}
from '../../../../src/core/constants/number/order-of-magnitudes';

import {
  Units
}
from '../../../../src/core/constants/number/units';

import {
  Tens
}
from '../../../../src/core/constants/number/tens';

let translationChain = null;

describe('the CircularTranslationChain class', () => {
  beforeEach(() => {
    translationChain = new CircularTranslationChain();
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

  it('translates with value in multiple OrderOfMagnitudes', () => {
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Billion);
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Trillion);

    let value = OrderOfMagnitudes.Million.getValue() * OrderOfMagnitudes.Trillion.getValue();
    expect(translationChain.translate(value)).toBe("1 million trillion");
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

  it('translates with unit and magnitude but value is within units', () => {
    let mm = new Unit("millimeters", 0);
    translationChain.addUnit(mm);

    let feet = new Unit("feet", 304.8);
    translationChain.addUnit(feet);

    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);

    let value = 100 * feet.getValue();
    expect(translationChain.translate(value)).toBe("100 feet");
  });

  it('translates with interleaved OrderOfMagnitudes', () => {
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Trillion);

    let value = OrderOfMagnitudes.Billion.getValue();
    expect(translationChain.translate(value)).toBe("1,000 million");
  });

  it('translates with rounding', () => {
    translationChain.addOrderOfMagnitude(OrderOfMagnitudes.Million);

    let value = 1.25 * OrderOfMagnitudes.Million.getValue();
    expect(translationChain.translate(value)).toBe("1.25 million");
  });
});

describe('the CircularTranslationChain class with magnitude translation', () => {
  beforeEach(() => {
    translationChain = new CircularTranslationChain();
    translationChain.addMagnitudes(Units.All);
    translationChain.addMagnitudes(Tens.All);
  });

  it('translates 0', () => {
    let grand = new OrderOfMagnitude('grand', 1000);
    translationChain.addOrderOfMagnitude(grand);
    expect(translationChain.translate(0)).toBe("0");
  });

  it('translates 1000', () => {
    let grand = new OrderOfMagnitude('grand', 1000);
    translationChain.addOrderOfMagnitude(grand);
    expect(translationChain.translate(1000)).toBe("1 grand");
  });

  it('translates value in units', () => {
    expect(translationChain.translate(5)).toBe("five");
  });

  it('translates value in units-tens', () => {
    expect(translationChain.translate(55)).toBe("fifty five");
    expect(translationChain.result.getRemainder()).toBe(0);
  });

  it('translates with value in multiple OrderOfMagnitudes and magnitude in units', () => {
    translationChain.addOrderOfMagnitudes([OrderOfMagnitudes.Million, OrderOfMagnitudes.Billion, OrderOfMagnitudes.Trillion]);

    let value = OrderOfMagnitudes.Million.getValue() * OrderOfMagnitudes.Trillion.getValue();
    expect(translationChain.translate(value)).toBe("1 million trillion");
  });

  it('translates with value in multiple OrderOfMagnitudes and magnitude in tens', () => {
    translationChain.addOrderOfMagnitudes([OrderOfMagnitudes.Million, OrderOfMagnitudes.Billion, OrderOfMagnitudes.Trillion]);

    let value = 11 * OrderOfMagnitudes.Million.getValue() * OrderOfMagnitudes.Trillion.getValue();
    expect(translationChain.translate(value)).toBe("11 million trillion");
  });

  it('translates with value in multiple OrderOfMagnitudes and magnitude in unit-tens', () => {
    translationChain.addOrderOfMagnitudes([OrderOfMagnitudes.Million, OrderOfMagnitudes.Billion, OrderOfMagnitudes.Trillion]);

    let value = 32 * OrderOfMagnitudes.Million.getValue() * OrderOfMagnitudes.Trillion.getValue();
    expect(translationChain.translate(value)).toBe("32 million trillion");
  });
});
