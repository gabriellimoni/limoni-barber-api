import { BarberShopPoll } from "./barberShopPoll";
import { Person } from "./person";

export class Client {
  private person: Person;
  private barberShopPoll: BarberShopPoll;

  constructor(person: Person, barberShopPoll: BarberShopPoll) {
    this.person = person;
    this.barberShopPoll = barberShopPoll;
  }
}
