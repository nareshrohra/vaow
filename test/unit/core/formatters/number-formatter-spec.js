import {
  NumberFormatter
}
from '../../../../src/core/formatters/number-formatter';

let valueArgError = 'Invalid argument for "value"';

describe('the NumberFormatter class', () => {
  it('handles null value', () => {
    expect(x => NumberFormatter.format(null)).toThrow(valueArgError);
  });

  it('handles undefined value', () => {
    let test = {};
    expect(x => NumberFormatter.format(test.undefined)).toThrow(valueArgError);
  });

  it('formats 100', () => {
    expect(NumberFormatter.format(100)).toBe('100');
  });

  it('formats 10,000', () => {
    expect(NumberFormatter.format(10000)).toBe('10,000');
  });

  it('formats 1,000,000', () => {
    expect(NumberFormatter.format(1000000)).toBe('1,000,000');
  });
});
