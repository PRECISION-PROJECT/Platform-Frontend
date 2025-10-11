"use client";

import { FormInput } from "@/components/forms/form-input";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { ResetPasswordFormData } from "../../hooks";

const ResetPasswordFormUI = ({ isLoading }: { isLoading: boolean }) => {
  const { control } = useFormContext<ResetPasswordFormData>();

  return (
    <div className="space-y-4">
      <FormInput
        control={control}
        name="newPassword"
        label="New Password"
        type="password"
        placeholder="Enter your new password"
        required
      />

      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your new password"
        required
      />

      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        Reset Password
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

export default ResetPasswordFormUI;
