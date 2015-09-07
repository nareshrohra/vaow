import {
  Unit
}
from '../../../../src/core/types/unit';

let invalidArgWordError = 'Invalid argument for "word"';
let invalidArgValueError = 'Invalid argument for "value". value should be a positive number';

describe('the Unit class', () => {
  it('handles null value for word', () => {
    expect(x => new Unit(null, 1000)).toThrow(invalidArgWordError);
  });

  it('handles undefined value for word', () => {
    let test = {};
    expect(x => new Unit(test.notDefined, 1000)).toThrow(invalidArgWordError);
  });

  it('handles null for value', () => {
    expect(x => new Unit('meter', null)).toThrow(invalidArgValueError);
  });

  it('handles undefined for value', () => {
    let test = {};
    expect(x => new Unit('meter', test.notDefined)).toThrow(invalidArgValueError);
  });

  it('handles negative for value', () => {
    expect(x => new Unit('meter', -1000)).toThrow(invalidArgValueError);
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
