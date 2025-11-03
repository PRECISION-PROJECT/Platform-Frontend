import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import React from "react";
import {
  CapabilitiesCarouselUI,
  CapabilitiesHeaderUI,
} from "../../components/capabilities-section";

const CapabilitiesSectionContainer = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20 text-foreground">
      <AnimationContainer delay={0.2}>
        <VStack>
          <CapabilitiesHeaderUI />
          <CapabilitiesCarouselUI />
        </VStack>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default CapabilitiesSectionContainer;
