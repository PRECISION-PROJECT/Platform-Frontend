import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

interface JourneySectionUIProps {
  label: string;
  heading: string;
  subtitle: string;
  images: {
    team: string;
    workshop: string;
    equipment: string;
  };
  paragraphs: string[];
  signature: string;
  verticalText: string;
}

const JourneySectionUI = ({
  label,
  heading,
  subtitle,
  images,
  paragraphs,
  signature,
  verticalText,
}: JourneySectionUIProps) => {
  return (
    <div className="bg-foreground py-10 md:py-20">
      <MaxWidthContainer>
        <AnimationContainer delay={0.3}>
          {/* Section Header */}
          {/* <VStack
            align="center"
            justify="center"
            spacing={28}
            className="mb-12"
          >
            <span className="text-tan text-sm uppercase tracking-widest">
              {label}
            </span>
            <h1 className="text-foreground font-spring text-center text-xl font-semibold leading-tight sm:text-2xl md:text-4xl">
              {heading}
            </h1>
            <p className="text-muted-foreground text-center text-sm font-light leading-relaxed">
              {subtitle}
            </p>
          </VStack> */}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Overlapping Images */}
            <div className="relative h-[600px]">
              {/* Vertical decorative text */}
              <div className="absolute -left-4 top-1/2 hidden -translate-x-full -translate-y-1/2 -rotate-90 md:block">
                <p className="text-muted-foreground whitespace-nowrap text-xs font-light tracking-[0.3em] opacity-60">
                  {verticalText}
                </p>
              </div>

              {/* Large top-right image (Team Photo) */}
              <div className="absolute right-0 top-0 h-[378px] w-[85%] border">
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={images.team}
                    alt="Our team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Smaller bottom-left overlapping image (Workshop) */}
              <div className="absolute bottom-10 left-0 h-80 w-[75%] border">
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={images.workshop}
                    alt="Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm text-[#D7BA89]">OUR STORY</p>
                <h2 className="text-4xl font-medium tracking-tight py-1 lg:py-2 text-center text-background font-spring">
                  PRECISION JOURNEY
                </h2>
                <p className="font-spring font-bold leading-relaxed text-pretty my-4 text-background text-center">
                  Precision Moulding opened in 1989 to <br /> provide milling
                  and kiln drying
                </p>
                <p className="text-background font-light leading-relaxed text-center max-w-md px-4 lg:px-6">
                  Precision Moulding opened in 1989 to provide <br /> milling
                  and kiln drying services to the eastern <br />
                  NC area and now spans the globe! We specialize in NC area and
                  now spans the
                </p>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default JourneySectionUI;
