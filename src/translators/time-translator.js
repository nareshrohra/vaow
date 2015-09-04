import {
  TranslatorHelper
}
from './translator-helper';

import {
  CircularTranslationChain
}
from '../core/chain/circular-translation-chain';

import {
  Time
}
from '../core/constants/time/units';

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
    TranslatorHelper.addMagnitudes(this.translationChain);
  }

  addTimeChainElements() {
    this.translationChain.addUnit(Time.Second);
    this.translationChain.addUnit(Time.Minute);
    this.translationChain.addUnit(Time.Hour);
    this.translationChain.addUnit(Time.Day);
    this.translationChain.addUnit(Time.Month);
    this.translationChain.addUnit(Time.Year);
    this.translationChain.addUnit(Time.Decade);
    this.translationChain.addUnit(Time.Century);
  }

  translate(number) {
    if (number && !isNaN(number)) {
      return this.translationChain.translate(Math.round(number));
    } else {
      throw new Error("number is invalid");
    }
  }
}
