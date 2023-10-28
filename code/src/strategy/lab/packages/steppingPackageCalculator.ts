import { MonthlyCalculator } from "./monthlyCalculator";

export class SteppingPackageCalculator implements MonthlyCalculator {
    calculate(totalHours: number): number {
        if (totalHours <= 50) {
            return totalHours;
        } else {
            return 50 + (totalHours - 50) * 0.5;
        }
    }
}