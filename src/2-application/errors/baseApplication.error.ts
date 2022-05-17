export interface BaseError {
  id: string;
  message: string;
  code: 400 | 401 | 403 | 404 | 500;
}

export class BaseApplicationError extends Error {
  private readonly baseError: BaseError;
  private readonly contextValue: string;

  constructor(error: BaseError, context: string) {
    super(error.message);
    this.baseError = error;
    this.contextValue = context;
  }

  get message(): string {
    return this.baseError.message;
  }

  get code(): 400 | 401 | 403 | 404 | 500 {
    return this.baseError.code;
  }

  get context(): string {
    return this.context;
  }
}
