"use client";

import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import {
  CapabilitiesCarouselUI,
  CapabilitiesHeaderUI,
  CapabilitiesSpeciesGalleryUI,
} from "../../components";
import { useCapabilitiesSectionContainer } from "../../hooks";

const CapabilitiesSectionContainer = () => {
  const { capabilities, woodSpecies, current, total, api, setApi } =
    useCapabilitiesSectionContainer();

  return (
    <div className="bg-paper text-background">
      <MaxWidthContainer className="py-10 md:py-20">
        <AnimationContainer delay={0.2}>
          <VStack spacing={80}>
            <CapabilitiesHeaderUI />
            <CapabilitiesCarouselUI
              capabilities={capabilities}
              api={api}
              current={current + 1}
              total={total}
              setApi={setApi}
            />
            <CapabilitiesSpeciesGalleryUI capabilitiesSpecies={woodSpecies} />
          </VStack>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default CapabilitiesSectionContainer;
