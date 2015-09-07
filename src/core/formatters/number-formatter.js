import {
  Validator
}
from '../../util/validator';

export class NumberFormatter {
  static format(value) {
    if(Validator.isDefinedAndNotNull(value)) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      throw 'Invalid argument for "value"';
    }
  }
}
