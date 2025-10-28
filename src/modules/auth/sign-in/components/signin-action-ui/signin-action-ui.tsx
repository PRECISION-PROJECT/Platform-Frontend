import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VStack } from "@/components/utilities";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import React from "react";

type Props = {
  isLoading: boolean;
  onGoogleLogin: () => void;
  onInstagramLogin: () => void;
};

const SigninActionUI = ({
  isLoading,
  onInstagramLogin,
  onGoogleLogin,
}: Props) => {
  return (
    <VStack
      justify="center"
      align="center"
      spacing={24}
      className="mt-6 text-primary"
    >
      <p className="text-sm font-light">Sign In with</p>
      <div className="flex gap-4 flex-row">
        <Button
          size="lg"
          type="button"
          disabled={isLoading}
          onClick={onInstagramLogin}
          variant="link"
          className="[&_svg:not([class*='size-'])]:size-auto! text-primary!"
        >
          <Icons.instagram />
          <span className="ml-2">Instagram</span>
        </Button>
        <Button
          size="lg"
          type="button"
          disabled={isLoading}
          onClick={onGoogleLogin}
          variant="link"
          className="[&_svg:not([class*='size-'])]:size-auto! text-primary!"
        >
          <Icons.google />
          <span className="ml-2">Google</span>
        </Button>
      </div>
      <div>
        <Button
          className="width-fit px-20 h-12 rounded-none font-light!"
          size="lg"
          type="submit"
          disabled={isLoading}
        >
          Submit
        </Button>
      </div>
      <Link
        href={ROUTES.FORGOT_PASSWORD}
        className="text-sm hover:underline text-center cursor-pointer"
      >
        Forgot password?
      </Link>
    </VStack>
  );
};

export default SigninActionUI;
