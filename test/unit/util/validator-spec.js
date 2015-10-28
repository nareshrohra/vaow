
import {
  Validator
}
from'../../../src/util/validator';

describe('the Validator class', () => {
  it('checks null value for undefined/null', () => {
    let value = null;
    expect(Validator.isDefinedAndNotNull(value)).toBe(false);
  });

  it('checks undefined value for undefined/null', () => {
    let test = {};
    expect(Validator.isDefinedAndNotNull(test.notDefined)).toBe(false);
  });

  it('checks string for number', () => {
    let value = "a";
    expect(Validator.isNumber(value)).toBe(false);
  });

  it('checks negative for number', () => {
    let value = -1;
    expect(Validator.isNumber(-1)).toBe(true);
  });

  it('checks negative for number', () => {
    let value = -1;
    expect(Validator.isNumber(-1)).toBe(true);
  });

  it('checks 0 for number', () => {
    let value = 0;
    expect(Validator.isNumber(value)).toBe(true);
  });

  it('checks positive for non-zero positive number', () => {
    let value = 1;
    expect(Validator.isNumber(value)).toBe(true);
  });

  it('checks 0 for positive number', () => {
    let value = 0;
    expect(Validator.isPositiveNumber(value)).toBe(true);
  });

  it('checks positive for positive number', () => {
    let value = 1;
    expect(Validator.isPositiveNumber(value)).toBe(true);
  });

  it('checks string for non-zero positive number', () => {
    let value = "a";
    expect(Validator.isNonZeroPositiveNumber(value)).toBe(false);
  });

  it('checks negative for non-zero positive number', () => {
    let value = -1;
    expect(Validator.isNonZeroPositiveNumber(-1)).toBe(false);
  });

  it('checks 0 for non-zero positive number', () => {
    let value = 0;
    expect(Validator.isNonZeroPositiveNumber(value)).toBe(false);
  });

  it('checks positive for non-zero positive number', () => {
    let value = 1;
    expect(Validator.isNonZeroPositiveNumber(value)).toBe(true);
  });
});
