import { Icons } from "@/assets/icons";
import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const services = [
  {
    imageUrl: "/images/house.png",
    title: "Consult & Plan",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu",
  },
  {
    imageUrl: "/images/table.png",
    title: "Design & Execute",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu",
  },
  {
    imageUrl: "/images/export.png",
    title: "Finish & Deliver",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu",
  },
];

const VisionHeaderUI = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20">
      <AnimationContainer delay={0.1}>
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider opacity-90">
            PRECISION WOOD
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            SHAPE YOUR VISION
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed opacity-90">
            Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
            Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <VStack
              key={`vision-${index}`}
              spacing={6}
              align="center"
              justify="center"
              className={cn({
                "-mt-32": index === 1,
              })}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="h-auto w-auto max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed opacity-50 text-center">
                {service.description}
              </p>
            </VStack>
          ))}
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default VisionHeaderUI;
