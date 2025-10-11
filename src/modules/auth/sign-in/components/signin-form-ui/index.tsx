"use client";

import { FormInput } from "@/components/forms/form-input";
import { useFormContext } from "react-hook-form";
import { SignInFormData } from "../../hooks";

const SigninFormUI = () => {
  const { control } = useFormContext<SignInFormData>();

  return (
    <div className="space-y-4">
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="info@gmail.com"
        required
      />

      <FormInput
        control={control}
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
      />
    </div>
  );
};

export default SigninFormUI;
