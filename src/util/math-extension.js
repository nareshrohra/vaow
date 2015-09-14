import {
  Validator
}
from './validator';

import {
  Locale
}
from '../locale';

export class MathExtension {
  static round(number, decimalPoints) {
    decimalPoints = decimalPoints || 0;

    if (!Validator.isNumber(number)) {
      throw Locale.Error.InvalidArgNumber;
    }

    if (!Validator.isPositiveNumber(decimalPoints)) {
      throw Locale.Error.InvalidArgPositiveDecimalPoints;
    }
    return MathExtension._decimalAdjust('round', number, decimalPoints * -1);
  }

  //referenced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  static _decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;

    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }

    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));

    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }
}
