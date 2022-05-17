import { BaseApplicationError, BaseError } from "./baseApplication.error";

export class ForbiddenApplicationError extends BaseApplicationError {
  constructor(baseError: Omit<BaseError, "code">, context: string) {
    super(
      {
        ...baseError,
        code: 401,
      },
      context
    );
  }
}
