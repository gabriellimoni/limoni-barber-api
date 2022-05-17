import { Barber } from "./barber";

export class BarberJobs {
  private id: string;
  private name: string;
  private estimateTimeInMinutes: number;
  private barber: Barber;
  private defaultPriceInCents: number;
  private defaultCurrency: string;

  constructor(
    id: string,
    name: string,
    estimateTimeInMinutes: number,
    barber: Barber,
    defaultPriceInCents: number,
    defaultCurrency: string
  ) {
    this.id = id;
    this.name = name;
    this.estimateTimeInMinutes = estimateTimeInMinutes;
    this.barber = barber;
    this.defaultPriceInCents = defaultPriceInCents;
    this.defaultCurrency = defaultCurrency;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEstimateTimeInMinutes(): number {
    return this.estimateTimeInMinutes;
  }

  public getBarber(): Barber {
    return this.barber;
  }

  public getDefaultPriceInCents(): number {
    return this.defaultPriceInCents;
  }

  public getDefaultCurrency(): string {
    return this.defaultCurrency;
  }
}
