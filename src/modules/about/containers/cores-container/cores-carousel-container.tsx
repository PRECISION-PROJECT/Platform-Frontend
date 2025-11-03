"use client";

import { VStack } from "@/components/utilities";
import {
  CoreCarouselUI,
  CoreFeatureUI,
  CoreHeaderUI,
  CoreUnderTextUI,
} from "../../components/core-section";

const CoresContainer = () => {
  return (
    <VStack
      align="center"
      justify="center"
      className="relative py-10 md:py-16"
      spacing={80}
    >
      <CoreUnderTextUI />
      <CoreHeaderUI />
      <CoreCarouselUI />
      <CoreFeatureUI />
    </VStack>
  );
};

export default CoresContainer;
