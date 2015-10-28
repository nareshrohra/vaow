import {
  Locale
}
from '../../../locale';

import {
  Magnitude
}
from '../../types/magnitude';

export class Units {

}

Units.One = new Magnitude(Locale.Units.One, 1);
Units.Two = new Magnitude(Locale.Units.Two, 2);
Units.Three = new Magnitude(Locale.Units.Three, 3);
Units.Four = new Magnitude(Locale.Units.Four, 4);
Units.Five = new Magnitude(Locale.Units.Five, 5);
Units.Six = new Magnitude(Locale.Units.Six, 6);
Units.Seven = new Magnitude(Locale.Units.Seven, 7);
Units.Eight = new Magnitude(Locale.Units.Eight, 8);
Units.Nine = new Magnitude(Locale.Units.Nine, 9);

Units.All = [
  Units.One,
  Units.Two,
  Units.Three,
  Units.Four,
  Units.Five,
  Units.Six,
  Units.Seven,
  Units.Eight,
  Units.Nine
];
