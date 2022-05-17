import { BaseError } from './baseApplication.error'

export const userNotFoundError: BaseError = {
  id: 'user-not-found',
  code: 404,
  message: 'User not found',
}
export const invalidCredentialsError: BaseError = {
  id: 'invalid-credentials',
  code: 403,
  message: 'Invalid credentials',
}

export const errors: BaseError[] = [userNotFoundError, invalidCredentialsError]
