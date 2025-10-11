import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  email: string;
  isLoading: boolean;
};

const EmailConfirmHeaderUI = ({ email, isLoading }: Props) => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">Verifying Your Email</CardTitle>
      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
        We are verifying your email address for{" "}
        <span
          className={cn(
            "font-medium text-gray-700 dark:text-gray-300",
            isLoading && "animate-pulse"
          )}
        >
          {email}
        </span>
        . Please wait a moment while we process your request.
      </CardDescription>
    </CardHeader>
  );
};

export default EmailConfirmHeaderUI;
