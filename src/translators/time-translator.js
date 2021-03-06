import {
  TranslatorBase
}
from './translator-base';

import {
  TranslatorOptions, MagnitudeOptions
}
from '../core/types/translator-options';

export class TimeTranslator extends TranslatorBase {
  constructor(magnitudeOptions, translateRecursively = false) {
    super(magnitudeOptions, translateRecursively);
    this._setType(TranslatorOptions.Type.Time);
    this.constructChain();
  }
}
