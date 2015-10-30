var translationMetaDataSet = [];

function TranslationMetaData(title, id, tHandler) {
  this.title = title;
  this.id = id;
  this.translationHandler = tHandler;
}

//NumberTranslator with default options
translationMetaDataSet.push(new TranslationMetaData('Translating number with default options', 'numberTranslation1', function() {
  //using the NumberTranslator with default options
  var translator = new vaow.NumberTranslator();
  var value = Math.pow(10, 6); //million
  return translator.translate(value); //returns "1 million"
}));

//NumberTranslator with magnitude translation enabled options
translationMetaDataSet.push(new TranslationMetaData('Translating number with magnitude translation enabled', 'numberTranslation2', function() {
  //create an instance of TranslatorOptions
  var magnitudeOptions = new vaow.types.MagnitudeOptions();

  //enable magnitude translation
  magnitudeOptions.TranslateMagnitudes = true;

  //create an instance of NumberTranslator with translator-options
  var translator = new vaow.NumberTranslator(magnitudeOptions);

  var value = Math.pow(10, 6); //million
  return translator.translate(value); //returns "one million"
}));


//TimeTranslator with default options
translationMetaDataSet.push(new TranslationMetaData('Translating time with default options', 'timeTranslation1', function() {
  //using the TimeTranslator with default options
  var translator = new vaow.TimeTranslator();
  var value = 86400 * 366; //366 days
  return translator.translate(value); //returns "1 years"
}));

//Custom translation chain
translationMetaDataSet.push(new TranslationMetaData('Creating your own translation chain', 'customChainTranslator1', function() {
  //Create an instance of the translation-chain
  var translationChain = new vaow.CircularTranslationChain();

  //add order-of-magnitudes for translation
  translationChain.addOrderOfMagnitude(vaow.constants.number.OrderOfMagnitudes.Million);
  translationChain.addOrderOfMagnitude(vaow.constants.number.OrderOfMagnitudes.Billion);
  translationChain.addOrderOfMagnitude(vaow.constants.number.OrderOfMagnitudes.Trillion);

  //million x trillion
  var value = Math.pow(10, 6) * Math.pow(10, 12);

  return translationChain.translate(value); //returns "1 million trillion"
}));
