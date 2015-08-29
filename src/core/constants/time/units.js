import {
  Unit
}
from '../../types/unit';

export class Time {

}

Time.Second = new Unit('seconds', 0);
Time.Minute = new Unit('minutes', 60);
Time.Hour = new Unit('hours', Time.Minute.getValue() * 60);
Time.Day = new Unit('days', Time.Hour.getValue() * 24);
Time.Month = new Unit('months', Time.Day.getValue() * 30.43);
Time.Year = new Unit('years', Time.Day.getValue() * 365.24);
Time.Decade = new Unit('decades', Time.Year.getValue() * 10);
Time.Century = new Unit('centuries', Time.Year.getValue() * 100);
