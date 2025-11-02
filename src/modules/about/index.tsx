import AnimationContainer from "@/components/containers/animation-container";
import { VStack } from "@/components/utilities";
import React from "react";
import { CtaSectionUI, ExpertsSectionUI, HeroSectionUI } from "./components";
import {
  CoresCarouselContainer,
  CraftsmanshipTabsContainer,
  HistoryContainer,
  JourneySectionContainer,
} from "./containers";
import CoresContainer from "./containers/cores-container";

const AboutModule = () => {
  return (
    <AnimationContainer delay={0.1}>
      <div className="scrollbar-hide size-full text-foreground">
        <HeroSectionUI />
        <VStack className="py-24" spacing={56}>
          <JourneySectionContainer />
          <CoresContainer />
          <HistoryContainer />
          <ExpertsSectionUI />
          <CraftsmanshipTabsContainer />
          {/* <CtaSectionUI /> */}
        </VStack>
      </div>
    </AnimationContainer>
  );
};

export default AboutModule;
