import { PasswordChecker } from "@/2-application/auth/passwordChecker";
import { TokenHandler } from "@/2-application/auth/tokenHandler";
import {
  invalidCredentialsError,
  userNotFoundError,
} from "@/2-application/errors/errorList";
import { ForbiddenApplicationError } from "@/2-application/errors/forbidden.error";
import { NotFoundApplicationError } from "@/2-application/errors/notFound.error";
import { GetUserByUsernameRepository } from "@/2-application/repositories/user/user.repository";
import { BaseUsecase } from "../baseUsecase";

export interface LoginInput {
  username: string;
  password: string;
}
export interface LoginOutput {
  token: string;
  refreshToken: string;
  expiresInMs: number;
}

export interface LoginUsecase extends BaseUsecase<LoginInput, LoginOutput> {}

export class LoginUsecaseImpl implements LoginUsecase {
  constructor(
    private readonly getUserByUsernameRepo: GetUserByUsernameRepository,
    private readonly passwordChecker: PasswordChecker,
    private readonly tokenHandler: TokenHandler
  ) {}
  async execute(input: LoginInput): Promise<LoginOutput> {
    const user = await this.getUserByUsernameRepo.getUserByUsername(
      input.username
    );
    if (!user) {
      throw new NotFoundApplicationError(userNotFoundError, "login");
    }
    const hashedPassword = user.getPassword();
    const passwordMatches = await this.passwordChecker.match({
      password: input.password,
      hashedPassword,
    });
    if (!passwordMatches) {
      throw new ForbiddenApplicationError(invalidCredentialsError, "login");
    }
    const tokenData = await this.tokenHandler.generateToken(user);
    return {
      expiresInMs: tokenData.expiresInMs,
      refreshToken: tokenData.refreshToken,
      token: tokenData.token,
    };
  }
}
