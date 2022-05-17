import { BarberShop } from "./barberShop";

export class BarberShopPoll {
  private id: string;
  private name: string;
  private barberShops: BarberShop[] = [];

  constructor(id: string, name: string, barberShops: BarberShop[]) {
    this.id = id;
    this.name = name;
    this.barberShops = barberShops;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getBarberShops(): BarberShop[] {
    return this.barberShops;
  }
}
