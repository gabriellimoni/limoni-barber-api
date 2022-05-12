import { Address } from "./address";

export class Person {
  private id: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private addresses: Address[] = [];

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    addresses: Address[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.addresses = addresses;
  }

  public getId(): string {
    return this.id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getAddresses(): Address[] {
    return this.addresses;
  }
}
