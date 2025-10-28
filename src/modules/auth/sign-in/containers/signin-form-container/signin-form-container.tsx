"use client";

import { FormWrapper } from "@/components/ui/form";
import { SigninActionUI, SigninFormUI } from "../../components";
import { useSignIn } from "../../hooks";

const SigninFormContainer = () => {
  const { form, isLoading, onSubmit, onGoogleLogin, onInstagramLogin } =
    useSignIn();

  return (
    <FormWrapper className="w-full basis-1/2" form={form} onSubmit={onSubmit}>
      <SigninFormUI />
      <SigninActionUI
        isLoading={isLoading}
        onGoogleLogin={onGoogleLogin}
        onInstagramLogin={onInstagramLogin}
      />
    </FormWrapper>
  );
};

export default SigninFormContainer;
