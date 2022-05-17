import { User } from '@/1-entity'
import { Person } from '@/1-entity/person'

export const makeMockedUser = () => {
  return new User(
    'username',
    'password',
    new Person('id', 'firstName', 'lastName', 'email', []),
    []
  )
}
