"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { HStack, VStack } from "@/components/utilities";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Capability = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type Props = {
  capabilities: Capability[];
  setApi: Dispatch<SetStateAction<CarouselApi | undefined>>;
  api: CarouselApi | undefined;
  current: number;
  total: number;
};

const CapabilitiesCarouselUI = ({
  capabilities,
  current,
  total,
  api,
  setApi,
}: Props) => {
  return (
    <div className="relative">
      <VStack
        spacing={80}
        justify="between"
        align="center"
        className="absolute hidden lg:flex -left-18 top-0 h-full"
      >
        <Separator orientation="vertical" className="h-24! w-px! bg-tan" />
        <div className="[writing-mode:vertical-rl] rotate-180 my-6 font-spring tracking-wider text-xl leading-none text-tan">
          MOULDING
        </div>
        <Separator orientation="vertical" className="h-24! w-px! bg-tan" />
      </VStack>
      <Carousel
        setApi={setApi}
        opts={{
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {capabilities.map((capability) => (
            <CarouselItem key={capability.id}>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-muted">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <p
                    className="text-sm tracking-widest font-light text-foreground/60"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {capability.title}
                  </p>
                </div>

                <Image
                  src={capability.image}
                  alt={capability.title}
                  fill
                  quality={100}
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl ml-8 md:ml-16 lg:ml-24">
                    <VStack spacing={16}>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-spring font-semibold text-white">
                        {capability.title}
                      </h3>
                      <p className="text-base md:text-lg font-light text-white/90">
                        {capability.description}
                      </p>
                    </VStack>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 z-10">
                  <HStack spacing={8}>
                    <Button
                      variant="link"
                      onClick={() => api?.scrollPrev()}
                      disabled={!api?.canScrollPrev()}
                      className="text-white hover:text-white/80 p-0 h-auto font-light"
                    >
                      PRE
                    </Button>
                    <Separator
                      orientation="vertical"
                      className="h-4! w-px! bg-foreground"
                    />
                    <Button
                      variant="link"
                      onClick={() => api?.scrollNext()}
                      disabled={!api?.canScrollNext()}
                      className="text-white hover:text-white/80 p-0 h-auto font-light"
                    >
                      NEXT
                    </Button>
                  </HStack>
                </div>

                <div className="absolute bottom-8 right-8 z-10">
                  <span className="text-white font-light text-sm">
                    {String(current).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CapabilitiesCarouselUI;
