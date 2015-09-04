//TODO: Fix this hack
define([
      './core/chain/chain.js',
      './core/chain/translation-chain.js',
      './core/chain/circular-translation-chain.js',
      './core/chain/translation-chain-element.js',
      './translators/number-translator.js',
      './translators/time-translator.js',
    ],
    function(chain, translationChain, circularTranslationChain, translationChainElement, numberTranslator, timeTranslator) {
      window.vaow = {
        Chain: chain.Chain,
        TranslationChain: translationChain.TranslationChain,
        CircularTranslationChain: circularTranslationChain.CircularTranslationChain,
        TranslationChainElement: translationChainElement.TranslationChainElement,
        NumberTranslator: numberTranslator.NumberTranslator,
        TimeTranslator: timeTranslator.TimeTranslator
      };
    }
);
