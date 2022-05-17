import { User } from '@/1-entity'
import { PasswordChecker } from '@/2-application/auth/passwordChecker'
import {
  GenerateTokenOutput,
  TokenHandler,
} from '@/2-application/auth/tokenHandler'
import {
  invalidCredentialsError,
  userNotFoundError,
} from '@/2-application/errors/errorList'
import { ForbiddenApplicationError } from '@/2-application/errors/forbidden.error'
import { NotFoundApplicationError } from '@/2-application/errors/notFound.error'
import { makeMockedUser } from '@/2-application/repositories/user/testUtils'
import { GetUserByUsernameRepository } from '@/2-application/repositories/user/user.repository'
import { LoginUsecaseImpl } from '../login.usecase'

const mockedUser = makeMockedUser()
class MockedGetUserByUsernameRepository implements GetUserByUsernameRepository {
  async getByUsername(username: string): Promise<User | null> {
    return mockedUser
  }
}

class MockedPasswordChecker implements PasswordChecker {
  async match(params: {
    password: string
    hashedPassword: string
  }): Promise<boolean> {
    return true
  }
}

const mockedTokenData: GenerateTokenOutput = {
  expiresInMs: 60 * 60 * 1000,
  refreshToken: 'refreshToken',
  token: 'token',
}
class MockedTokenHandler implements TokenHandler {
  async generateToken(user: User): Promise<GenerateTokenOutput> {
    return mockedTokenData
  }
}

const makeTestData = () => {
  const getUserByUsernameRepo = new MockedGetUserByUsernameRepository()
  const passwordChecker = new MockedPasswordChecker()
  const tokenHandler = new MockedTokenHandler()
  const loginUsecase = new LoginUsecaseImpl(
    getUserByUsernameRepo,
    passwordChecker,
    tokenHandler
  )

  const getByUsernameSpy = jest.spyOn(getUserByUsernameRepo, 'getByUsername')
  const checkPasswordSpy = jest.spyOn(passwordChecker, 'match')
  const generateTokenSpy = jest.spyOn(tokenHandler, 'generateToken')

  return {
    loginUsecase,
    getByUsernameSpy,
    checkPasswordSpy,
    generateTokenSpy,
  }
}

describe('Login usecase', () => {
  test('Should call getUserByUsername with correct params', async () => {
    const { loginUsecase, getByUsernameSpy } = makeTestData()
    await loginUsecase.execute({
      username: 'username',
      password: 'password',
    })
    expect(getByUsernameSpy).toHaveBeenCalledWith('username')
  })
  test('Should throw if getUserByUsername returns null', async () => {
    const { loginUsecase, getByUsernameSpy } = makeTestData()
    getByUsernameSpy.mockResolvedValue(null)
    const promise = loginUsecase.execute({
      username: 'username',
      password: 'password',
    })
    await expect(promise).rejects.toThrow(
      new NotFoundApplicationError(userNotFoundError, 'login')
    )
  })

  test('Should call passwordChecker with correct params', async () => {
    const { loginUsecase, checkPasswordSpy } = makeTestData()
    await loginUsecase.execute({
      username: 'username',
      password: 'password',
    })
    expect(checkPasswordSpy).toHaveBeenCalledWith({
      password: 'password',
      hashedPassword: mockedUser.getPassword(),
    })
  })
  test('Should throw if passwordChecker returns false', async () => {
    const { loginUsecase, checkPasswordSpy } = makeTestData()
    checkPasswordSpy.mockResolvedValue(false)
    const promise = loginUsecase.execute({
      username: 'username',
      password: 'password',
    })
    await expect(promise).rejects.toThrow(
      new ForbiddenApplicationError(invalidCredentialsError, 'login')
    )
  })

  test('Should call tokenHandler with correct params', async () => {
    const { loginUsecase, generateTokenSpy } = makeTestData()
    await loginUsecase.execute({
      username: 'username',
      password: 'password',
    })
    expect(generateTokenSpy).toHaveBeenCalledWith(mockedUser)
  })

  test('Should return token data on success', async () => {
    const { loginUsecase } = makeTestData()
    const result = await loginUsecase.execute({
      username: 'username',
      password: 'password',
    })
    expect(result).toEqual(mockedTokenData)
  })
})
