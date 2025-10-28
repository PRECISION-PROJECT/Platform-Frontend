"use client";

import { useGoogleLoginMutation, useLoginMutation } from "@/apis/auths";
import { ECookie } from "@/apis/http-instance";
import { useAuth } from "@/components/providers/AuthProvider";
import { handleToastError } from "@/utils/common";
import { setCookieData } from "@/utils/cookie";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signInSchema, type SignInFormData } from "./validation";

export const useSignIn = () => {
  const useLoginMutate = useLoginMutation();
  const useGoogleLoginMutate = useGoogleLoginMutation();
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSuccess = async (accessToken: string, refreshToken: string, expires: number) => {
    setCookieData(ECookie.ACCESS_TOKEN, accessToken, expires);
    setCookieData(ECookie.REFRESH_TOKEN, refreshToken);
    toast.success("Sign in successfully");
    setIsAuthenticated(true);
    setTimeout(() => {
      router.push(ROUTES.HOME);
    }, 300);
  };

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await useLoginMutate.mutateAsync(data);
      await onSuccess(res.token, res.refreshToken, res.tokenExpires);
    } catch (error) {
      handleToastError(error);
    }
  };

  const onRequestGoogleLogin = async (code: string) => {
    try {
      const res = await useGoogleLoginMutate.mutateAsync({ code });
      await onSuccess(res.token, res.refreshToken, res.tokenExpires);
    } catch (error) {
      handleToastError(error);
    }
  };

  const onGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      await onRequestGoogleLogin(codeResponse.code);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const onInstagramLogin = useCallback(
    () => {
      
    },
    [],
  )
  

  return {
    isLoading: useLoginMutate.isPending || useGoogleLoginMutate.isPending,
    form,
    onSubmit,
    onGoogleLogin,
    onInstagramLogin
  };
};
