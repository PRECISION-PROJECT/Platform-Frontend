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
        type="password"
        placeholder="New Password *"
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

      <Button
        className="w-full px-20 h-12 rounded-none font-light!"
        type="submit"
        disabled={isLoading}
      >
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
