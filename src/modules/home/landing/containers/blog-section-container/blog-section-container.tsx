import AnimationContainer from "@/components/containers/animation-container";
import React from "react";
import { BlogListUI } from "../../components/blog-section";

const BlogSectionContainer = () => {
  return (
    <div className="bg-foreground text-background py-10 md:py-20 overflow-hidden">
      <AnimationContainer delay={0.1} className="space-y-16">
        <h2 className="text-4xl text-center font-semibold tracking-tight font-spring">
          The Craftsmans Journal: Stories from the Wood
        </h2>
        <BlogListUI />
      </AnimationContainer>
    </div>
  );
};

export default BlogSectionContainer;
