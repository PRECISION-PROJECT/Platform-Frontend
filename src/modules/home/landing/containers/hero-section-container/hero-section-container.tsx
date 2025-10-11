import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const statistics = [
  {
    label: "Projects",
    value: "240+",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "Experience Years",
    value: "75+",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "Evaluation",
    value: "100%",
    description: "Going above expectations in every deliverable we produce.",
  },
];

const HeroSectionContainer = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <MaxWidthContainer className="py-10 md:py-20">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center space-y-8 text-center">
            <p className="text-sm font-medium uppercase tracking-wider opacity-90">
              PRECISION WOOD
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-balance">
              LOST IN
              <br />
              THE WOOD
            </h1>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-base font-medium"
            >
              CUSTOM YOUR PRODUCT
            </Button>
            <p className="text-sm opacity-90">
              Join with us to make an appointment for free
            </p>

            {/* Tilted Image Cards */}
          </div>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default HeroSectionContainer;
