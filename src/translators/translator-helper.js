import {
  MagnitudeTranslationElement
}
from '../core/constants/magnitude/translation-elements';

export class TranslatorHelper {
  static addMagnitudeChainElements(translationChain) {
    translationChain.addMagnitude(MagnitudeTranslationElement.Million);
    translationChain.addMagnitude(MagnitudeTranslationElement.Billion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Trillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Quadrillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Quintillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Sextillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Septillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Octillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Nonillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Decillion);
    translationChain.addMagnitude(MagnitudeTranslationElement.Undecillion);
  }
}
