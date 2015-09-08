import {
  Validator
}
from '../util/validator';

import {
  Locale
}
from '../locale';

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
    let translatedValue = value.toString();
    let factorExponent = translatedValue.length - 1;
    if (factorExponent > 2) {
      let factor = Math.pow(10, factorExponent);
      return Math.round(value / factor).toString() + Locale.ExponentDisplay + factorExponent.toString();
    } else {
      return translatedValue;
    }
  }
}

class HighExponentTranslationStrategy {
  translate(value) {
    let translatedValue = value.toString();
    let exponentIndex = translatedValue.indexOf(Locale.PositiveExponent);
    let exponent = translatedValue.substring(exponentIndex);
    let mantissa = translatedValue.substring(0, exponentIndex);
    return Math.round(parseInt(mantissa)).toString() + exponent.replace(Locale.PositiveExponent, Locale.ExponentDisplay);
  }
}
