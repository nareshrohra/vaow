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

  it('formats -100', () => {
    expect(NumberFormatter.format(-100)).toBe('-100');
  });

  it('formats -100,000', () => {
    expect(NumberFormatter.format(-100000)).toBe('-100,000');
  });
});
