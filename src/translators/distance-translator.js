import {
  TranslatorBase
}
from './translator-base';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../core/types/translator-options';

export class DistanceTranslator extends TranslatorBase {
  constructor(magnitudeOptions, translateRecursively = false) {
    super(magnitudeOptions, translateRecursively);
    this._setType(TranslatorOptions.Type.Distance);
    this.constructChain();
  }
}
