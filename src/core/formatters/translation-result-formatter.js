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
      let digitValue = translationResult.getDigitValue(),
        unit = translationResult.getUnit(),
        magnitudes = translationResult.getMagnitudes();

      return NumberFormatter.format(digitValue) +
        (magnitudes.length > 0 ? ' ' + magnitudes.reverse().join(' ') : '') +
        (unit ? ' ' + unit : '');
    } else {
      throw Locale.Error.InvalidArgTranslationResult;
    }
  }
}
