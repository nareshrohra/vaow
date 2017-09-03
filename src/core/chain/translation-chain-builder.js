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
from '../constants/time/units';

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

export class TranslationChainBuilder {
  translationChain = null;

  build(options) {
    this._translationChain = options.TranslateRecursively ? new RecursiveTranslationChain(new CircularTranslationChain()) : new CircularTranslationChain();
    
    if(options.Type === TranslatorOptions.Type.Time) {
      this._addTimeChainElements();
    }

    this._addMagnitudesAndOrder(options.MagnitudeOptions);

    return this._translationChain;
  }

  _addTimeChainElements() {
    this._translationChain.addUnits(Time.All);
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
