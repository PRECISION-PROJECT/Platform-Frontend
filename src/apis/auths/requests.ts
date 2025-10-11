import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import {
  IConfirmEmailRequest,
  IForgotPasswordRequest,
  IGoogleLoginRequest,
  IGoogleLoginResponse,
  ILoginRequest,
  ILoginResponse,
  ILogoutRequest,
  IRegisterRequest,
  IRegisterResponse,
  IResetPasswordRequest,
  IUserResponse,
} from "./types";

export const getMe = async (signal?: AbortSignal): Promise<IUserResponse> => {
  return httpInstance
    .get<IUserResponse>(KEYS.AUTH_ME, { signal })
    .then((res) => res);
};

export const loginRequest = async (
  body: ILoginRequest
): Promise<ILoginResponse> => {
  return httpInstance
    .post<ILoginResponse, ILoginRequest>(KEYS.AUTH_LOGIN, body)
    .then((res) => res);
};

export const logoutRequest = async (body: ILogoutRequest) => {
  return httpInstance
    .post<string, ILogoutRequest>(KEYS.AUTH_LOGOUT, body)
    .then((res) => res);
};

export const forgotPasswordRequest = async (
  body: IForgotPasswordRequest
): Promise<string> => {
  return httpInstance
    .post<string, IForgotPasswordRequest>(KEYS.AUTH_FORGOT_PASSWORD, body)
    .then((res) => res);
};

export const resetPasswordRequest = async (
  body: IResetPasswordRequest
): Promise<string> => {
  return httpInstance
    .post<string, IResetPasswordRequest>(KEYS.AUTH_RESET_PASSWORD, body)
    .then((res) => res);
};

export const googleLoginRequest = async (
  body: IGoogleLoginRequest
): Promise<IGoogleLoginResponse> => {
  return httpInstance
    .post<IGoogleLoginResponse, IGoogleLoginRequest>(
      KEYS.AUTH_GOOGLE_LOGIN,
      body
    )
    .then((res) => res);
};

export const registerRequest = async (
  body: IRegisterRequest
): Promise<IRegisterResponse> => {
  return httpInstance
    .post<IRegisterResponse, IRegisterRequest>(KEYS.AUTH_EMAIL_REGISTER, body)
    .then((res) => res);
};

export const confirmEmailRequest = async (
  body: IConfirmEmailRequest
): Promise<void> => {
  return httpInstance
    .post<void, IConfirmEmailRequest>(KEYS.AUTH_CONFIRM_EMAIL, body)
    .then((res) => res);
};
