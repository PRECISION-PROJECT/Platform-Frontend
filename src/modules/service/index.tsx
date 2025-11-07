import AnimationContainer from "@/components/containers/animation-container";
import HeroSectionUI from "@/components/shared/hero-section-ui";
import React from "react";
import {
  BannerSectionContainer,
  CustomSectionContainer,
  IdeaSectionContainer,
  ProcessSectionContainer,
  ProductsSectionContainer,
  VisionSectionContainer,
} from "./containers";

const ServiceModule = () => {
  return (
    <AnimationContainer delay={0.1}>
      <div className="size-full text-foreground">
        <HeroSectionUI subHeading="HOME / SERVICES" heading="SERVICES" />
        <BannerSectionContainer />
        <ProcessSectionContainer />
        <CustomSectionContainer />
        <VisionSectionContainer />
        <IdeaSectionContainer />
        <ProductsSectionContainer />
      </div>
    </AnimationContainer>
  );
};

export default ServiceModule;
