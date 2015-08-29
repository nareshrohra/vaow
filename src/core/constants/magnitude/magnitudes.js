import {
  Magnitude
}
from '../../types/magnitude';

export class Magnitudes {

}

Magnitudes.Unit = new Magnitude('', 0);
Magnitudes.Million = new Magnitude('million', Math.pow(10, 6));
Magnitudes.Billion = new Magnitude('billion', Math.pow(10, 9));
Magnitudes.Trillion = new Magnitude('trillion', Math.pow(10, 12));
Magnitudes.Quadrillion = new Magnitude('quadrillion', Math.pow(10, 15));
Magnitudes.Quintillion = new Magnitude('quintillion', Math.pow(10, 18));
Magnitudes.Sextillion = new Magnitude('sextillion', Math.pow(10, 21));
Magnitudes.Septillion = new Magnitude('septillion', Math.pow(10, 24));
Magnitudes.Octillion = new Magnitude('octillion', Math.pow(10, 27));
Magnitudes.Nonillion = new Magnitude('nonillion', Math.pow(10, 30));
Magnitudes.Decillion = new Magnitude('decillion', Math.pow(10, 33));
Magnitudes.Undecillion = new Magnitude('undecillion', Math.pow(10, 36));
