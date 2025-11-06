import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroContentUI = () => {
  return (
    <MaxWidthContainer className="z-1 pt-16">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center space-y-8 text-center pt-16">
          <p className="text-sm tracking-wider text-tan">PRECISION WOOD</p>
          <h1 className="text-5xl font-spring leading-tight tracking-tight md:text-7xl lg:text-[90px] text-balance">
            LOST IN
            <br />
            THE WOOD
          </h1>
          <Button className="px-8">CUSTOM YOUR PRODUCT</Button>
          <p className="text-sm">
            Join with us to make an appointment for free
          </p>
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default HeroContentUI;
