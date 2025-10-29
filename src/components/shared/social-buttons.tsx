import { Icons } from "@/assets/icons";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  isLoading: boolean;
  onInstagramLogin: () => void;
  onGoogleLogin: () => void;
};

const SocialButtons = ({
  isLoading,
  onInstagramLogin,
  onGoogleLogin,
}: Props) => {
  return (
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
        <span className="ml-2">INSTAGRAM</span>
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
        <span className="ml-2">GOOGLE</span>
      </Button>
    </div>
  );
};

export default SocialButtons;
