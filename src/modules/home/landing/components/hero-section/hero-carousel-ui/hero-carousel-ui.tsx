"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useWindowSize } from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

const images = [
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Block Reader",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Forest Fungi",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Golden Dusk",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Silent Peaks",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Emerald Woods",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Falling Mist",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Midnight Veil",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Azure Ridge",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Illustrations by ©AarzooAly",
    title: "Cloud Summit",
  },
];

export default function HeroCarouselUI() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const { width } = useWindowSize();
  console.log("🚀 ~ HeroCarouselUI ~ width:", width);

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
            delay: 2000,
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
              <CarouselItem
                key={index}
                className={cn(
                  "basis-1/3 md:basis-3/5 lg:basis-2/5 xl:basis-1/5 h-72"
                )}
              >
                <Card
                  className={cn(
                    "h-full bg-transparent border-none shadow-none transition-transform duration-500 transform opacity-30 scale-95",
                    {
                      "opacity-100 scale-100 z-10": isActive,
                    }
                  )}
                >
                  <CardContent className="p-0 relative h-full rounded-md overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority={index === 0}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
