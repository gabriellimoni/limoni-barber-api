import { BarberJobs } from "./barberJobs";
import { Person } from "./person";

export class Barber {
  private person: Person;
  private barberJobs: BarberJobs[] = [];

  constructor(person: Person, barberJobs: BarberJobs[]) {
    this.person = person;
    this.barberJobs = barberJobs;
  }

  public getBarberJobs(): BarberJobs[] {
    return this.barberJobs;
  }

  public getFirstName(): string {
    return this.person.getFirstName();
  }
}
