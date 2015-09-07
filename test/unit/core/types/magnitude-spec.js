import {
  Magnitude
}
from '../../../../src/core/types/magnitude';

let invalidArgWordError = 'Invalid argument for "word"';
let invalidArgValueError = 'Invalid argument for "value". value should be a positive number';

describe('the Magnitude class', () => {
  it('handles null value for word', () => {
    expect(x => new Magnitude(null, 1000)).toThrow(invalidArgWordError);
  });

  it('handles undefined value for word', () => {
    let test = {};
    expect(x => new Magnitude(test.notDefined, 1000)).toThrow(invalidArgWordError);
  });

  it('handles null for value', () => {
    expect(x => new Magnitude('grand', null)).toThrow(invalidArgValueError);
  });

  it('handles undefined for value', () => {
    let test = {};
    expect(x => new Magnitude('grand', test.notDefined)).toThrow(invalidArgValueError);
  });

  it('handles negative for value', () => {
    expect(x => new Magnitude('grand', -1000)).toThrow(invalidArgValueError);
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
