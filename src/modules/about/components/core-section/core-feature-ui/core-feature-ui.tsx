"useclient";

import AnimationContainer from "@/components/containers/animation-container";
import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";
const features = [
  {
    number: "01",
    title: "Free Consult",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et Aliquam erat volutpat.",
  },
  {
    number: "02",
    title: "Advanced Equipment",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et Aliquam erat volutpat.",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description:
      "Aliquet purus et neque scelerisque nibh quis. Aliquet erat velit posuere.",
  },
];
const CoreFeatureHeaderUI = () => {
  return (
    <div className="w-full pt-8">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <AnimationContainer key={feature.number} delay={0.1 * (index + 1)}>
            <VStack spacing={20} align="center" className="gap-1">
              {/* Architectural Icon Placeholder */}
              <div className="relative w-full h-40 max-w-xs">
                <div className="w-full h-full">
                  <Image
                    src="/images/about/factory.png"
                    alt={`${feature.title} icon`}
                    fill
                    className="object-contain h-auto mx-auto mb-4"
                  />
                </div>
                {/* Number and Title */}
                <span className="absolute top-[30%] left-0 font-spring text-5xl font-light">
                  {feature.number}
                </span>
              </div>
              <div className="gap-2">
                <h3 className="font-spring text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="max-w-xs text-sm leading-relaxed ">
                  {feature.description}
                </p>
              </div>
            </VStack>
          </AnimationContainer>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatureHeaderUI;
