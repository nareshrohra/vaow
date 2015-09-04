import {
  Magnitudes
}
from '../core/constants/magnitude/magnitudes';

export class TranslatorHelper {
  static addMagnitudes(translationChain) {
    translationChain.addMagnitude(Magnitudes.Million);
    translationChain.addMagnitude(Magnitudes.Billion);
    translationChain.addMagnitude(Magnitudes.Trillion);
    translationChain.addMagnitude(Magnitudes.Quadrillion);
    translationChain.addMagnitude(Magnitudes.Quintillion);
    translationChain.addMagnitude(Magnitudes.Sextillion);
    translationChain.addMagnitude(Magnitudes.Septillion);
    translationChain.addMagnitude(Magnitudes.Octillion);
    translationChain.addMagnitude(Magnitudes.Nonillion);
    translationChain.addMagnitude(Magnitudes.Decillion);
    translationChain.addMagnitude(Magnitudes.Undecillion);
  }
}
