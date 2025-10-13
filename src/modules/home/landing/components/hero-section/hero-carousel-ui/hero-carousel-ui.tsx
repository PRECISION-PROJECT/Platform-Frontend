"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

export default function HeroCarouselUI() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const items = Array.from({ length: 5 });

  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    api.on("select", update);
    update();
  }, [api]);

  const images = [
    {
      href: "https://placehold.co/600x400",
      alt: "Hero Carousel 1",
    },
    {
      href: "https://placehold.co/600x400",
      alt: "Hero Carousel 2",
    },
    {
      href: "https://placehold.co/600x400",
      alt: "Hero Carousel 3",
    },
    {
      href: "https://placehold.co/600x400",
      alt: "Hero Carousel 4",
    },
    {
      href: "https://placehold.co/600x400",
      alt: "Hero Carousel 5",
    },
  ];

  return (
    <div className="w-full h-[300px]">
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
        opts={{ align: "center", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((item, index) => {
            const diff = Math.abs(current - index) % items.length;
            const isMiddle = diff === 0;
            const isSide = diff === 1 || diff === items.length - 1;

            // scale and opacity for smooth transition
            const scale = isMiddle
              ? "scale-100"
              : isSide
              ? "scale-90"
              : "scale-75";
            const opacity = isMiddle ? "opacity-100" : "opacity-50";

            return (
              <CarouselItem key={index} className="basis-1/3">
                <div
                  className={cn(
                    "transform transition-all duration-700 ease-in-out",
                    scale,
                    opacity
                  )}
                >
                  <Image
                    src={item.href}
                    alt={item.alt}
                    width={600}
                    height={300}
                    unoptimized
                    quality={100}
                    priority
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
