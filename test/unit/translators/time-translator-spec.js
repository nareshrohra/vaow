import {
  TimeTranslator
}
from '../../../src/translators/time-translator';

import {
  Magnitudes
}
from '../../../src/core/constants/magnitude/magnitudes';

import {
  Time
}
from '../../../src/core/constants/time/units';

let translator = null;

beforeEach(() => {
  translator = new TimeTranslator.getInstance();
});

describe('the TimeTranslator module', () => {
  it('handles null input', () => {
    expect(x => translator.translate(null)).toThrow();
  });

  it('handles string input', () => {
    expect(x => translator.translate("a")).toThrow();
  });

  it('handles negative input', () => {
    expect(x => translator.translate(-1)).toThrow();
  });

  it('translates 0 seconds', () => {
    expect(translator.translate(0)).toBe('0 seconds');
  });

  it('translates 30 seconds', () => {
    expect(translator.translate(30)).toBe('30 seconds');
  });

  it('translates a minute', () => {
    let value = Time.Minute.getValue();
    expect(translator.translate(value)).toBe('1 minutes');
  });

  it('translates an hour', () => {
    let value = Time.Hour.getValue();
    expect(translator.translate(value)).toBe('1 hours');
  });

  it('translates a day', () => {
    let value = Time.Day.getValue();
    expect(translator.translate(value)).toBe('1 days');
  });

  it('translates a month', () => {
    let value = Time.Month.getValue();
    expect(translator.translate(value)).toBe('1 months');
  });

  it('translates a year', () => {
    let value = Time.Year.getValue();
    expect(translator.translate(value)).toBe('1 years');
  });

  it('translates a decade', () => {
    let value = Time.Decade.getValue();
    expect(translator.translate(value)).toBe('1 decades');
  });

  it('translates a century', () => {
    let value = Time.Century.getValue();
    expect(translator.translate(value)).toBe('1 centuries');
  });

  it('translates a million centuries', () => {
    let value = Magnitudes.Million.getValue() * Time.Century.getValue();
    expect(translator.translate(value)).toBe('1 million centuries');
  });

  it('translates 100 million centuries', () => {
    let value = 100 * Magnitudes.Million.getValue() * Time.Century.getValue();
    expect(translator.translate(value)).toBe('100 million centuries');
  });
});
