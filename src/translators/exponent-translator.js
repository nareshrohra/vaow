import {
  Validator
}
from '../util/validator';

import {
  Locale
}
from '../locale';

import {
  MathExtension
}
from '../util/math-extension';

import {
  NumberFormatter
}
from '../core/formatters/number-formatter';

export class ExponentTranslator {
  translate(value) {
    if (Validator.isPositiveNumber(value)) {
      let translationStrategy;
      let translatedValue = value.toString();
      if (translatedValue.indexOf(Locale.PositiveExponent) !== -1) {
        translationStrategy = new HighExponentTranslationStrategy();
      } else {
        translationStrategy = new LowExponentTranslationStrategy();
      }
      return translationStrategy.translate(value);
    } else {
      throw Locale.Error.InvalidArgPositiveNumberValue;
    }
  }
}

class LowExponentTranslationStrategy {
  translate(value) {
    let factorExponent = Math.round(value).toString().length - 1;
    if (factorExponent > 2) {
      let factor = Math.pow(10, factorExponent);
      return MathExtension.round(value / factor, 2).toString() + Locale.ExponentDisplay + factorExponent.toString();
    } else {
      return MathExtension.round(value, 2).toString();
    }
  }
}

class HighExponentTranslationStrategy {
  translate(value) {
    let translatedValue = value.toString();
    let exponentIndex = translatedValue.indexOf(Locale.PositiveExponent);
    let exponent = translatedValue.substring(exponentIndex);
    let mantissa = translatedValue.substring(0, exponentIndex);
    return MathExtension.round(parseInt(mantissa), 2).toString() + exponent.replace(Locale.PositiveExponent, Locale.ExponentDisplay);
  }
}
