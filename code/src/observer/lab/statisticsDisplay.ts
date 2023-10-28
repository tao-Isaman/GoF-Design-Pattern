import { WeatherData } from './weatherData';
import { WeatherObserver } from './weatherObserver';

export class StatisticsDisplay implements WeatherObserver {
  private data: WeatherData | undefined;

  update(data: WeatherData) {
    this.data = data;
  }

  display(): string {
    if (this.data) {
      return `Avg/Max/Min temperature = ${this.data.temperature}/${this.data.humidity}/${this.data.pressure}`;
    }
    return 'No data';
  }
}
