import {
  Locale
}
from '../../../locale';

import {
  Magnitude
}
from '../../types/magnitude';

import {
  Units
}
from './units';

export class Tens {

}

Tens.Ten = new Magnitude(Locale.Tens.Ten, 10);
Tens.Eleven = new Magnitude(Locale.Tens.Eleven, 11);
Tens.Twelve = new Magnitude(Locale.Tens.Twelve, 12);
Tens.Thirteen = new Magnitude(Locale.Tens.Thirteen, 13);
Tens.Fourteen = new Magnitude(Locale.Tens.Fourteen, 14);
Tens.Fifteen = new Magnitude(Locale.Tens.Fifteen, 15);
Tens.Sixteen = new Magnitude(Locale.Tens.Sixteen, 16);
Tens.Seventeen = new Magnitude(Locale.Tens.Seventeen, 17);
Tens.Eighteen = new Magnitude(Locale.Tens.Eighteen, 18);
Tens.Nineteen = new Magnitude(Locale.Tens.Nineteen, 19);

Tens.Twenty = new Magnitude(Locale.Tens.Twenty, 20);
Tens.Thirty = new Magnitude(Locale.Tens.Thirty, 30);
Tens.Fourty = new Magnitude(Locale.Tens.Fourty, 40);
Tens.Fifty = new Magnitude(Locale.Tens.Fifty, 50);
Tens.Sixty = new Magnitude(Locale.Tens.Sixty, 60);
Tens.Seventy = new Magnitude(Locale.Tens.Seventy, 70);
Tens.Eighty = new Magnitude(Locale.Tens.Eighty, 80);
Tens.Ninety = new Magnitude(Locale.Tens.Ninety, 90);
Tens.NinetyNine = new Magnitude(Locale.Tens.Ninety + ' ' + Locale.Units.Nine, 99);

Tens.All = [
  Tens.Ten,
  Tens.Eleven,
  Tens.Twelve,
  Tens.Thirteen,
  Tens.Fourteen,
  Tens.Fifteen,
  Tens.Sixteen,
  Tens.Seventeen,
  Tens.Eighteen,
  Tens.Nineteen,
  Tens.Twenty,
  Tens.Thirty,
  Tens.Fourty,
  Tens.Fifty,
  Tens.Sixty,
  Tens.Seventy,
  Tens.Eighty,
  Tens.Ninety,
  Tens.NinetyNine
];
