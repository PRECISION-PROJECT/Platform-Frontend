import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroContentUI = () => {
  return (
    <MaxWidthContainer className="py-10 z-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center space-y-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wider opacity-90">
            PRECISION WOOD
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-balance">
            LOST IN
            <br />
            THE WOOD
          </h1>
          <Button
            size="lg"
            variant="default"
            className="px-8 py-6 text-base font-medium"
          >
            CUSTOM YOUR PRODUCT
          </Button>
          <p className="text-sm opacity-90">
            Join with us to make an appointment for free
          </p>
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default HeroContentUI;
