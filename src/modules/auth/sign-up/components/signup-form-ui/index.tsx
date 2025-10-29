"use client";

import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { VStack } from "@/components/utilities";
import { useFormContext } from "react-hook-form";
import { SignUpFormData } from "../../hooks";

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

const SignupFormUI = () => {
  const { control } = useFormContext<SignUpFormData>();

  return (
    <VStack spacing={24}>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          control={control}
          name="lastName"
          placeholder="Last Name *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none"
        />

        <FormInput
          control={control}
          name="firstName"
          placeholder="First Name *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none"
        />
      </div>

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

      <FormInput
        control={control}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none"
      />

      <FormSelect
        control={control}
        name="country"
        placeholder="Country *"
        options={countryOptions}
        required
        selectTriggerClassName="py-[27px] px-5 rounded-none w-full"
      />

      <FormInput
        control={control}
        name="address"
        placeholder="Address *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none"
      />

      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          control={control}
          name="city"
          placeholder="City *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none"
        />

        <FormInput
          control={control}
          name="state"
          placeholder="State / Province *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none"
        />
      </div>

      <FormInput
        control={control}
        name="phone"
        placeholder="Phone number *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none"
      />
    </VStack>
  );
};

export default SignupFormUI;
