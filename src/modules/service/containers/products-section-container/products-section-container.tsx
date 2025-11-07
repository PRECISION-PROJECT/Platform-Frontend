import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Heading } from "@/components/shared/heading";
import { VStack } from "@/components/utilities";
import React from "react";
import { ProductListHeaderUI, ProductListUI } from "../../components";

const ProductsSectionContainer = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20 text-background bg-paper">
      <AnimationContainer delay={0.2}>
        <VStack spacing={40}>
          <ProductListHeaderUI />
          <Heading title="THE COLLECTION" className="text-background" />
          <ProductListUI />
        </VStack>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default ProductsSectionContainer;
