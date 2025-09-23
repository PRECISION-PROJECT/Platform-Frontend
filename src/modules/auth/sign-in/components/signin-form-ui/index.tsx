"use client"

import React from "react";
import { useFormContext } from "react-hook-form";
import { SignInFormData } from "../../hooks";
import { TextField } from "@/components/form-field";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SigninFormUI = ({ isLoading }: { isLoading: boolean }) => {
  const { control } = useFormContext<SignInFormData>();

  return (
    <div className="space-y-6">
      <TextField
        control={control}
        name="email"
        label="Email"
        placeholder="info@gmail.com"
        required
      />

      <TextField
        control={control}
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
      />

      <Link
        href="/forgot-password"
        className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400 mb-1.5 inline-block"
      >
        Forgot password?
      </Link>
      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        Sign in
      </Button>
    </div>
  );
};

export default SigninFormUI;
