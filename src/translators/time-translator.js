import {
  TranslatorHelper
}
from './translator-helper';

import {
  CircularTranslationChain
}
from '../core/chain/circular-translation-chain';

import {
  TimeTranslationElement
}
from '../core/constants/time/translation-elements';

export class TimeTranslator {
  static instance;

  static getInstance() {
    if (!TimeTranslator.instance) {
      TimeTranslator.instance = new TimeTranslator();
    }
    return TimeTranslator.instance;
  }

  constructor() {
    this.translationChain = new CircularTranslationChain();
    this.constructChain();
  }

  constructChain() {
    this.addTimeChainElements();
    TranslatorHelper.addMagnitudeChainElements(this.translationChain);
  }

  addTimeChainElements() {
    this.translationChain.addUnit(TimeTranslationElement.Second);
    this.translationChain.addUnit(TimeTranslationElement.Minute);
    this.translationChain.addUnit(TimeTranslationElement.Hour);
    this.translationChain.addUnit(TimeTranslationElement.Day);
    this.translationChain.addUnit(TimeTranslationElement.Month);
    this.translationChain.addUnit(TimeTranslationElement.Year);
    this.translationChain.addUnit(TimeTranslationElement.Decade);
    this.translationChain.addUnit(TimeTranslationElement.Century);
  }

  translate(number) {
    if (number && !isNaN(number)) {
      return this.translationChain.translate(Math.round(number));
    } else {
      throw new Error("number is invalid");
    }
  }
}
