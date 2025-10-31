import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Show } from "@/components/utilities";
import { cn } from "@/lib/utils";
import React from "react";

type Props = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  onClick: () => void;
  isLoading?: boolean;
  showTitle?: boolean;
  iconSize?: string | number;
  iconClassName?: string;
};

const InstagramButton = ({
  isLoading = false,
  showTitle = true,
  className,
  onClick,
  iconClassName,
  ...buttonProps
}: Props) => {
  return (
    <Button
      {...buttonProps}
      size="lg"
      type="button"
      disabled={isLoading}
      onClick={onClick}
      variant="link"
      className={cn(
        "[&_svg:not([class*='size-'])]:size-auto! text-primary transition-opacity hover:opacity-70",
        className
      )}
    >
      <Icons.instagram className={iconClassName} />
      <Show when={showTitle}>
        <span>INSTAGRAM</span>
      </Show>
    </Button>
  );
};

export default InstagramButton;
