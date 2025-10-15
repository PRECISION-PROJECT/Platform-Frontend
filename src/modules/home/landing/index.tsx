import React from "react";
import {
  AboutUsSectionContainer,
  AssociationsSectionContainer,
  CapabilitiesSectionContainer,
  HeroSectionContainer,
  InspirationLibrarySectionContainer,
  ProductsSectionContainer,
  StatsSectionContainer,
  VisionSectionContainer,
} from "./containers";

const LandingModule = () => {
  return (
    <div className="scrollbar-hide size-full overflow-x-hidden">
      <HeroSectionContainer />
      <StatsSectionContainer />
      <AboutUsSectionContainer />
      <CapabilitiesSectionContainer />
      <VisionSectionContainer />
      <ProductsSectionContainer />
      <AssociationsSectionContainer />
      <InspirationLibrarySectionContainer />
    </div>
  );
};

export default LandingModule;
