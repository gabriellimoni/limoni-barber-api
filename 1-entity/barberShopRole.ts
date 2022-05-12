import { BarberShop } from "./barberShop";
import { Role } from "./role";
import { User } from "./user";

export class BarberShopRole {
  private user: User;
  private role: Role;
  private barberShop: BarberShop;

  constructor(user: User, role: Role, barberShop: BarberShop) {
    this.user = user;
    this.role = role;
    this.barberShop = barberShop;
  }

  public getRole(): Role {
    return this.role;
  }

  public getBarberShop(): BarberShop {
    return this.barberShop;
  }

  public getUser(): User {
    return this.user;
  }
}
