"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "@/components/form-field";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ForgotPasswordFormData } from "../../hooks";
import { ROUTES } from "@/utils/routes";

const ForgotPasswordFormUI = ({ isLoading }: { isLoading: boolean }) => {
  const { control } = useFormContext<ForgotPasswordFormData>();

  return (
    <div className="space-y-6">
      <TextField
        control={control}
        name="email"
        label="Email"
        placeholder="info@gmail.com"
        required
      />

      <Link
        href={ROUTES.SIGN_IN}
        className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400 mb-1.5 inline-block"
      >
        Sign in
      </Link>
      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        Send Reset Link
      </Button>
    </div>
  );
};

export default ForgotPasswordFormUI;
