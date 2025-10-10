"use client";

import { useGoogleLoginMutation, useLoginMutation } from "@/apis/auths";
import { ECookie } from "@/apis/http-instance";
import { handleToastError } from "@/utils/common";
import { setCookieData } from "@/utils/cookie";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signInSchema, type SignInFormData } from "./validation";

export const useSignIn = () => {
  const useLoginMutate = useLoginMutation();
  const useGoogleLoginMutate = useGoogleLoginMutation();
  const router = useRouter();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await useLoginMutate.mutateAsync(data);
      const accessToken = res.token;
      const refreshToken = res.refreshToken;
      if (accessToken && refreshToken) {
        setCookieData(ECookie.ACCESS_TOKEN, accessToken, { path: "/" });
        setCookieData(ECookie.REFRESH_TOKEN, refreshToken, { path: "/" });
      }
      toast.success("Sign in successfully");
      setTimeout(() => {
        router.push(ROUTES.PRODUCT_LIST);
      }, 300);
    } catch (error) {
      handleToastError(error);
    }
  };

  const onRequestGoogleLogin = async (code: string) => {
    try {
      const res = await useGoogleLoginMutate.mutateAsync({ code });
      const accessToken = res.token;
      const refreshToken = res.refreshToken;
      if (accessToken && refreshToken) {
        setCookieData(ECookie.ACCESS_TOKEN, accessToken, { path: "/" });
        setCookieData(ECookie.REFRESH_TOKEN, refreshToken, { path: "/" });
      }
      toast.success("Sign in successfully");
      setTimeout(() => {
        router.push(ROUTES.PRODUCT_LIST);
      }, 300);
    } catch (error) {
      handleToastError(error);
    }
  };

  const onGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      await onRequestGoogleLogin(codeResponse.code)
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return {
    isLoading: useLoginMutate.isPending || useGoogleLoginMutate.isPending,
    form,
    onSubmit,
    onGoogleLogin,
  };
};
