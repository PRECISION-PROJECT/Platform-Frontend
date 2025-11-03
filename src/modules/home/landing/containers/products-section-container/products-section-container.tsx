import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Heading } from "@/components/shared/heading";
import { VStack } from "@/components/utilities";
import React from "react";
import { ProductListUI } from "../../components/product-section";
import ProductListHeaderUI from "../../components/product-section/project-list-header-ui";

const ProductsSectionContainer = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20 text-foreground">
      <AnimationContainer delay={0.2}>
        <VStack spacing={40}>
          <ProductListHeaderUI />
          <Heading title="OUR PRODUCTS" />
          <ProductListUI />
        </VStack>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default ProductsSectionContainer;
