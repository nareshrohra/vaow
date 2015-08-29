import {
  Chain
}
from './chain';

import {
  TranslationChainElement
}
from './translation-chain-element';

import {
  FallbackTranslator
}
from '../../translators/fallback-translator'

import {
  TranslationResult
}
from '../types/translation-result';

export class TranslationChain {
  constructor(fallbackTranslator) {
    this.unitChain = new Chain();
    this.magnitudeChain = new Chain();
    this.finalResult = null;
    this.currentValue = null;
    this.fallbackTranslator = fallbackTranslator || new FallbackTranslator();
  }

  addUnit(unitChainElement) {
    this.unitChain.addChainElement(unitChainElement);
  }

  addMagnitude(magnitudeChainElement) {
    this.magnitudeChain.addChainElement(magnitudeChainElement);
  }

  isUnitChainNotEmpty() {
    return this.unitChain.isNotEmpty();
  }

  isMagnitudeChainNotEmpty() {
    return this.magnitudeChain.isNotEmpty();
  }

  translate(value) {
    this.currentValue = value;
    if (this.isUnitChainNotEmpty() || this.isMagnitudeChainNotEmpty()) {
      this.performTranslation();
      return this.finalResult.toString();
    } else {
      throw 'Units and/or magnitudes are not added';
    }
  }

  performTranslation() {
    this.finalResult = new TranslationResult();
    if (this.isUnitChainNotEmpty()) {
      this.performUnitAndMagnitudeTranslation();
    } else {
      this.performMagnitudeTranslation();
    }
  }

  performUnitAndMagnitudeTranslation(isMagnitudeChainEmpty) {
    //TODO: refactor
    let result = this.unitChain.translate(this.currentValue);
    if (result.isOverflow()) {
      this.finalResult.setUnit(result.getWord());
      this.currentValue = result.getDigitValue();
      if (this.isMagnitudeChainNotEmpty()) {
        this.performMagnitudeTranslation();
      } else {
        this.performFallbackTranslation();
      }
    } else if (result.isUnderflow()) {
      this.finalResult.setDigitValue(result.getDigitValue());
    } else {
      this.finalResult.setUnit(result.getWord());
      this.finalResult.setDigitValue(result.getDigitValue());
    }
  }

  performMagnitudeTranslation() {
    //TODO: refactor
    let result = this.magnitudeChain.translate(this.currentValue);
    if (result.isOverflow()) {
      this.finalResult.increaseByMagnitude(result.getWord());
      this.currentValue = result.getDigitValue();
      this.performFallbackTranslation();
    } else if (result.isUnderflow()) {
      this.finalResult.setDigitValue(result.getDigitValue());
    } else {
      this.finalResult.setDigitValue(result.getDigitValue());
      this.finalResult.increaseByMagnitude(result.getWord());
    }
  }

  performFallbackTranslation(value) {
    let result = this.fallbackTranslator.translate(this.currentValue);
    this.finalResult.setDigitValue(result.digitValue);
  }
}
