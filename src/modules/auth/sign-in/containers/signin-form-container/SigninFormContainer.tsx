"use client";

import { CardContent } from "@/components/ui/card";
import { FormWrapper } from "@/components/ui/form";
import { SigninActionUI, SigninFormUI } from "../../components";
import { useSignIn } from "../../hooks";

const SigninFormContainer = () => {
  const { form, onSubmit,onGoogleLogin, isLoading } = useSignIn();

  return (
    <CardContent>
      <FormWrapper form={form} onSubmit={onSubmit}>
        <SigninFormUI />
        <SigninActionUI isLoading={isLoading} onGoogleLogin={onGoogleLogin} />  
      </FormWrapper>
    </CardContent>
  );
};

export default SigninFormContainer;
