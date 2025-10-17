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
    <div className="space-y-6 mt-6">
      <div className="flex justify-between flex-col gap-2 md:flex-row-reverse">
        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          Sign up
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
