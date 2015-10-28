import {
  Locale
}
from '../../locale';

import {
  Validator
}
from '../../util/validator';

import {
  NumberFormatter
}
from './number-formatter';

export class TranslationResultFormatter {
  static format(translationResult) {
    if (Validator.isDefinedAndNotNull(translationResult)) {

      let digitValue = this.getDigitValueString(translationResult),
        magnitudes = this.getMagnitudesString(translationResult),
        orderOfMagnitudes = this.getOrderOfMagnitudesString(translationResult),
        unit = this.getUnitString(translationResult);

      return [
          (magnitudes === '' ? digitValue : ''),
          magnitudes,
          orderOfMagnitudes,
          unit
        ].filter(function (val) {return val;}).join(' ');
    } else {
      throw Locale.Error.InvalidArgTranslationResult;
    }
  }

  static getDigitValueString(translationResult) {
    let digitValue = translationResult.getFactoredValue();
    return (Validator.isDefinedAndNotNull(digitValue) ? NumberFormatter.format(digitValue) : '');
  }

  static getUnitString(translationResult) {
    let unit = translationResult.getUnit();
    return (Validator.isDefinedAndNotNull(unit) ? unit : '');
  }

  static getMagnitudesString(translationResult) {
    let magnitudes = translationResult.getMagnitudes();
    return (magnitudes.length > 0 ? magnitudes.join(' ') : '');
  }

  static getOrderOfMagnitudesString(translationResult) {
    let orderOfMagnitudes = translationResult.getOrderOfMagnitudes();
    return (orderOfMagnitudes.length > 0 ? orderOfMagnitudes.reverse().join(' ') : '');
  }
}
