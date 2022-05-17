export interface PasswordChecker {
  match(params: { password: string; hashedPassword: string }): Promise<boolean>
}
