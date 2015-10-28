import {
  TranslatorOptions, MagnitudeOptions
}
from '../core/types/translator-options';

import {
  TranslationChainBuilder
}
from '../core/chain/translation-chain-builder';

export class TranslatorBase {
  _magnitudeOptions;
  _type = null;

  constructor(magnitudeOptions = new MagnitudeOptions()) {
    this._magnitudeOptions = magnitudeOptions;
  }

  _setType(type) {
    this._type = type;
  }

  constructChain() {
    let translatorOptions = new TranslatorOptions(this._type, this._magnitudeOptions);
    let translationChainBuilder = new TranslationChainBuilder();
    this.translationChain = translationChainBuilder.build(translatorOptions);
  }

  translate(value) {
    return this.translationChain.translate(value);
  }
}
