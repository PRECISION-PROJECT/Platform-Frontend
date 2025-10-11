import { IAxiosResponse } from "@/types/axios";
import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { KEYS } from "./keys";
import {
  confirmEmailRequest,
  forgotPasswordRequest,
  getMe,
  googleLoginRequest,
  loginRequest,
  logoutRequest,
  registerRequest,
  resetPasswordRequest,
} from "./requests";
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

export const useGetMe = (
  options: Omit<UseQueryOptions<IUserResponse, Error>, "queryKey">
) => {
  return useQuery<IUserResponse, Error>({
    queryKey: [KEYS.AUTH_ME],
    queryFn: ({ signal }) => getMe(signal),
    ...options,
  });
};

export const useLoginMutation = () => {
  return useMutation<ILoginResponse, IAxiosResponse, ILoginRequest>({
    mutationKey: [KEYS.AUTH_LOGIN],
    mutationFn: (data) => loginRequest(data),
  });
};

export const useLogoutMutation = () => {
  return useMutation<string, IAxiosResponse, ILogoutRequest>({
    mutationKey: [KEYS.AUTH_LOGOUT],
    mutationFn: (data) => logoutRequest(data),
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation<string, IAxiosResponse, IForgotPasswordRequest>({
    mutationKey: [KEYS.AUTH_FORGOT_PASSWORD],
    mutationFn: (data) => forgotPasswordRequest(data),
  });
};

export const useResetPasswordMutation = () => {
  return useMutation<string, IAxiosResponse, IResetPasswordRequest>({
    mutationKey: [KEYS.AUTH_RESET_PASSWORD],
    mutationFn: (data) => resetPasswordRequest(data),
  });
};

export const useGoogleLoginMutation = () => {
  return useMutation<IGoogleLoginResponse, IAxiosResponse, IGoogleLoginRequest>(
    {
      mutationKey: [KEYS.AUTH_GOOGLE_LOGIN],
      mutationFn: (data) => googleLoginRequest(data),
    }
  );
};

export const useRegisterMutation = () => {
  return useMutation<IRegisterResponse, IAxiosResponse, IRegisterRequest>({
    mutationKey: [KEYS.AUTH_EMAIL_REGISTER],
    mutationFn: (data) => registerRequest(data),
  });
};

export const useConfirmEmailMutation = () => {
  return useMutation<void, IAxiosResponse, IConfirmEmailRequest>({
    mutationKey: [KEYS.AUTH_CONFIRM_EMAIL],
    mutationFn: (data) => confirmEmailRequest(data),
  });
};
