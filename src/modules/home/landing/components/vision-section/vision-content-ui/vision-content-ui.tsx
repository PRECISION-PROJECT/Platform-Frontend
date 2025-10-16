import AnimationContainer from "@/components/containers/animation-container";
import { Button } from "@/components/ui/button";
import { HStack, VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const VisionContentUI = () => {
  return (
    <AnimationContainer delay={0.1}>
      <HStack spacing={0}>
        <div className="relative w-full h-[650px] basis-1/2 flex-1">
          <Image
            src="/images/living-room.jpeg"
            alt="Living room"
            fill
            className="object-cover object-center"
            priority
          />

          <div className="absolute inset-0 bg-black/40" />
          <p className="absolute top-0 z-1 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[150px] font-extralight">
            01
          </p>

          <VStack
            justify="center"
            align="center"
            spacing={80}
            className="relative z-10 text-white h-full"
          >
            <h2 className="text-3xl font-serif">Explore our products</h2>
            <p className="max-w-md text-center text-sm opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              corporis aut! Labore dolores ipsam velit ratione. Fugit, natus ea
              dolore possimus odit saepe recusandae accusamus. Beatae quas
              nostrum illo incidunt.
            </p>
            <Button className={cn("w-fit border-none rounded-none py-6 px-8")}>
              Explore The Collection
            </Button>
          </VStack>
        </div>
        <div className="relative w-full h-[650px] basis-1/2 flex-1">
          <Image
            src="/images/spacing-room.jpeg"
            alt="Living room"
            fill
            className="object-cover object-center"
            priority
          />

          <div className="absolute inset-0 bg-black/70" />
          <p className="absolute top-0 z-1 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[150px] font-extralight">
            02
          </p>
          <VStack
            justify="center"
            align="center"
            spacing={80}
            className="relative z-10 text-white h-full"
          >
            <h2 className="text-3xl font-serif">Masterpiece your ideal</h2>
            <HStack className="gap-8">
              <VStack className="flex-1 max-w-md" align="center">
                <p className="text-2xl">For a specific product</p>
                <p className="text-sm opacity-70 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, corporis aut! Labore dolores ipsam velit ratione.
                  Fugit, natus ea dolore possimus odit saepe recusandae
                  accusamus. Beatae quas nostrum illo incidunt.
                </p>
                <Button
                  variant="link"
                  className={cn("w-fit border-none rounded-none py-6 px-8")}
                >
                  CUSTOMIZE A PRODUCT
                </Button>
              </VStack>
              <VStack className="flex-1 max-w-md" align="center">
                <p className="text-2xl">For a specific project</p>
                <p className="text-sm opacity-70 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, corporis aut! Labore dolores ipsam velit ratione.
                  Fugit, natus ea dolore possimus odit saepe recusandae
                  accusamus. Beatae quas nostrum illo incidunt.
                </p>
                <Button
                  variant="link"
                  className={cn("w-fit border-none rounded-none py-6 px-8")}
                >
                  CUSTOMIZE A PRODUCT
                </Button>
              </VStack>
            </HStack>
          </VStack>
        </div>
      </HStack>
    </AnimationContainer>
  );
};

export default VisionContentUI;
