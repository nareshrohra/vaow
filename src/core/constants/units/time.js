import {
  Locale
}
from '../../../locale';

import {
  Unit
}
from '../../types/unit';

export class Time {

}

Time.Second = new Unit(Locale.Time.Seconds, 0);
Time.Minute = new Unit(Locale.Time.Minutes, 60);
Time.Hour = new Unit(Locale.Time.Hours, Time.Minute.getValue() * 60);
Time.Day = new Unit(Locale.Time.Days, Time.Hour.getValue() * 24);
Time.Month = new Unit(Locale.Time.Months, Time.Day.getValue() * 30.43);
Time.Year = new Unit(Locale.Time.Years, Time.Day.getValue() * 365.24);
Time.Decade = new Unit(Locale.Time.Decades, Time.Year.getValue() * 10);
Time.Century = new Unit(Locale.Time.Centuries, Time.Year.getValue() * 100);
Time.Millenium = new Unit(Locale.Time.Millenium, Time.Century.getValue() * 10);

Time.Default = [
  Time.Second,
  Time.Minute,
  Time.Hour,
  Time.Day,
  Time.Month,
  Time.Year,
  Time.Century
];

Time.All = [
  Time.Second,
  Time.Minute,
  Time.Hour,
  Time.Day,
  Time.Month,
  Time.Year,
  Time.Decade,
  Time.Century,
  Time.Millenium
];
