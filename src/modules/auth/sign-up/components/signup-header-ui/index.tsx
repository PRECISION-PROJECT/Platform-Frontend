import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SignupHeaderUI = () => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
        Sign Up
      </CardTitle>
      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
        Join our woodcraft community and enjoy exclusive deals on premium
        furniture.
      </CardDescription>
    </CardHeader>
  );
};

export default SignupHeaderUI;
