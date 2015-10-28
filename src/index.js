define([
    './util/validator.js',
    './core/types/magnitude.js',
    './core/types/unit.js',
    './core/chain/chain.js',
    './core/chain/translation-chain.js',
    './core/chain/circular-translation-chain.js',
    './core/chain/translation-chain-element.js',
    './translators/number-translator.js',
    './translators/time-translator.js',
    './translators/exponent-translator.js',
    './core/formatters/number-formatter.js',
  ],
  function(validator, magnitude, unit, chain, translationChain, circularTranslationChain, translationChainElement, numberTranslator, timeTranslator,
    numberFormatter) {
    window.vaow = {
      Validator: validator.Validator,
      Magnitude: magnitude.Magnitude,
      Unit: unit.Unit,
      TranslationChain: translationChain.TranslationChain,
      CircularTranslationChain: circularTranslationChain.CircularTranslationChain,
      TranslationChainElement: translationChainElement.TranslationChainElement,
      NumberTranslator: numberTranslator.NumberTranslator,
      TimeTranslator: timeTranslator.TimeTranslator,
      NumberFormatter: numberFormatter.NumberFormatter
    };
  }
);
