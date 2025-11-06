"use client";

import AnimationContainer from "@/components/containers/animation-container";
import HeroSectionUI from "@/components/shared/hero-section-ui";
import { VStack } from "@/components/utilities";
import React from "react";
import { ContactContentHeaderUI } from "./components";
import { ContactFormContainer, ContractMapContainer } from "./containers";

const ContactModule = () => {
  return (
    <AnimationContainer delay={0.1}>
      <div className="scrollbar-hide size-full text-foreground">
        <HeroSectionUI />
        <VStack className="py-24" spacing={56}>
          <ContactContentHeaderUI />
          <ContactFormContainer />
          <ContractMapContainer />
        </VStack>
      </div>
    </AnimationContainer>
  );
};

export default ContactModule;
