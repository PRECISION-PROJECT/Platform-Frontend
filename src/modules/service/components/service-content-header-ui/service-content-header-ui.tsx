import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import React from "react";

const ServiceContentHeaderUI = () => {
  return (
    <VStack align="center" justify="center" spacing={28}>
      <span className="text-tan text-sm tracking-widest uppercase">
        WHAT WE DO
      </span>

      <h1 className="font-spring text-xl sm:text-2xl md:text-4xl font-semibold leading-tight text-center">
        BUILD YOUR CUSTOM PRODUCT
      </h1>

      <p className="text-sm opacity-80 max-w-4xl text-center leading-relaxed font-light">
        We understand that for discerning architects, interior designers, and
        visionary project owners, off-the-shelf solutions are simply not an
        option. You require bespoke details, premium materials, and flawless
        execution to bring your unique vision to life. Precision exists to
        deliver exactly that
      </p>

      <div className="text-center text-sm mx-40">
        <p className="font-vuj text-tan italic text-lg md:text-xl font-normal leading-relaxed tracking-wide">
          “ We understand that for discerning architects, interior designers,
          and visionary project owners, off-the-shelf solutions are simply not
          an option. “
        </p>
      </div>

      <Button className={cn("w-fit border-none rounded-none mt-4")}>
        MAKE AN APPOINTMENT NOW
      </Button>
    </VStack>
  );
};

export default ServiceContentHeaderUI;
