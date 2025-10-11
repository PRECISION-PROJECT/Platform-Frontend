"use client";

import { CardContent } from "@/components/ui/card";
import { FormWrapper } from "@/components/ui/form";
import { SignupActionUI, SignupFormUI } from "../../components";
import { useSignUp } from "../../hooks";

const SignupFormContainer = () => {
  const { form, onSubmit, onGoogleLogin, isLoading } = useSignUp();

  return (
    <CardContent>
      <FormWrapper form={form} onSubmit={onSubmit}>
        <SignupFormUI />
        <SignupActionUI isLoading={isLoading} onGoogleLogin={onGoogleLogin} />
      </FormWrapper>
    </CardContent>
  );
};

export default SignupFormContainer;
