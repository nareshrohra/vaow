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
  _translateRecursively;

  constructor(magnitudeOptions = new MagnitudeOptions(), translateRecursively = false) {
    this._magnitudeOptions = magnitudeOptions;
    this._translateRecursively = translateRecursively;
  }

  _setType(type) {
    this._type = type;
  }

  constructChain() {
    let translatorOptions = new TranslatorOptions(this._type, this._magnitudeOptions, this._translateRecursively);
    let translationChainBuilder = new TranslationChainBuilder();
    this.translationChain = translationChainBuilder.build(translatorOptions);
  }

  translate(value) {
    return this.translationChain.translate(value);
  }
}
