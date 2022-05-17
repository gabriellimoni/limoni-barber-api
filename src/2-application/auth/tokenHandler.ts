import { User } from "@/1-entity";

export interface GenerateTokenOutput {
  token: string;
  expiresInMs: number;
  refreshToken: string;
}

export interface TokenHandler {
  generateToken(user: User): Promise<GenerateTokenOutput>;
}
