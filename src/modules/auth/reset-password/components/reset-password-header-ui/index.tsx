import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {
  email: string;
};

const ResetPasswordHeaderUI = ({ email }: Props) => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl md:text-4xl leading-none tracking-tight font-semibold font-spring">
        Reset Your Password
      </CardTitle>
      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
        Enter your new password for{" "}
        <span className="text-sm leading-8 font-light">{email}</span>
      </CardDescription>
    </CardHeader>
  );
};

export default ResetPasswordHeaderUI;
