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
    this.result = null;
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

  copyFrom(translationChain) {
      this.unitChain.empty();
      this.unitChain.copyFrom(translationChain.unitChain);
      this.magnitudeChain.empty();
      this.magnitudeChain.copyFrom(translationChain.magnitudeChain);
      this.orderOfMagnitudeChain.empty();
      this.orderOfMagnitudeChain.copyFrom(translationChain.orderOfMagnitudeChain);
  }

  translate(value) {
    if (Validator.isPositiveNumber(value)) {
      if (this.unitChain.isNotEmpty() || this.magnitudeChain.isNotEmpty() || this.orderOfMagnitudeChain.isNotEmpty()) {
        this.performTranslation(value);
        return this.result.toString();
      } else {
        throw Locale.Error.UnitsMagnitudesNotAdded;
      }
    } else {
      throw Locale.Error.InvalidArgPositiveNumberValue;
    }
  }

  reset(value) {
    this.result = new TranslationResult();
    this.result.setFactoredValue(value);
  }

  performTranslation(value) {
    this.reset(value);
    this.continueWithUnitTranslation(value);
  }

  continueWithUnitTranslation(value) {
    if (this.unitChain.isNotEmpty()) {
      let result = this.unitChain.translate(value),
        remainderFromUnitTranslation = 0;
      if (!result.isUnderflow()) {
        this.result.applyElementTranslationResultAsUnit(result);
        remainderFromUnitTranslation = result.getRemainder();
      } else {
        this.result.applyElementTranslationResult(result);
        this.continueWithMagnitudeTranslation(this.result.getFactoredValue());
      }
      if (result.isOverflow()) {
        this.continueWithMagnitudeTranslation(this.result.getFactoredValue());
        if(remainderFromUnitTranslation > 0) {
          this.result.setRemainder(remainderFromUnitTranslation);
        }
      }
    } else {
      this.continueWithMagnitudeTranslation(this.result.getFactoredValue());
    }
  }

  continueWithMagnitudeTranslation(value) {
    if (this.magnitudeChain.isNotEmpty()) {
      let result = this.magnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.result.applyElementTranslationResult(result);
      } else if (result.isIncomplete()) {
        this.result.applyElementTranslationResultAsMagnitude(result);
        this.justDoMagnitudeTranslation(this.result.getRemainder());
      } else {
        this.result.applyElementTranslationResultAsMagnitude(result);
      }
      if (result.isOverflow()) {
        this.continueWithOrderOfMagnitudeTranslation(this.result.getFactoredValue());
      }
    } else {
      this.continueWithOrderOfMagnitudeTranslation(this.result.getFactoredValue());
    }
  }

  justDoMagnitudeTranslation(value) {
    if (this.magnitudeChain.isNotEmpty()) {
      let result = this.magnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.result.applyElementTranslationResult(result);
      } else if (result.isIncomplete()) {
        this.result.applyElementTranslationResultAsMagnitude(result);
        this.justDoMagnitudeTranslation(this.result.getRemainder());
      } else {
        this.result.setRemainder(0);
        this.result.applyElementTranslationResultAsMagnitude(result);
      }
    }
  }

  continueWithOrderOfMagnitudeTranslation(value) {
    if (this.orderOfMagnitudeChain.isNotEmpty()) {
      let result = this.orderOfMagnitudeChain.translate(value);
      if (result.isUnderflow()) {
        this.result.applyElementTranslationResult(result);
      } else {
        this.result.applyElementTranslationResultAsOrderOfMagnitude(result);
      }
    }
  }
}
