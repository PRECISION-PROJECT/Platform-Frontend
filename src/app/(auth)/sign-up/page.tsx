import { SignUpModule } from "@/modules/auth";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "This is Sign Up Page",
};

const SignUpPage = () => {
  return <SignUpModule />;
};

export default SignUpPage;
