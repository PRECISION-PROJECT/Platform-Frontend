import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  isLoading: boolean;
  onGoogleLogin: () => void;
};

const SigninActionUI = ({ isLoading, onGoogleLogin }: Props) => {
  return (
    <div className="space-y-4 mt-4">
      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        Sign in
      </Button>
      <Button
        size="lg"
        type="button"
        disabled={isLoading}
        onClick={onGoogleLogin}
        variant="outline"
        className="w-full [&_svg:not([class*='size-'])]:size-auto!"
      >
        <Icons.google />
        <span className="ml-2">Sign in with Google</span>
      </Button>
      <div className="text-center">
        <Link
          href="/forgot-password"
          className="text-sm text-muted-foreground hover:text-primary underline text-center cursor-pointer"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default SigninActionUI;
