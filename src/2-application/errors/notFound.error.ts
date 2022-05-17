import { BaseApplicationError, BaseError } from "./baseApplication.error";

export class NotFoundApplicationError extends BaseApplicationError {
  constructor(baseError: Omit<BaseError, "code">, context: string) {
    super(
      {
        ...baseError,
        code: 404,
      },
      context
    );
  }
}
