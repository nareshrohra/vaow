import {
  TranslatorHelper
}
from './translator-helper';

import {
  CircularTranslationChain
}
from '../core/chain/circular-translation-chain';

export class NumberTranslator {
  static instance;

  static getInstance() {
    if (!NumberTranslator.instance) {
      NumberTranslator.instance = new NumberTranslator();
    }
    return NumberTranslator.instance;
  }

  constructor() {
    this.translationChain = new CircularTranslationChain();
    this.constructChain();
  }

  constructChain() {
    TranslatorHelper.addMagnitudes(this.translationChain);
  }

  translate(number) {
    if (number && !isNaN(number)) {
      return this.translationChain.translate(Math.round(number));
    } else {
      throw new Error("number is invalid");
    }
  }
}
