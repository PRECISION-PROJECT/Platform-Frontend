import React from "react";

import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities/v-stack";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";

const SigninIntroUI = () => {
  return (
    <VStack
      spacing={20}
      align="start"
      className="w-full basis-1/2 text-background"
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl leading-none tracking-tight font-semibold font-spring">
        SIGN IN
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
      <VStack spacing={12} align="start" className="w-full">
        <h2 className="text-base md:text-lg font-spring font-semibold text-background">
          For A New Customer
        </h2>
        <p className="text-sm leading-8">
          Create an account with us and you'll be able to:
        </p>

        {/* Benefits list */}
        <ul className="space-y-4 text-sm text-primary ml-8">
          <li className="flex items-start">
            <span className="mr-3">◆</span>
            <span>See all your quotes</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">◆</span>
            <span>Checkout faster</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">◆</span>
            <span>Access your order history</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">◆</span>
            <span>Save items to your Wishlist</span>
          </li>
        </ul>

        <Button className="mt-2 uppercase p-4 text-base rounded-none font-light!">
          <Link href={ROUTES.SIGN_UP}>CREATE A NEW ACCOUNT</Link>
        </Button>
      </VStack>
    </VStack>
  );
};

export default SigninIntroUI;
