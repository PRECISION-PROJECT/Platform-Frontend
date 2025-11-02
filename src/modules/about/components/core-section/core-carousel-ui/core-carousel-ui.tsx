"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";
const images = [
  {
    title: "OUR MISSION",
    description:
      "Mauris dictum neque scelerisque purus sed morbi in. Pellentesque ut velit ac porta vitae. Nunc a lectus sed vitae nisi et. Volutpat egestas lacus, lacus ullamcorper cras, vivamus arcu. Sem pulvinar quis mattis arcu. Quam",
    image: "/images/about/core-1.png",
  },
  {
    title: "OUR VISION",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque ut velit ac porta vitae. Nunc a lectus sed vitae nisi et. Volutpat egestas lacus ullamcorper cras.",
    image: "/images/about/core-1.png",
  },
  {
    title: "OUR VALUES",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque ut velit ac porta vitae. Nunc a lectus sed vitae nisi et.",
    image: "/images/about/core-1.png",
  },
];

export default function CoresCarouselUI() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex w-screen items-center justify-center overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((item, index) => {
            const isActive = index === current;
            return (
              <CarouselItem key={index} className={cn("basis-1/2 ")}>
                <Card
                  className={cn(
                    "h-full border-none bg-transparent opacity-20 shadow-none transition-transform duration-500 transform scale-95",
                    {
                      "opacity-80 z-10 scale-100": isActive,
                    }
                  )}
                >
                  <CardContent className="relative h-full overflow-hidden rounded-md p-0">
                    <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl">
                      {/* Background Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={100}
                        className="object-cover"
                        priority
                      />
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                        <p className="max-w-md text-sm font-light leading-relaxed opacity-90 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex item-center justify-center text-center bg-[#1B1B1B] py-10">
                      <h3 className="text-white font-spring text-2xl font-light tracking-wide sm:text-3xl md:text-4xl">
                        {item.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
