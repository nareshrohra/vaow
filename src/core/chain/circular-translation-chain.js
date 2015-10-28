import {
  TranslationChain
}
from './translation-chain';

export class CircularTranslationChain extends TranslationChain {
  constructor(fallbackTranslator) {
    super(fallbackTranslator);
  }

  continueWithOrderOfMagnitudeTranslation(value) {
    if (this.orderOfMagnitudeChain.isNotEmpty()) {
      let result = this.orderOfMagnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.finalResult.applyElementTranslationResult(result);
        this.justDoMagnitudeTranslation(this.finalResult.getFactoredValue());
      } else if (result.isOverflow()) {
        this.finalResult.applyElementTranslationResultAsOrderOfMagnitude(result);
        this.continueWithOrderOfMagnitudeTranslation(this.finalResult.getFactoredValue());
      } else {
        this.finalResult.applyElementTranslationResultAsOrderOfMagnitude(result);
        this.justDoMagnitudeTranslation(this.finalResult.getFactoredValue());
      }
    }
  }
}
