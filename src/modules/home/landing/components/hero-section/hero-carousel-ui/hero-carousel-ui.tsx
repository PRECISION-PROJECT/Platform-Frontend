"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
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

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex h-full w-screen items-center justify-center overflow-hidden">
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
            return (
              <CarouselItem
                key={index}
                className={cn("basis-1/3", {
                  "sm:basis-[50%] md:basis-[30%]": false,
                })}
              >
                <motion.div
                  initial={false}
                  animate={{
                    clipPath:
                      current !== index
                        ? "inset(15% 0 15% 0 round 2rem)"
                        : "inset(0 0 0 0 round 2rem)",
                  }}
                  className="h-full w-full overflow-hidden rounded-3xl"
                >
                  <div className="relative h-full w-full border">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full scale-105 object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
