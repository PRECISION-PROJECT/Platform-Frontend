import React from "react";
import {
  AboutUsSectionContainer,
  AssociationsSectionContainer,
  HeroSectionContainer,
  StatsSectionContainer,
  VisionSectionContainer,
} from "./containers";

const LandingModule = () => {
  return (
    <div className="scrollbar-hide size-full overflow-x-hidden">
      <HeroSectionContainer />
      <StatsSectionContainer />
      <AboutUsSectionContainer />
      <VisionSectionContainer />
      <AssociationsSectionContainer />
    </div>
  );
};

export default LandingModule;
