"use client";

import AnimationContainer from "@/components/containers/animation-container";
import HeroSectionUI from "@/components/shared/hero-section-ui";
import {
  AppointmentFormContainer,
  AppointmentQuestionContainer,
  JourneySectionContainer,
} from "./containers";

const AppointmentModule = () => {
  return (
    <AnimationContainer delay={0.1}>
      <div className="size-full text-background">
        <HeroSectionUI
          subHeading="HOME / APPOINTMENT"
          heading="APPOINTMENT"
          className="text-foreground"
        />
        <JourneySectionContainer />
        <AppointmentFormContainer />
        <AppointmentQuestionContainer />
      </div>
    </AnimationContainer>
  );
};

export default AppointmentModule;
