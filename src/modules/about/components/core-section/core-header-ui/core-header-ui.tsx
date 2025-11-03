import { VStack } from "@/components/utilities";
import React from "react";

const CoreContentHeaderUI = () => {
  return (
    <VStack
      align="center"
      justify="center"
      spacing={12}
      className="text-center"
    >
      <span className="text-tan text-sm font-light tracking-widest">
        PRECISION APPROACH
      </span>

      <h1 className="font-spring text-xl sm:text-2xl md:text-4xl font-semibold leading-tight">
        THE PRECISION CORES
      </h1>
    </VStack>
  );
};

export default CoreContentHeaderUI;
