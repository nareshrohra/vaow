import {
  DigitFormatter
}
from './digit-formatter';

export class TranslationResultFormatter {
  static format(translationResult) {
    let digitValue = translationResult.getDigitValue(),
      unit = translationResult.getUnit(),
      magnitudes = translationResult.getMagnitudes();

    return DigitFormatter.format(digitValue) + (magnitudes.length > 0 ? ' ' + magnitudes.join(' ') : '') + (unit ? ' ' + unit : '');
  }
}
