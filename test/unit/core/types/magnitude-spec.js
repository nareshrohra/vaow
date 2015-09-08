import {
  Locale
}
from '../../../../src/locale';

import {
  Magnitude
}
from '../../../../src/core/types/magnitude';

describe('the Magnitude class', () => {
  it('handles null value for word', () => {
    expect(x => new Magnitude(null, 1000)).toThrow(Locale.Error.InvalidArgWord);
  });

  it('handles undefined value for word', () => {
    let test = {};
    expect(x => new Magnitude(test.notDefined, 1000)).toThrow(Locale.Error.InvalidArgWord);
  });

  it('handles null for value', () => {
    expect(x => new Magnitude('grand', null)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('handles undefined for value', () => {
    let test = {};
    expect(x => new Magnitude('grand', test.notDefined)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('handles negative for value', () => {
    expect(x => new Magnitude('grand', -1000)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('gets value', () => {
    let grand = new Magnitude('grand', 1000);
    expect(grand.getValue()).toBe(1000);
  });

  it('gets word', () => {
    let grand = new Magnitude('grand', 1000);
    expect(grand.getWord()).toBe('grand');
  });
});
