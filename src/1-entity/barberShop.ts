import { Address } from "./address";
import { Barber } from "./barber";

export class BarberShop {
  private id: string;
  private name: string;
  private address: Address;
  private barbers: Barber[] = [];

  constructor(id: string, name: string, address: Address, barbers: Barber[]) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.barbers = barbers;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): Address {
    return this.address;
  }

  public getBarbers(): Barber[] {
    return this.barbers;
  }
}
