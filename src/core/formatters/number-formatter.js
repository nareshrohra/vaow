import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

import {
  MathExtension
}
from '../../util/math-extension';

export class NumberFormatter {
  static format(value) {
    if(Validator.isDefinedAndNotNull(value)) {
      if(Validator.isNumber(value)) {
        return MathExtension.round(value, 2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return value;
      }
    } else {
      throw Locale.Error.InvalidArgValue;
    }
  }
}
