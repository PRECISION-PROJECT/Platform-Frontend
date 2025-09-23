"use client";

import { FormWrapper } from "@/components/ui/form";
import { ForgotPasswordFormUI } from "../../components";
import { useForgotPassword } from "../../hooks";

const ForgotPasswordFormContainer = () => {
  const { form, onSubmit, isLoading } = useForgotPassword();

  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <ForgotPasswordFormUI isLoading={isLoading} />
    </FormWrapper>
  );
};

export default ForgotPasswordFormContainer;
