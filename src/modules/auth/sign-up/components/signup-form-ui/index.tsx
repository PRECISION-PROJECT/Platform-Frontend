"use client";

import { FormInput } from "@/components/forms/form-input";
import { useFormContext } from "react-hook-form";
import { SignUpFormData } from "../../hooks";

const SignupFormUI = () => {
  const { control } = useFormContext<SignUpFormData>();

  return (
    <div className="space-y-4">
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          control={control}
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          required
        />

        <FormInput
          control={control}
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          required
        />
      </div>

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

      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Enter your confirm password"
        required
      />
    </div>
  );
};

export default SignupFormUI;
