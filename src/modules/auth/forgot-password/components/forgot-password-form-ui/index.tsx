"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ForgotPasswordFormData } from "../../hooks";
import { ROUTES } from "@/utils/routes";
import { FormInput } from "@/components/forms/form-input";

const ForgotPasswordFormUI = ({ isLoading }: { isLoading: boolean }) => {
  const { control } = useFormContext<ForgotPasswordFormData>();

  return (
    <div className="space-y-4">
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="info@gmail.com"
        required
      />

      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        Send Reset Link
      </Button>
      <div className="text-center">
        <Link
          href={ROUTES.SIGN_IN}
          className="text-sm text-muted-foreground hover:text-primary underline"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordFormUI;
