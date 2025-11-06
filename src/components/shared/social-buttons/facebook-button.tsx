import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Show } from "@/components/utilities";
import { cn } from "@/lib/utils";
import React from "react";

type Props = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  onClick: () => void;
  isLoading?: boolean;
  showTitle?: boolean;
  iconClassName?: string;
};

const FacebookButton = ({
  isLoading = false,
  onClick,
  showTitle = true,
  className,
  iconClassName,
  ...buttonProps
}: Props) => {
  return (
    <Button
      {...buttonProps}
      type="button"
      disabled={isLoading}
      onClick={onClick}
      variant="link"
      className={cn(
        "text-primary transition-opacity hover:opacity-70",
        className
      )}
    >
      <Icons.facebook className={iconClassName} />
      <Show when={showTitle}>
        <span>FACEBOOK</span>
      </Show>
    </Button>
  );
};

export default FacebookButton;
