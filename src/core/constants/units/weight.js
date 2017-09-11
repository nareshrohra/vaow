import {
  Locale
}
from '../../../locale';

import {
  Unit
}
from '../../types/unit';

export class Weight {

}

Weight.Milligram = new Unit(Locale.Weight.Milligrams, 0);
Weight.Gram = new Unit(Locale.Weight.Grams, 1000);
Weight.Kilogram = new Unit(Locale.Weight.Kilograms, Weight.Gram.getValue() * 1000);
Weight.Quintal = new Unit(Locale.Weight.Quintals, Weight.Kilogram.getValue() * 100);
Weight.Ton = new Unit(Locale.Weight.Tons, Weight.Kilogram.getValue() * 1000);

Weight.Default = [
  Weight.Milligram,
  Weight.Gram,
  Weight.Kilogram
];

Weight.All = [
  Weight.Milligram,
  Weight.Gram,
  Weight.Kilogram,
  Weight.Quintal,
  Weight.Ton
];
