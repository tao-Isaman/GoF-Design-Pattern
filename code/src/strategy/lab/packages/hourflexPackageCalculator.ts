import { MonthlyCalculator } from "./monthlyCalculator";

export class HourFlexPackageCalculator implements MonthlyCalculator {
    calculate(totalHour: number) : number {
        return totalHour * 50;
    }
}