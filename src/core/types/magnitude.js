import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

export class Magnitude {
  constructor(word, value) {
    this.validate(word, value);

    this.word = word;
    this.value = value;
  }

  validate(word, value) {
    if (!Validator.isDefinedAndNotNull(word))
      throw Locale.Error.InvalidArgWord;

    if (!Validator.isPositiveNumber(value))
      throw Locale.Error.InvalidArgPositiveNumberValue;
  }

  getWord() {
    return this.word;
  }

  getValue() {
    return this.value;
  }
}
