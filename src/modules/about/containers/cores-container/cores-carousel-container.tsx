"use client";

import { VStack } from "@/components/utilities";
import CoresCarouselUi from "../../components/core-section/core-carousel-ui/core-carousel-ui";
import CoreFeatureHeaderUI from "../../components/core-section/core-feature-ui";
import CoreContentHeaderUI from "../../components/core-section/core-header-ui/core-header-ui";

const CoresContainer = () => {
  return (
    <VStack align="center" justify="center" className="relative" spacing={80}>
      <CoreContentHeaderUI />
      <CoresCarouselUi />
      <CoreFeatureHeaderUI />
    </VStack>
  );
};

export default CoresContainer;
