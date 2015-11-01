import {
  Locale
}
from '../../../../src/locale';

import {
  NumberFormatter
}
from '../../../../src/core/formatters/number-formatter';

describe('the NumberFormatter class', () => {
  it('handles null value', () => {
    expect(x => NumberFormatter.format(null)).toThrow(Locale.Error.InvalidArgNumberValue);
  });

  it('handles undefined value', () => {
    let test = {};
    expect(x => NumberFormatter.format(test.undefined)).toThrow(Locale.Error.InvalidArgNumberValue);
  });

  it('formats 100', () => {
    expect(NumberFormatter.format(100)).toBe('100');
  });

  it('formats 10,000', () => {
    expect(NumberFormatter.format(10000)).toBe('10,000');
  });

  it('formats 100,000', () => {
    expect(NumberFormatter.format(100000)).toBe('100,000');
  });

  it('formats 15,000,000', () => {
    expect(NumberFormatter.format(15 * Math.pow(10, 6))).toBe('1.5 x 10^7');
  });

  it('formats 135,000,000', () => {
    expect(NumberFormatter.format(135 * Math.pow(10, 6))).toBe('1.35 x 10^8');
  });

  it('formats -100', () => {
    expect(NumberFormatter.format(-100)).toBe('-100');
  });

  it('formats -100,000', () => {
    expect(NumberFormatter.format(-100000)).toBe('-100,000');
  });
});
