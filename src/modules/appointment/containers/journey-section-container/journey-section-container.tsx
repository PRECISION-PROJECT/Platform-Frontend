"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import { JourneyHeaderUI, JourneySectionUI } from "../../components";
import { useJourneySectionContainer } from "../../hooks";

const JourneySectionContainer = () => {
  const { steps, bottomText } = useJourneySectionContainer();

  return (
    <div className="bg-paper">
      <MaxWidthContainer className="py-10 md:py-20">
        <VStack spacing={36}>
          <JourneyHeaderUI />
          <JourneySectionUI steps={steps} />
          <p className="text-sm font-light w-full mx-auto text-center max-w-lg leading-relaxed">
            {bottomText}
          </p>
        </VStack>
      </MaxWidthContainer>
    </div>
  );
};

export default JourneySectionContainer;
