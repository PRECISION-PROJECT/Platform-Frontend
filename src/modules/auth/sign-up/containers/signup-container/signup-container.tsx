"use client";

import { FormWrapper } from "@/components/ui/form";
import { HStack } from "@/components/utilities";
import { SignupIntroUI } from "../../components";
import { useSignUp } from "../../hooks";
import SignupFormContainer from "../signup-form-container";

const SignupContainer = () => {
  const { form, isLoading, onSubmit, onGoogleLogin, onInstagramLogin } =
    useSignUp();

  return (
    <FormWrapper className="w-full" form={form} onSubmit={onSubmit}>
      <HStack
        spacing={44}
        align="default"
        className="flex-col md:flex-row w-full"
        noWrap
      >
        <SignupIntroUI
          isLoading={isLoading}
          onGoogleLogin={onGoogleLogin}
          onInstagramLogin={onInstagramLogin}
        />
        <SignupFormContainer isLoading={isLoading} />
      </HStack>
    </FormWrapper>
  );
};

export default SignupContainer;
