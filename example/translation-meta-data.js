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

//Custom translator
translationMetaDataSet.push(new TranslationMetaData('Creating your own translator', 'customTranslator1', function() {
  //Create the translator class
  var DistanceTranslator = function(magnitudeOptions) {
    //create instance of TranslatorBase
    var base = new vaow.TranslatorBase(magnitudeOptions);
    //set translator type as "Custom"
    base._setType("Custom");

    //the base will add magnitudes and order-of-magnitudes per the magnitudeOptions
    base.constructChain();
    var translationChain = base.translationChain;

    //Create units. Considering the smallest unit is millimeter
    var mm = new vaow.types.Unit('millimeters', 0);
    var meter = new vaow.types.Unit('meters', 1000);
    var kilometer = new vaow.types.Unit('kilometers', meter.getValue() * 1000);

    //add units to the chain
    translationChain.addUnits([mm, meter, kilometer]);

    //return the base; alternatively inherit DistanceTranslator from base
    return base;
  };

  //15 killometers
  //kilometer = 1000 * meter where meter = 1000 * millimeters; hence kilometer = 1000 * 1000 = 10^6
  var value = 15 * Math.pow(10, 6);

  //try your new translator
  var distanceTranslator = new DistanceTranslator();
  return distanceTranslator.translate(value); //returns "15 killometers"
}));
