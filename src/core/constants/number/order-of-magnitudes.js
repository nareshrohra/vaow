import {
  Locale
}
from '../../../locale';

import {
  OrderOfMagnitude
}
from '../../types/magnitude';

export class OrderOfMagnitudes {

}

OrderOfMagnitudes.Hundred = new OrderOfMagnitude(Locale.Magnitude.Hundred, Math.pow(10, 2));
OrderOfMagnitudes.Thousand = new OrderOfMagnitude(Locale.Magnitude.Thousand, Math.pow(10, 3));
OrderOfMagnitudes.Million = new OrderOfMagnitude(Locale.Magnitude.Million, Math.pow(10, 6));
OrderOfMagnitudes.Billion = new OrderOfMagnitude(Locale.Magnitude.Billion, Math.pow(10, 9));
OrderOfMagnitudes.Trillion = new OrderOfMagnitude(Locale.Magnitude.Trillion, Math.pow(10, 12));
OrderOfMagnitudes.Quadrillion = new OrderOfMagnitude(Locale.Magnitude.Quadrillion, Math.pow(10, 15));
OrderOfMagnitudes.Quintillion = new OrderOfMagnitude(Locale.Magnitude.Quintillion, Math.pow(10, 18));
OrderOfMagnitudes.Sextillion = new OrderOfMagnitude(Locale.Magnitude.Sextillion, Math.pow(10, 21));
OrderOfMagnitudes.Septillion = new OrderOfMagnitude(Locale.Magnitude.Septillion, Math.pow(10, 24));
OrderOfMagnitudes.Octillion = new OrderOfMagnitude(Locale.Magnitude.Octillion, Math.pow(10, 27));
OrderOfMagnitudes.Nonillion = new OrderOfMagnitude(Locale.Magnitude.Nonillion, Math.pow(10, 30));
OrderOfMagnitudes.Decillion = new OrderOfMagnitude(Locale.Magnitude.Decillion, Math.pow(10, 33));
OrderOfMagnitudes.Undecillion = new OrderOfMagnitude(Locale.Magnitude.Undecillion, Math.pow(10, 36));

OrderOfMagnitudes.VeryLowOrderMagnitudes = [
  OrderOfMagnitudes.Hundred,
  OrderOfMagnitudes.Thousand
];

OrderOfMagnitudes.LowOrderMagnitudes = [
  OrderOfMagnitudes.Million,
  OrderOfMagnitudes.Billion,
  OrderOfMagnitudes.Trillion,
  OrderOfMagnitudes.Quadrillion,
  OrderOfMagnitudes.Quintillion
];

OrderOfMagnitudes.HighOrderMagnitudes = [
  OrderOfMagnitudes.Sextillion,
  OrderOfMagnitudes.Septillion,
  OrderOfMagnitudes.Octillion,
  OrderOfMagnitudes.Nonillion,
  OrderOfMagnitudes.Decillion,
  OrderOfMagnitudes.Undecillion
];
