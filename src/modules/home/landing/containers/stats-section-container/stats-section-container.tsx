import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const stats = [
  {
    label: "FIGURE A",
    value: "80",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "FIGURE A",
    value: "75",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "FIGURE A",
    value: "100",
    description: "Going above expectations in every deliverable we produce.",
  },
];

const StatsSectionContainer = () => {
  return (
    <div className="bg-primary text-primary-foreground border-t">
      <MaxWidthContainer className="py-10 md:py-20">
        <AnimationContainer delay={0.2}>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <p className="mb-4 text-xs font-medium uppercase tracking-wider opacity-80">
                  {stat.label}
                </p>
                <p className="mb-4 font-serif text-7xl font-bold">
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed opacity-90">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default StatsSectionContainer;
