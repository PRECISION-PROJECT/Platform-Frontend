import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Heading } from "@/components/shared/heading";
import { VStack } from "@/components/utilities";
import React from "react";
import { ProductListUI } from "../../components/product-section";

const ProductsSectionContainer = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20 text-white">
      <AnimationContainer delay={0.2}>
        <VStack spacing={40}>
          <Heading
            title="OUR PRODUCTS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi."
          />
          <ProductListUI />
        </VStack>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default ProductsSectionContainer;
