import { ConditionDisplay } from './conditionDisplay';
import { ForecastDisplay } from './forecastDisplay';
import { StatisticsDisplay } from './statisticsDisplay';
import { WeatherData } from './weatherData';
import { WeatherStation } from './weatherStation';

describe('[Observer - lab] Weather station measurement changed', () => {
  it('display should be called when measurement changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    // when
    weatherStation.update(data);

    // then
    expect(weatherStation.updateCurrentConditionsDisplay()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherStation.updateStatisticsDisplay()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(weatherStation.updateForecastDisplay()).toBe(
      'Forecast: More of the same'
    );
  });

  it('should display condition when weather station data changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);
    const conditionObserver = new ConditionDisplay();
    const statisticsObserver = new StatisticsDisplay();
    const forecastObserver = new ForecastDisplay();

    weatherStation.registerObserver(conditionObserver);
    weatherStation.registerObserver(statisticsObserver);
    weatherStation.registerObserver(forecastObserver);

    // when
    weatherStation.update(data);

    // then
    expect(conditionObserver.display()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );

    expect(statisticsObserver.display()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );

    expect(forecastObserver.display()).toBe('Forecast: More of the same');
  });
});
