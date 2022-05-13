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
