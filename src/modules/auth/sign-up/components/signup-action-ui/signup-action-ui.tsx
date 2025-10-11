import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import React from "react";

type Props = {
  isLoading: boolean;
  onGoogleLogin: () => void;
};

const SignupActionUI = ({ isLoading, onGoogleLogin }: Props) => {
  return (
    <div className="space-y-4 mt-6">
      <div className="flex justify-between flex-col gap-2 md:flex-row-reverse">
        <Button className="w-full md:w-1/2" size="lg" type="submit" disabled={isLoading}>
          Sign up
        </Button>
        <Button
          size="lg"
          type="button"
          disabled={isLoading}
          onClick={onGoogleLogin}
          variant="outline"
          className="w-full md:w-1/2 [&_svg:not([class*='size-'])]:size-auto!"
        >
          <Icons.google />
          <span className="ml-2">Sign up with Google</span>
        </Button>
      </div>
      <div className="text-center">
        <Link
          href={ROUTES.SIGN_IN}
          className="text-sm text-muted-foreground hover:text-primary underline text-center cursor-pointer"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignupActionUI;
