import {
  MathExtension
}
from '../../../src/util/math-extension';

import {
  Locale
}
from '../../../src/locale';

describe('the MathExtension class', () => {
  it('checks null value for number when rounding', () => {
    let value = null;
    expect(x => MathExtension.round(value)).toThrow(Locale.Error.InvalidArgNumber);
  });

  it('checks undefined value for number when rounding', () => {
    let test = {};
    expect(x => MathExtension.round(test.notDefined)).toThrow(Locale.Error.InvalidArgNumber);
  });

  it('checks string value for number when rounding', () => {
    let value = "a";
    expect(x => MathExtension.round(value)).toThrow(Locale.Error.InvalidArgNumber);
  });

  it('checks string value for decimalPoints when rounding', () => {
    let decimalPoints = "a";
    expect(x => MathExtension.round(5, decimalPoints)).toThrow(Locale.Error.InvalidArgPositiveDecimalPoints);
  });

  it('rounds number with third decimal value < 5', () => {
    let value = 4.444;
    expect(MathExtension.round(value, 2)).toBe(4.44);
  });

  it('rounds number with third decimal value >= 5', () => {
    let value = 4.445;
    expect(MathExtension.round(value, 2)).toBe(4.45);
  });

  it('rounds number with second decimal value < 5', () => {
    let value = 4.44;
    expect(MathExtension.round(value, 1)).toBe(4.4);
  });

  it('rounds number with first decimal value < 5', () => {
    let value = 4.4;
    expect(MathExtension.round(value)).toBe(4);
  });

  it('rounds number with first decimal value >= 5', () => {
    let value = 4.5;
    expect(MathExtension.round(value)).toBe(5);
  });
});
