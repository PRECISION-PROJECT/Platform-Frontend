"use client";

import { FormInput } from "@/components/forms/form-input";
import { useFormContext } from "react-hook-form";
import { SignInFormData } from "../../hooks";

const SigninFormUI = () => {
  const { control } = useFormContext<SignInFormData>();

  return (
    <div className="space-y-8">
      <FormInput
        control={control}
        name="email"
        placeholder="Email *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none"
      />

      <FormInput
        control={control}
        name="password"
        type="password"
        placeholder="Password *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none"
      />
    </div>
  );
};

export default SigninFormUI;
