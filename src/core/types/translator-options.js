import {
  Validator
}
from '../../util/validator';

import {
  Locale
}
from '../../locale';

export class TranslatorOptions {
  _magnitudeOptions = null;
  _type = ''; //number/time
  _translateRecursively = false;

  constructor(type, magnitudeOptions = new MagnitudeOptions(), translateRecursively) {
    if (Validator.isDefinedAndNotNull(type)) {
      this._type = type;
      this._magnitudeOptions = magnitudeOptions
      this._translateRecursively = translateRecursively;
    } else {
      throw Locale.Error.InvalidArgType;
    };
  }

  set MagnitudeOptions(value) {
    this._magnitudeOptions = value;
  }
  get MagnitudeOptions() {
    return this._magnitudeOptions;
  }

  set Type(value) {
    this._type = value;
  }
  get Type() {
    return this._type;
  }

  set TranslateRecursively(value) {
    this._translateRecursively = value;
  }
  get TranslateRecursively() {
    return this._translateRecursively;
  }
}

TranslatorOptions.Type = {
  Number: 'number',
  Time: 'time',
  Weight: 'weight',
  Distance: 'distance'
};

export class MagnitudeOptions {
  _translateMagnitudes = false;
  _translateVeryLowOrderOfMagnitudes = false;
  _translateLowOrderOfMagnitudes = true;
  _translateHighOrderOfMagnitudes = true;

  constructor() {}

  set TranslateMagnitudes(value) {
    this._translateMagnitudes = value;
  }
  get TranslateMagnitudes() {
    return this._translateMagnitudes;
  }

  set TranslateVeryLowOrderOfMagnitudes(value) {
    this._translateVeryLowOrderOfMagnitudes = value;
  }
  get TranslateVeryLowOrderOfMagnitudes() {
    return this._translateVeryLowOrderOfMagnitudes;
  }

  set TranslateLowOrderOfMagnitudes(value) {
    this._translateLowOrderOfMagnitudes = value;
  }
  get TranslateLowOrderOfMagnitudes() {
    return this._translateLowOrderOfMagnitudes;
  }

  set TranslateHighOrderOfMagnitudes(value) {
    this._translateHighOrderOfMagnitudes = value;
  }
  get TranslateHighOrderOfMagnitudes() {
    return this._translateHighOrderOfMagnitudes;
  }
}
