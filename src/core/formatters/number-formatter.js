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
    if (Validator.isNumber(value)) {
      let formatStrategy = NumberFormatter.getFormattingStrategy(value);
      return formatStrategy.format(value);
    } else {
      throw Locale.Error.InvalidArgNumberValue;
    }
  }

  static getFormattingStrategy(value) {
    let preFormattedValue = value.toString();
    let formatStrategy = null;
    if (preFormattedValue.indexOf(Locale.PositiveExponent) !== -1) {
      formatStrategy = new ExponentFormattingStrategy();
    } else {
      formatStrategy = new NonExponentFormattingStrategy();
    }
    return formatStrategy;
  }
}

class NonExponentFormattingStrategy {
  exponentThreshold = Math.pow(10, 6);

  format(value) {
    if (Validator.isDefinedAndNotNull(value)) {
      if (Validator.isNumber(value)) {
        if (value < this.exponentThreshold) {
          return MathExtension.round(value, 2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
          return new ExponentFormattingStrategy().format(value.toExponential());
        }
      } else {
        return value;
      }
    } else {
      throw Locale.Error.InvalidArgNumberValue;
    }
  }
}

class ExponentFormattingStrategy {
  format(value) {
    let formattedValue = value.toString();
    let exponentIndex = formattedValue.indexOf(Locale.PositiveExponent);
    let exponent = formattedValue.substring(exponentIndex);
    let mantissa = formattedValue.substring(0, exponentIndex);
    return MathExtension.round(parseFloat(mantissa), 2).toString() + exponent.replace(Locale.PositiveExponent, Locale.ExponentDisplay);
  }
}
