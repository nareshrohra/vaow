import {
  DigitFormatter
}
from '../core/formatters/digit-formatter';

export class FallbackTranslator {
  translate(value) {
    let translationStrategy;
    let translatedValue = value.toString();
    if (translatedValue.indexOf('e+') !== -1) {
      translationStrategy = new HighExponentTranslationStrategy();
    } else {
      translationStrategy = new LowExponentTranslationStrategy();
    }
    return translationStrategy.translate(value);
  }
}

class LowExponentTranslationStrategy {
  translate(value) {
    let translatedValue = value.toString();
    let factorExponent = translatedValue.length - 1;
    if (factorExponent > 2) {
      let factor = Math.pow(10, factorExponent);
      return Math.round(value / factor).toString() + ' x 10^' + factorExponent.toString();
    } else {
      return translatedValue;
    }
  }
}

class HighExponentTranslationStrategy {
  translate(value) {
    let translatedValue = value.toString();
    let exponentIndex = translatedValue.indexOf('e+');
    let exponent = translatedValue.substring(exponentIndex);
    let mantissa = translatedValue.substring(0, exponentIndex);
    return Math.round(parseInt(mantissa)).toString() + exponent.replace('e+', ' x 10^');
  }
}
