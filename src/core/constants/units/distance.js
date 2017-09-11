import {
  Locale
}
from '../../../locale';

import {
  Unit
}
from '../../types/unit';

export class Distance {

}

Distance.Millimeter = new Unit(Locale.Distance.Millimeters, 0);
Distance.Centimeter = new Unit(Locale.Distance.Centimeters, 10);
Distance.Inch = new Unit(Locale.Distance.Inches, 25.4);
Distance.Feet = new Unit(Locale.Distance.Feets, 304.8);
Distance.Meter = new Unit(Locale.Distance.Meters, 1000);
Distance.Kilometer = new Unit(Locale.Distance.Kilometers, Distance.Meter.getValue() * 1000);

Distance.Default = [
  Distance.Millimeter,
  Distance.Meter,
  Distance.Kilometer
];

Distance.All = [
  Distance.Millimeter,
  Distance.Centimeter,
  Distance.Inch,
  Distance.Feet,
  Distance.Meter,
  Distance.Kilometer
];
