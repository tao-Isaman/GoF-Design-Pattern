import { WeatherData } from "./weatherData";
import { WeatherObserver } from "./weatherObserver";

export class ForecastDisplay implements WeatherObserver {
    private data: WeatherData | undefined;

    update(data: WeatherData): void {
        this.data = data;
    }

    display(): string {
        return `Forecast: More of the same`;
    }
}