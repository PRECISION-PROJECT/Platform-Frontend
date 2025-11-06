import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import Link from "next/link";
import React from "react";

const CtaSectionUI = () => {
  return (
    <div className="bg-black py-24 text-white">
      <MaxWidthContainer>
        <AnimationContainer delay={0.1}>
          <VStack spacing={24} align="center">
            <h2 className="text-center font-light font-spring text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Lets Build the Next Masterpiece Together
            </h2>

            <p className="max-w-2xl text-center font-light text-sm leading-relaxed opacity-80">
              Tell us about your idea, no matter how small, and watch us turn it
              into reality.
            </p>

            <Link href="/contact">
              <Button className="mt-4 bg-primary px-8 py-6 rounded-none font-light text-sm text-white uppercase tracking-wider hover:bg-tan/90">
                GET A CONTACT NOW
              </Button>
            </Link>
          </VStack>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default CtaSectionUI;
