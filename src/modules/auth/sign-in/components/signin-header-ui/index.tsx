import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SigninHeaderUI = () => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
        Welcome Back
      </CardTitle>
      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
        Log in to continue your shopping and discover timeless wooden pieces.
      </CardDescription>
    </CardHeader>
  );
};

export default SigninHeaderUI;
