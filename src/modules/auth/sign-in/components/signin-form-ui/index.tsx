"use client";

import { Icons } from "@/assets/icons";
import { TextField } from "@/components/form-field";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";
import { SignInFormData } from "../../hooks";

const SigninFormUI = () => {
  const { control } = useFormContext<SignInFormData>();

  return (
    <div className="space-y-4">
      <TextField
        control={control}
        name="email"
        label="Email"
        placeholder="info@gmail.com"
        required
      />

      <TextField
        control={control}
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
      />
    </div>
  );
};

export default SigninFormUI;
