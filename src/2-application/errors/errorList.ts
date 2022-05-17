import { BaseError } from "./baseApplication.error";

export const userNotFoundError: BaseError = {
  id: "user-not-found",
  code: 404,
  message: "User not found",
};

export const errors: BaseError[] = [userNotFoundError];
