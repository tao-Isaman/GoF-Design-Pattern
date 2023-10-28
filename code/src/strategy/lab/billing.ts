import { PackageFactory } from './packages/packageFactory';
import { PackageType } from './packages/packageType';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = PackageFactory.createPackage(this.packageType).calculate(
      this.totalHours
    );
    return this.totalWithVat(total);
  }

  private totalWithVat(total: number): number {
    return total + (total * this.vatRate) / 100;
  }
}
