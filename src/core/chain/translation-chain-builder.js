import {
  Validator
}
from '../../util/validator';

import {
  Units
}
from '../constants/number/units';

import {
  Tens
}
from '../constants/number/tens';

import {
  OrderOfMagnitudes
}
from '../constants/number/order-of-magnitudes';

import {
  Time
}
from '../constants/units/time';

import {
  Distance
}
from '../constants/units/distance';

import {
  Weight
}
from '../constants/units/weight';

import {
  CircularTranslationChain
}
from './circular-translation-chain';

import {
  RecursiveTranslationChain
}
from './recursive-translation-chain';

import {
  TranslatorOptions
} from '../types/translator-options';

let TypedUnits = {
  time: Time,
  weight: Weight,
  distance: Distance
};

export class TranslationChainBuilder {
  translationChain = null;

  build(options) {
    this._translationChain = options.TranslateRecursively ? new RecursiveTranslationChain(new CircularTranslationChain()) : new CircularTranslationChain();
    
    if(Validator.isDefinedAndNotNull(TypedUnits[options.Type])) {
      this._translationChain.addUnits(TypedUnits[options.Type].Default);
    }

    this._addMagnitudesAndOrder(options.MagnitudeOptions);

    return this._translationChain;
  }

  _addMagnitudesAndOrder(magnitudeOptions) {
    if(magnitudeOptions.TranslateMagnitudes) {
      this._addMagnitudes();
    }

    if(magnitudeOptions.TranslateVeryLowOrderOfMagnitudes) {
      this._addVeryLowOrderOfMagnitudes();
    }

    if(magnitudeOptions.TranslateLowOrderOfMagnitudes) {
      this._addLowOrderOfMagnitudes();
    }

    if(magnitudeOptions.TranslateHighOrderOfMagnitudes) {
      this._addHighOrderOfMagnitudes();
    }
  }

  _addMagnitudes(translationChain) {
    this._translationChain.addMagnitudes(Units.All);
    this._translationChain.addMagnitudes(Tens.All);
  }

  _addVeryLowOrderOfMagnitudes(translationChain) {
    this._translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.VeryLowOrderMagnitudes);
  }

  _addLowOrderOfMagnitudes(translationChain) {
    this._translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.LowOrderMagnitudes);
  }

  _addHighOrderOfMagnitudes(translationChain) {
    this._translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.HighOrderMagnitudes);
  }
}
