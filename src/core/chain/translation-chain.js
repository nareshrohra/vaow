import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

import {
  Chain
}
from './chain';

import {
  TranslationChainElement
}
from './translation-chain-element';

import {
  MagnitudeTranslationChainElement
}
from './magnitude-translation-chain-element'

import {
  TranslationResult
}
from '../types/translation-result';

export class TranslationChain {
  constructor() {
    this.unitChain = new Chain();
    this.magnitudeChain = new Chain();
    this.orderOfMagnitudeChain = new Chain();
    this.finalResult = null;
  }

  addUnit(unit) {
    if (Validator.isDefinedAndNotNull(unit)) {
      this.unitChain.addChainElement(new TranslationChainElement(unit));
    } else {
      throw Locale.Error.InvalidArgUnit;
    }
  }

  addUnits(units) {
    if (Validator.isDefinedAndNotNull(units)) {
      let unitsCount = units.length;
      for (let i = 0; i < unitsCount; i++) {
        this.addUnit(units[i]);
      }
    } else {
      throw Locale.Error.InvalidArgUnits;
    }
  }

  addMagnitude(magnitude) {
    if (Validator.isDefinedAndNotNull(magnitude)) {
      this.magnitudeChain.addChainElement(new MagnitudeTranslationChainElement(magnitude));
    } else {
      throw Locale.Error.InvalidArgMagnitude;
    }
  }

  addMagnitudes(magnitudes) {
    if (Validator.isDefinedAndNotNull(magnitudes)) {
      let count = magnitudes.length;
      for (let i = 0; i < count; i++) {
        this.addMagnitude(magnitudes[i]);
      }
    } else {
      throw Locale.Error.InvalidArgMagnitudes;
    }
  }

  addOrderOfMagnitude(orderOfMagnitude) {
    if (Validator.isDefinedAndNotNull(orderOfMagnitude)) {
      this.orderOfMagnitudeChain.addChainElement(new TranslationChainElement(orderOfMagnitude));
    } else {
      throw Locale.Error.InvalidArgOrderOfMagnitude;
    }
  }

  addOrderOfMagnitudes(orderOfMagnitudes) {
    if (Validator.isDefinedAndNotNull(orderOfMagnitudes)) {
      let magnitudesCount = orderOfMagnitudes.length;
      for (let i = 0; i < magnitudesCount; i++) {
        this.addOrderOfMagnitude(orderOfMagnitudes[i]);
      }
    } else {
      throw Locale.Error.InvalidArgOrderOfMagnitudes;
    }
  }

  translate(value) {
    if (Validator.isPositiveNumber(value)) {
      if (this.unitChain.isNotEmpty() || this.magnitudeChain.isNotEmpty() || this.orderOfMagnitudeChain.isNotEmpty()) {
        this.performTranslation(value);
        return this.finalResult.toString();
      } else {
        throw Locale.Error.UnitsMagnitudesNotAdded;
      }
    } else {
      throw Locale.Error.InvalidArgPositiveNumberValue;
    }
  }

  performTranslation(value) {
    this.finalResult = new TranslationResult();
    this.finalResult.setFactoredValue(value);
    this.continueWithUnitTranslation(value);
  }

  continueWithUnitTranslation(value) {
    if (this.unitChain.isNotEmpty()) {
      let result = this.unitChain.translate(value);
      if (!result.isUnderflow()) {
        this.finalResult.applyElementTranslationResultAsUnit(result);
        this.continueWithMagnitudeTranslation(this.finalResult.getFactoredValue());
      } else {
        this.finalResult.applyElementTranslationResult(result);
        this.continueWithMagnitudeTranslation(this.finalResult.getFactoredValue());
      }
      if (result.isOverflow()) {
        this.continueWithMagnitudeTranslation(this.finalResult.getFactoredValue());
      }
    } else {
      this.continueWithMagnitudeTranslation(this.finalResult.getFactoredValue());
    }
  }

  continueWithMagnitudeTranslation(value) {
    if (this.magnitudeChain.isNotEmpty()) {
      let result = this.magnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.finalResult.applyElementTranslationResult(result);
      } else if (result.isIncomplete()) {
        this.finalResult.applyElementTranslationResultAsMagnitude(result);
        this.justDoMagnitudeTranslation(this.finalResult.getRemainder());
      } else {
        this.finalResult.applyElementTranslationResultAsMagnitude(result);
      }
      if (result.isOverflow()) {
        this.continueWithOrderOfMagnitudeTranslation(this.finalResult.getFactoredValue());
      }
    } else {
      this.continueWithOrderOfMagnitudeTranslation(this.finalResult.getFactoredValue());
    }
  }

  justDoMagnitudeTranslation(value) {
    if (this.magnitudeChain.isNotEmpty()) {
      let result = this.magnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.finalResult.applyElementTranslationResult(result);
      } else if (result.isIncomplete()) {
        this.finalResult.applyElementTranslationResultAsMagnitude(result);
        this.justDoMagnitudeTranslation(this.finalResult.getRemainder());
      } else {
        this.finalResult.applyElementTranslationResultAsMagnitude(result);
      }
    }
  }

  continueWithOrderOfMagnitudeTranslation(value) {
    if (this.orderOfMagnitudeChain.isNotEmpty()) {
      let result = this.orderOfMagnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.finalResult.applyElementTranslationResult(result);
      } else {
        this.finalResult.applyElementTranslationResultAsOrderOfMagnitude(result);
      }
    }
  }
}
