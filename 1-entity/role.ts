import { Permission } from "./permission";

export class Role {
  private id: string;
  private name: string;
  private permissions: Permission[] = [];

  constructor(id: string, name: string, permissions: Permission[]) {
    this.id = id;
    this.name = name;
    this.permissions = permissions;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPermissions(): Permission[] {
    return this.permissions;
  }

  public addPermission(permission: Permission): void {
    this.permissions.push(permission);
  }

  public hasPermission(permissionName: string): boolean {
    for (const p of this.permissions) {
      if (p.getName() === permissionName) return true;
    }
    return false;
  }
}
