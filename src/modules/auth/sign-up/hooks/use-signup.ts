"use client";

import {
  useGoogleLoginMutation,
  useRegisterMutation
} from "@/apis/auths";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signUpSchema, type SignUpFormData } from "./validation";

export const useSignUp = () => {
  const useSignUpMutate = useRegisterMutation();
  const useGoogleLoginMutate = useGoogleLoginMutation();
  const router = useRouter();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const res = await useSignUpMutate.mutateAsync(data);
      toast.success(res.message);
      setTimeout(() => {
        router.push(ROUTES.SIGN_IN);
      }, 300);
    } catch (error) {
      handleToastError(error);
    }
  };

  const onRequestGoogleLogin = async (code: string) => {
    try {
      const res = await useGoogleLoginMutate.mutateAsync({ code });
      toast.success("Sign up successfully. Please sign in to continue.");
      setTimeout(() => {
        router.push(ROUTES.SIGN_IN);
      }, 300);
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

  return {
    isLoading: useSignUpMutate.isPending || useGoogleLoginMutate.isPending,
    form,
    onSubmit,
    onGoogleLogin,
  };
};
