import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Heading } from "@/components/shared/heading";
import { VStack } from "@/components/utilities";
import React from "react";
import { BlogListUI } from "../../components/blog-section";

const BlogSectionContainer = () => {
  return (
    <div className="bg-foreground">
      <MaxWidthContainer className="py-10 md:py-20 text-background">
        <AnimationContainer delay={0.2}>
          <VStack spacing={40}>
            <h2 className="text-4xl text-center font-semibold tracking-tight font-spring">
              The Craftsmans Journal: Stories from the Wood
            </h2>
            <BlogListUI />
          </VStack>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default BlogSectionContainer;
