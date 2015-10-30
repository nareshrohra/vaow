**About the project**
-----------------
Translate value to word. Example ***1,000,000*** is translated to ***1 million***

----------
**How to install?**
---------------
Very easy! Just run these commands after cloning the repository

> 1. npm install
> 2. jspm install
> 3. gulp watch

----------
**How to use it in my project?**
---------------
Even easier! After downloading the zip and extracting. Take the **dist/vaow.js** file and copy it in your project.

----------
# Sample code

## Translating number with default options

    //using the NumberTranslator with default options
    var translator = new vaow.NumberTranslator();
    var value = Math.pow(10, 6); //million
    return translator.translate(value); //returns "1 million"

## Translating number with magnitude translation enabled

    //create an instance of TranslatorOptions
    var magnitudeOptions = new vaow.types.MagnitudeOptions();

    //enable magnitude translation
    magnitudeOptions.TranslateMagnitudes = true;

    //create an instance of NumberTranslator with translator-options
    var translator = new vaow.NumberTranslator(magnitudeOptions);

    var value = Math.pow(10, 6); //million
    return translator.translate(value); //returns "one million"

## Translating time with default options

    //using the TimeTranslator with default options
    var translator = new vaow.TimeTranslator();
    var value = 86400 * 366; //366 days
    return translator.translate(value); //returns "1 years"

## Creating your own translation chain

    //Create an instance of the translation-chain
    var translationChain = new vaow.CircularTranslationChain();

    //add order-of-magnitudes for translation
    translationChain.addOrderOfMagnitude(vaow.constants.number.OrderOfMagnitudes.Million);
    translationChain.addOrderOfMagnitude(vaow.constants.number.OrderOfMagnitudes.Billion);
    translationChain.addOrderOfMagnitude(vaow.constants.number.OrderOfMagnitudes.Trillion);

    //million x trillion
    var value = Math.pow(10, 6) * Math.pow(10, 12);

    return translationChain.translate(value); //returns "1 million trillion"

----------
# License
vaow is freely distributable under the terms of the MIT license
