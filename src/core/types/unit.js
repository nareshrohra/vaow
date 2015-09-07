import {
  Validator
}
from '../../util/validator';

export class Unit {
  constructor(word, value) {
    this.validate(word, value);

    this.word = word;
    this.value = value;
  }

  validate(word, value) {
    if (!Validator.isDefinedAndNotNull(word))
      throw 'Invalid argument for "word"';

    if (!Validator.isPositiveNumber(value))
      throw 'Invalid argument for "value". value should be a positive number';
  }

  getWord() {
    return this.word;
  }

  getValue() {
    return this.value;
  }
}
