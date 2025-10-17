import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import React from "react";

type Props = {
  isLoading: boolean;
  onGoogleLogin: () => void;
};

const SigninActionUI = ({ isLoading, onGoogleLogin }: Props) => {
  return (
    <div className="space-y-6 mt-6">
      <div className="flex gap-2 flex-col">
        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          Sign in
        </Button>
        <div className="relative my-4 flex items-center justify-center overflow-hidden">
          <Separator />
          <div className="px-2 text-center bg-card text-sm">OR</div>
          <Separator />
        </div>
        <Button
          size="lg"
          type="button"
          disabled={isLoading}
          onClick={onGoogleLogin}
          variant="secondary"
          className="w-full [&_svg:not([class*='size-'])]:size-auto! border-1"
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
