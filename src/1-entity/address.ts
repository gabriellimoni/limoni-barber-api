export class Address {
  private id: string;
  private street: string;
  private city: string;
  private state: string;
  private zip: string;
  private country: string;
  private complement: string;

  constructor(
    id: string,
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    complement: string
  ) {
    this.id = id;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
    this.complement = complement;
  }
}
