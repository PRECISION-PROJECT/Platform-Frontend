import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

const experts = [
  {
    name: "Brent Deacon",
    description:
      "Aliquet elit turpis ipsum purus sed magna at. Blandit amet fringilla leo volutpat et. Urna ut magna at. Aliquet elit turpis ipsum purus sed magna at. Lorem et magna et turpis et. Urna ut magna at turpis vel.",
    image: "/images/about/expert-1.png",
  },
  {
    name: "Vip Deacon",
    description:
      "Aliquet elit turpis ipsum purus sed magna at. Blandit amet fringilla leo volutpat et. Urna ut magna at. Aliquet elit turpis ipsum purus sed magna at. Lorem et magna et turpis et. Urna ut magna at turpis vel.",
    image: "/images/about/expert-2.png",
  },
];

const ExpertsSectionUI = () => {
  return (
    <div className="bg-black py-24">
      <MaxWidthContainer>
        <VStack spacing={32} align="center">
          {/* Header */}
          <AnimationContainer delay={0.1}>
            <VStack spacing={12} align="center">
              <span className="text-sm text-tan uppercase tracking-widest">
                PRECISION EXPERTS
              </span>
              <h2 className="text-center font-light font-spring text-3xl sm:text-4xl md:text-5xl">
                MEET OUR EXPERTS
              </h2>
              <p className="max-w-2xl text-center font-light text-sm leading-relaxed opacity-80">
                Lorem purus cursus, ultrices elit enim ut id fusce enim. Aliquet
                erat suscipit volutpat faucibus ipsum. Sit cursus.
              </p>
            </VStack>
          </AnimationContainer>

          {/* Expert Cards */}
          <div className="grid w-full gap-12 md:grid-cols-2 md:gap-16">
            {experts.map((expert, index) => (
              <AnimationContainer key={expert.name} delay={0.2 + index * 0.1}>
                <VStack spacing={20} align="center">
                  {/* Image */}
                  <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover grayscale"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Name */}
                  <h3 className="font-light font-spring text-2xl tracking-wide">
                    {expert.name}
                  </h3>

                  {/* Description */}
                  <p className="text-center font-light text-sm leading-relaxed opacity-70">
                    {expert.description}
                  </p>
                </VStack>
              </AnimationContainer>
            ))}
          </div>
        </VStack>
      </MaxWidthContainer>
    </div>
  );
};

export default ExpertsSectionUI;
