import AnimationContainer from "@/components/containers/animation-container";
import { ExpertsSectionUI, HeroSectionUI } from "./components";
import { HistoryContainer, JourneySectionContainer } from "./containers";
import CoresContainer from "./containers/cores-container";
import InspirationLibrarySectionContainer from "./containers/inspiration-library-section-container";

const AboutModule = () => {
  return (
    <AnimationContainer delay={0.1}>
      <div className="scrollbar-hide size-full text-foreground">
        <HeroSectionUI />
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
