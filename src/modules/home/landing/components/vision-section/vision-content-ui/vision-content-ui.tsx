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
          <p className="font-bodoni-moda absolute top-0 z-1 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[150px] font-extralight">
            01
          </p>

          <VStack
            justify="start"
            align="center"
            spacing={80}
            className="pt-44 relative z-10 text-white h-full"
          >
            <h2 className="text-3xl font-spring">Follow your demand</h2>
            <p className="max-w-96 mx-auto text-center text-sm opacity-80">
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
              . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
              arcu .Aliquam erat volutpat. Donec placerat nisl magna,
            </p>
            <Button className={cn("w-fit border-none rounded-none py-6 px-8")}>
              Make an appointment
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
          <p className="font-bodoni-moda absolute top-0 z-1 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[150px] font-extralight">
            02
          </p>
          <VStack
            justify="start"
            align="center"
            spacing={80}
            className="pt-44 relative z-10 text-white h-full"
          >
            <h2 className="text-3xl font-spring">Explore our products</h2>
            <p className="max-w-96 mx-auto text-center text-sm opacity-80">
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
              . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
              arcu .Aliquam erat volutpat. Donec placerat nisl magna,
            </p>
            <Button
              className={cn("w-fit rounded-none border-1 py-6 px-8")}
              variant="link"
            >
              Browse Our Products
            </Button>
          </VStack>
        </div>
      </HStack>
    </AnimationContainer>
  );
};

export default VisionContentUI;
