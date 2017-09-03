'use strict';

define([
    './core/chain/chain.js',
    './core/chain/translation-chain.js',
    './core/chain/circular-translation-chain.js',
    './core/chain/recursive-translation-chain.js',
    './core/chain/translation-chain-element.js',
    './core/chain/magnitude-translation-chain-element.js',

    './core/formatters/number-formatter.js',
    './core/formatters/translation-result-formatter.js',

    './core/constants/number/order-of-magnitudes.js',
    './core/constants/number/tens.js',
    './core/constants/number/units.js',
    './core/constants/time/units.js',

    './core/types/magnitude.js',
    './core/types/translation-result.js',
    './core/types/translator-options.js',
    './core/types/unit.js',

    './translators/number-translator.js',
    './translators/time-translator.js',
    './translators/translator-base.js',

    './util/validator.js',

    './locale.js'
  ],
  function(
    //chain
    chain, translationChain, circularTranslationChain, recursiveTranslationChain, translationChainElement, magnitudeTranslationChainElement,
    //formatters
    numberFormatter, translationResultFormatter,
    //constants
    orderOfMagnitudes, tens, numberUnits, timeUnits,
    //types
    magnitude, translationResult, translatorOptions, unit,
    //translators
    numberTranslator, timeTranslator, translatorBase,
    //util
    validator,
    //locale
    locale
  ) {
    window.vaow = {
      Chain: chain.Chain,
      TranslationChain: translationChain.TranslationChain,
      CircularTranslationChain: circularTranslationChain.CircularTranslationChain,
      RecursiveTranslationChain: recursiveTranslationChain.RecursiveTranslationChain,
      TranslationChainElement: translationChainElement.TranslationChainElement,
      MagnitudeTranslationChainElement: magnitudeTranslationChainElement.MagnitudeTranslationChainElement,

      NumberFormatter: numberFormatter.NumberFormatter,
      TranslationResultFormatter: translationResultFormatter.TranslationResultFormatter,

      constants: {
        number: {
          OrderOfMagnitudes: orderOfMagnitudes.OrderOfMagnitudes,
          Tens: tens.Tens,
          Units: numberUnits.Units
        },
        time: {
          Units: timeUnits.Units
        }
      },

      types: {
        Magnitude: magnitude.Magnitude,
        TranslationResult: translationResult.TranslationResult,
        ElementTranslationResult: translationResult.ElementTranslationResult,
        OverflowElementTranslationResult: translationResult.OverflowElementTranslationResult,
        UnderflowElementTranslationResult: translationResult.UnderflowElementTranslationResult,
        IncompleteElementTranslationResult: translationResult.IncompleteElementTranslationResult,
        TranslatorOptions: translatorOptions.TranslatorOptions,
        MagnitudeOptions: translatorOptions.MagnitudeOptions,
        Unit: unit.Unit,
      },

      NumberTranslator: numberTranslator.NumberTranslator,
      TimeTranslator: timeTranslator.TimeTranslator,
      TranslatorBase: translatorBase.TranslatorBase,

      util: {
        Validator: validator.Validator
      },

      locale: locale.Locale
    };
  }
);
