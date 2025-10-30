import { VStack } from "@/components/utilities";
import React from "react";

const HeroContentHeaderUI = () => {
  return (
    <VStack align="center" justify="center" spacing={28}>
      <span className="text-tan text-sm tracking-widest uppercase">
        CONNECT WITH US
      </span>

      <h1 className="font-spring text-xl sm:text-2xl md:text-4xl font-semibold leading-tight text-center">
        GET IN TOUCH
      </h1>

      <p className="text-sm opacity-80 max-w-4xl text-center leading-relaxed font-light">
        "Lorem ipsum" is a placeholder text used in graphic design and
        publishing to fill space and show what a document "Lorem ipsum" is a
        placeholder text used in graphic design and publishing to fill space and
        show what a document
      </p>

      <div className="text-center text-sm">
        Host line:{" "}
        <a href="tel:6288888888" className="text-tan hover:underline">
          628 888 8888
        </a>
        <span className="mx-2">-</span>
        Email direct:{" "}
        <a
          href="mailto:precision@gmail.com"
          className="text-tan hover:underline"
        >
          precision@gmail.com
        </a>
      </div>
    </VStack>
  );
};

export default HeroContentHeaderUI;
