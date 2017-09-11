import {
  TranslatorBase
}
from './translator-base';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../core/types/translator-options';

export class WeightTranslator extends TranslatorBase {
  constructor(magnitudeOptions, translateRecursively = false) {
    super(magnitudeOptions, translateRecursively);
    this._setType(TranslatorOptions.Type.Weight);
    this.constructChain();
  }
}
