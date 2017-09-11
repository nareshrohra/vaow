import {
  TranslationChain
}
from './translation-chain';

export class RecursiveTranslationChain extends TranslationChain {

  constructor(underlyingChain) {
      super();
      this._underlyingChain = underlyingChain;
      this._isUnderlyingChainSetup = false;
  }

  addUnit(unit) {
    this._isUnderlyingChainSetup = false;
    super.addUnit(unit);
  }

  addUnits(units) {
    this._isUnderlyingChainSetup = false;
    super.addUnits(units);
  }

  addMagnitude(magnitude) {
    this._isUnderlyingChainSetup = false;
    super.addMagnitude(magnitude);
  }

  addMagnitudes(magnitudes) {
    this._isUnderlyingChainSetup = false;
    super.addMagnitudes(magnitudes);
  }

  addOrderOfMagnitude(orderOfMagnitude) {
    this._isUnderlyingChainSetup = false;
    super.addOrderOfMagnitude(orderOfMagnitude);
  }

  addOrderOfMagnitudes(orderOfMagnitudes) {
    this._isUnderlyingChainSetup = false;
    super.addOrderOfMagnitudes(orderOfMagnitudes);
  }

  continueWithOrderOfMagnitudeTranslation(value) {
    this._underlyingChain.continueWithOrderOfMagnitudeTranslation(value);
  }

  initializeUnderlyingChain() {
      if(!this._isUnderlyingChainSetup) {
          this._underlyingChain.copyFrom(this);
          this._isUnderlyingChainSetup = true;
      }
  }

  translate(value, startFromMagnitude = false) {
      this.initializeUnderlyingChain();
      if(startFromMagnitude) {
          this._underlyingChain.reset(value);
          this._underlyingChain.continueWithMagnitudeTranslation(value);
      } else {
          this._underlyingChain.translate(value);
      }
      let initialResult = this._underlyingChain.result;
      let result = '';
      
      if(initialResult.getFactoredValue() >= 1 && (initialResult.getFactoredValue() !== value || startFromMagnitude == false)) {
          let factoredValue = Math.floor(initialResult.getFactoredValue());
          initialResult.setFactoredValue(-1);
          let factoredValueTranslation = this.translate(factoredValue, true);
          result = (factoredValueTranslation ? factoredValueTranslation.trim() + ' ' : '') + initialResult.toString();
      } else {
          result = initialResult.toString();
      }

      if(initialResult.getRemainder() >= 1) {
          let remainderValueTranslation = this.translate(initialResult.getRemainder());
          return result + (remainderValueTranslation ? ' ' + remainderValueTranslation.trim() : '');
      } else {
        return result;
      }
  }
}
