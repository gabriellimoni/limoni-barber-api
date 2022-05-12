import { BarberShopRole } from "./barberShopRole";
import { Person } from "./person";

export class User {
  private username: string;
  private password: string;
  private person: Person;
  private barberShopRoles: BarberShopRole[] = [];

  constructor(
    username: string,
    password: string,
    person: Person,
    barberShopRoles: BarberShopRole[]
  ) {
    this.username = username;
    this.password = password;
    this.person = person;
    this.barberShopRoles = barberShopRoles;
  }

  public getId(): string {
    return this.person.getId();
  }

  public getUsername(): string {
    return this.username;
  }

  public getFirstName(): string {
    return this.person.getFirstName();
  }

  public getLastName(): string {
    return this.person.getLastName();
  }

  public getFullName(): string {
    return this.person.getFullName();
  }

  public getEmail(): string {
    return this.person.getEmail();
  }

  public getPassword(): string {
    return this.password;
  }

  public hasPermissionForBarberShop(
    barberShopId: string,
    permissionName: string
  ): boolean {
    const barberShopRole = this.barberShopRoles.find(
      (b) => b.getBarberShop().getId() === barberShopId
    );
    if (!barberShopRole) return false;
    return barberShopRole.getRole().hasPermission(permissionName);
  }
}
