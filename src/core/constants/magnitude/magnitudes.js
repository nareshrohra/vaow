import {
  Locale
}
from '../../../locale';

import {
  Magnitude
}
from '../../types/magnitude';

export class Magnitudes {

}

Magnitudes.Unit = new Magnitude('', 0);
Magnitudes.Million = new Magnitude(Locale.Magnitude.Million, Math.pow(10, 6));
Magnitudes.Billion = new Magnitude(Locale.Magnitude.Billion, Math.pow(10, 9));
Magnitudes.Trillion = new Magnitude(Locale.Magnitude.Trillion, Math.pow(10, 12));
Magnitudes.Quadrillion = new Magnitude(Locale.Magnitude.Quadrillion, Math.pow(10, 15));
Magnitudes.Quintillion = new Magnitude(Locale.Magnitude.Quintillion, Math.pow(10, 18));
Magnitudes.Sextillion = new Magnitude(Locale.Magnitude.Sextillion, Math.pow(10, 21));
Magnitudes.Septillion = new Magnitude(Locale.Magnitude.Septillion, Math.pow(10, 24));
Magnitudes.Octillion = new Magnitude(Locale.Magnitude.Octillion, Math.pow(10, 27));
Magnitudes.Nonillion = new Magnitude(Locale.Magnitude.Nonillion, Math.pow(10, 30));
Magnitudes.Decillion = new Magnitude(Locale.Magnitude.Decillion, Math.pow(10, 33));
Magnitudes.Undecillion = new Magnitude(Locale.Magnitude.Undecillion, Math.pow(10, 36));
