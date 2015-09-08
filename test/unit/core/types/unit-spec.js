import {
  Locale
}
from '../../../../src/locale';

import {
  Unit
}
from '../../../../src/core/types/unit';

describe('the Unit class', () => {
  it('handles null value for word', () => {
    expect(x => new Unit(null, 1000)).toThrow(Locale.Error.InvalidArgWord);
  });

  it('handles undefined value for word', () => {
    let test = {};
    expect(x => new Unit(test.notDefined, 1000)).toThrow(Locale.Error.InvalidArgWord);
  });

  it('handles null for value', () => {
    expect(x => new Unit('meter', null)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('handles undefined for value', () => {
    let test = {};
    expect(x => new Unit('meter', test.notDefined)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('handles negative for value', () => {
    expect(x => new Unit('meter', -1000)).toThrow(Locale.Error.InvalidArgPositiveNumberValue);
  });

  it('gets value', () => {
    let grand = new Unit('meter', 1000);
    expect(grand.getValue()).toBe(1000);
  });

  it('gets word', () => {
    let grand = new Unit('meter', 1000);
    expect(grand.getWord()).toBe('meter');
  });
});
