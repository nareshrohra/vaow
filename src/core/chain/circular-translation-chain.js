import {
  TranslationChain
}
from './translation-chain';

export class CircularTranslationChain extends TranslationChain {
  constructor() {
    super();
  }

  continueWithOrderOfMagnitudeTranslation(value) {
    if (this.orderOfMagnitudeChain.isNotEmpty()) {
      let result = this.orderOfMagnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.result.applyElementTranslationResult(result);
      } else if (result.isOverflow()) {
        this.result.applyElementTranslationResultAsOrderOfMagnitude(result);
        this.continueWithOrderOfMagnitudeTranslation(this.result.getFactoredValue());
      } else {
        this.result.applyElementTranslationResultAsOrderOfMagnitude(result);
      }
    }
  }
}
