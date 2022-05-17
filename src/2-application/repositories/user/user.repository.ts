import { User } from '@/1-entity'

export interface GetUserByUsernameRepository {
  getByUsername(username: string): Promise<User | null>
}
