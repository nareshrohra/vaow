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

OrderOfMagnitudes.Hundred = new OrderOfMagnitude(Locale.OrderOfMagnitude.Hundred, Math.pow(10, 2));
OrderOfMagnitudes.Thousand = new OrderOfMagnitude(Locale.OrderOfMagnitude.Thousand, Math.pow(10, 3));
OrderOfMagnitudes.Million = new OrderOfMagnitude(Locale.OrderOfMagnitude.Million, Math.pow(10, 6));
OrderOfMagnitudes.Billion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Billion, Math.pow(10, 9));
OrderOfMagnitudes.Trillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Trillion, Math.pow(10, 12));
OrderOfMagnitudes.Quadrillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Quadrillion, Math.pow(10, 15));
OrderOfMagnitudes.Quintillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Quintillion, Math.pow(10, 18));
OrderOfMagnitudes.Sextillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Sextillion, Math.pow(10, 21));
OrderOfMagnitudes.Septillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Septillion, Math.pow(10, 24));
OrderOfMagnitudes.Octillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Octillion, Math.pow(10, 27));
OrderOfMagnitudes.Nonillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Nonillion, Math.pow(10, 30));
OrderOfMagnitudes.Decillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Decillion, Math.pow(10, 33));
OrderOfMagnitudes.Undecillion = new OrderOfMagnitude(Locale.OrderOfMagnitude.Undecillion, Math.pow(10, 36));

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
