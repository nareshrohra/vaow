import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

export class NumberFormatter {
  static format(value) {
    if(Validator.isDefinedAndNotNull(value)) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      throw Locale.Error.InvalidArgValue;
    }
  }
}
