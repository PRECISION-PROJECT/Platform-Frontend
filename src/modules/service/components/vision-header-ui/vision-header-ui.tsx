import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const services = [
  {
    imageUrl: "/images/landing/house.jpeg",
    title: "Consult and Plan",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna.",
  },
  {
    imageUrl: "/images/landing/table.jpeg",
    title: "Design and Execute",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna.",
  },
  {
    imageUrl: "/images/landing/truck.jpeg",
    title: "Finish and Deliver",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna.",
  },
];

const VisionHeaderUI = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20">
      <AnimationContainer delay={0.1}>
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-wider text-tan">
            PRECISION WOOD
          </p>
          <h2 className="mb-4 text-xl md:text-4xl font-semibold font-spring">
            CUSTOM YOUR DEMAND
          </h2>
          <p className="mx-auto max-w-lg text-sm leading-relaxed font-light">
            Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
            Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-28">
          {services.map((service, index) => (
            <VStack
              key={`vision-${index}`}
              align="center"
              justify="center"
              className={cn({
                "md:-mt-32": index === 1,
              })}
              spacing={12}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={240}
                  height={160}
                  className="h-40 w-60 object-cover"
                />
              </div>
              <h3 className="text-xl font-spring font-light">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed font-light text-center">
                {service.description}
              </p>
              <p className="text-center text-sm font-light underline">
                Read More
              </p>
            </VStack>
          ))}
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default VisionHeaderUI;
