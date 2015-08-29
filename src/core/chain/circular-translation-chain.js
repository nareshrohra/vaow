import {
  TranslationChain
}
from './translation-chain';

export class CircularTranslationChain extends TranslationChain {
  constructor(fallbackTranslator) {
    super(fallbackTranslator);
  }

  performMagnitudeTranslation() {
    //TODO: refactor
    let result = this.magnitudeChain.translate(this.currentValue);
    if (result.isOverflow()) {
      this.finalResult.increaseByMagnitude(result.getWord());
      this.currentValue = result.getDigitValue();
      this.performMagnitudeTranslation();
    } else if (result.isUnderflow()) {
      this.finalResult.setDigitValue(result.getDigitValue());
    } else {
      this.finalResult.setDigitValue(result.getDigitValue());
      this.finalResult.increaseByMagnitude(result.getWord());
    }
  }
}
