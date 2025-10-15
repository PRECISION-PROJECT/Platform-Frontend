import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import React from "react";

type Props = {
  isLoading: boolean;
  onGoogleLogin: () => void;
};

const SigninActionUI = ({ isLoading, onGoogleLogin }: Props) => {
  return (
    <div className="space-y-4 mt-6">
      <div className="flex justify-between flex-col gap-2 md:flex-row-reverse">
        <Button
          className="w-full md:w-1/2"
          size="lg"
          type="submit"
          disabled={isLoading}
        >
          Sign in
        </Button>
        <Button
          size="lg"
          type="button"
          disabled={isLoading}
          onClick={onGoogleLogin}
          variant="secondary"
          className="w-full md:w-1/2 [&_svg:not([class*='size-'])]:size-auto! border-1"
        >
          <Icons.google />
          <span className="ml-2">Sign in with Google</span>
        </Button>
      </div>
      <div className="flex justify-between">
        <Link
          href={ROUTES.SIGN_UP}
          className="text-sm hover:text-primary underline text-center cursor-pointer"
        >
          Don't have an account? Sign up
        </Link>
        <Link
          href={ROUTES.FORGOT_PASSWORD}
          className="text-sm hover:text-primary underline text-center cursor-pointer"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default SigninActionUI;
