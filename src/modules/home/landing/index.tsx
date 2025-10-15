import React from "react";
import {
  AboutUsSectionContainer,
  AssociationsSectionContainer,
  CapabilitiesSectionContainer,
  HeroSectionContainer,
  ProductsSectionContainer,
  StatsSectionContainer,
  VisionSectionContainer,
} from "./containers";

const LandingModule = () => {
  return (
    <div className="scrollbar-hide size-full overflow-x-hidden bg-primary text-primary-foreground">
      <HeroSectionContainer />
      <StatsSectionContainer />
      <AboutUsSectionContainer />
      <CapabilitiesSectionContainer />
      <VisionSectionContainer />
      <ProductsSectionContainer />
      <AssociationsSectionContainer />
    </div>
  );
};

export default LandingModule;
