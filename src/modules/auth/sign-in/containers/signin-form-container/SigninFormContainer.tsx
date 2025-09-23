"use client";

import { FormWrapper } from "@/components/ui/form";
import { useSignIn } from "../../hooks";
import { SigninFormUI } from "../../components";

const SigninFormContainer = () => {
  const { form, onSubmit, isLoading } = useSignIn();

  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <SigninFormUI isLoading={isLoading} />
    </FormWrapper>
  );
};

export default SigninFormContainer;
