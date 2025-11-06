"use client";

import React from "react";

import SocialButtons from "@/components/shared/social-buttons";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities/v-stack";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";

type Props = {
  isLoading: boolean;
  onInstagramLogin: () => void;
  onGoogleLogin: () => void;
};

const SignupIntroUI = ({
  isLoading,
  onInstagramLogin,
  onGoogleLogin,
}: Props) => {
  return (
    <VStack
      spacing={20}
      align="start"
      className="w-full basis-1/2 text-background"
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl leading-none tracking-tight font-semibold font-spring">
        A NEW ACCOUNT
      </h1>

      {/* Description */}
      <p className="text-sm leading-8 font-light">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC
      </p>

      {/* Divider with OR */}
      <div className="flex items-center gap-10 w-full">
        <div className="h-px bg-primary flex-1" />
        <span className="text-sm tracking-widest">OR</span>
        <div className="h-px bg-primary flex-1" />
      </div>

      {/* New customer section */}
      <VStack spacing={16} align="start" className="w-full">
        <h2 className="text-base md:text-lg font-spring font-semibold text-background">
          For Available Customer
        </h2>
        <p className="text-sm leading-8">
          Sign In with your account to explore our service now
        </p>

        <SocialButtons
          isLoading={isLoading}
          onInstagramLogin={onInstagramLogin}
          onGoogleLogin={onGoogleLogin}
        />

        <Button type="button" className="width-fit">
          <Link href={ROUTES.SIGN_IN}>SIGN IN NOW</Link>
        </Button>
      </VStack>
    </VStack>
  );
};

export default SignupIntroUI;
