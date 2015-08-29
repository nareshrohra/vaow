import {
  TranslationChainElement
}
from '../../chain/translation-chain-element';

import {
  Time
}
from './units';

export class TimeTranslationElement {

}

TimeTranslationElement.Second = new TranslationChainElement(Time.Second);
TimeTranslationElement.Minute = new TranslationChainElement(Time.Minute);
TimeTranslationElement.Hour = new TranslationChainElement(Time.Hour);
TimeTranslationElement.Day = new TranslationChainElement(Time.Day);
TimeTranslationElement.Month = new TranslationChainElement(Time.Month);
TimeTranslationElement.Year = new TranslationChainElement(Time.Year);
TimeTranslationElement.Decade = new TranslationChainElement(Time.Decade);
TimeTranslationElement.Century = new TranslationChainElement(Time.Century);
