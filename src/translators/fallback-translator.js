import {
  DigitFormatter
}
from '../core/formatters/digit-formatter';

export class FallbackTranslator {
  static translate(value) {
    let translatedValue = value.toString();
    let mantissa = this.getMantissa(translatedValue),
      exponent = this.getExponent(translatedValue);
    return DigitFormatter.format(mantissa) + (exponent > 1 ? ' X 10^' + exponent : '');
  }

  static getExponent(translatedValue) {
    return translatedValue.substring(translatedValue.indexOf("+") + 1);
  }

  static getMantissa(translatedValue) {
    let decimalPosition = translatedValue.indexOf('.');
    return translatedValue;
  }
}
