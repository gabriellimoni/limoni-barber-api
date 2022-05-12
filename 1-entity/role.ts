import { Permission } from "./permission";

export class Role {
  private id: string;
  private name: string;
  private permissions: Set<Permission> = new Set();

  constructor(id: string, name: string, permissions: Set<Permission>) {
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

  public getPermissions(): Set<Permission> {
    return this.permissions;
  }

  public addPermission(permission: Permission): void {
    this.permissions.add(permission);
  }

  public removePermission(permission: Permission): void {
    this.permissions.delete(permission);
  }

  public hasPermission(permissionName: string): boolean {
    for (const p of this.permissions.values()) {
      if (p.getName() === permissionName) return true;
    }
    return false;
  }
}
