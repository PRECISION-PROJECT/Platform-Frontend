import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroContentUI = () => {
  return (
    <MaxWidthContainer className="z-10 pb-20">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center space-y-8 text-center pt-16">
          <p className="text-sm font-poppins tracking-wider text-secondary">
            PRECISION WOOD
          </p>
          <h1 className="text-5xl leading-tight tracking-tight md:text-7xl lg:text-[90px] text-balance">
            LOST IN
            <br />
            THE WOOD
          </h1>
          <Button variant="default" className="font-poppins">
            CUSTOM YOUR PRODUCT
          </Button>
          <p className="text-sm font-poppins">
            Join with us to make an appointment for free
          </p>
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default HeroContentUI;
