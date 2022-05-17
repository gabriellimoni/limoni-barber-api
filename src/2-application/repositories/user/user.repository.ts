import { User } from "@/1-entity";

export interface GetUserByUsernameRepository {
  getUserByUsername(username: string): Promise<User | null>;
}
