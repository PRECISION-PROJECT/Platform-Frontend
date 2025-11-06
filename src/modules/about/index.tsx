import AnimationContainer from "@/components/containers/animation-container";
import HeroSectionUI from "@/components/shared/hero-section-ui";
import { ExpertsSectionUI } from "./components";
import { HistoryContainer, JourneySectionContainer } from "./containers";
import CoresContainer from "./containers/cores-container";
import InspirationLibrarySectionContainer from "./containers/inspiration-library-section-container";

const AboutModule = () => {
  return (
    <AnimationContainer delay={0.1}>
      <div className="scrollbar-hide size-full text-foreground">
        <HeroSectionUI
          subHeading="HOME / ABOUT US"
          heading="ABOUT US"
          className="text-foreground"
        />
        <JourneySectionContainer />
        <CoresContainer />
        <HistoryContainer />
        <ExpertsSectionUI />
        <InspirationLibrarySectionContainer />
      </div>
    </AnimationContainer>
  );
};

export default AboutModule;
