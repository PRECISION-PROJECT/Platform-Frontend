"use client";

import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { HStack, VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/routes";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const images = [
  {
    src: "/images/landing/pexels-photo-1.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "MOULDING",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-2.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "JOINERY",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-3.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "FURNITURE",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-4.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "CABINETRY",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-5.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "DESK",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-6.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "PACKAGING",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-7.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "PRINTING",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-8.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "BRANDING",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-9.jpeg",
    alt: "Illustrations by ©AarzooAly",
    title: "WEB DEVELOPMENT",
    action: "Explore",
    actionLink: ROUTES.HOME,
  },
];

export default function CapabilitiesCarouselUI() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <VStack className="w-full">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <HStack spacing={12} justify="end" className="mb-2">
          <Button
            variant="link"
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
            className="text-sm"
          >
            PRE
          </Button>
          <Separator orientation="vertical" className="h-0.5! w-14!" />
          <Button
            variant="link"
            className="text-sm"
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
          >
            NEXT
          </Button>
        </HStack>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative overflow-hidden w-full h-96">
                <div className="absolute h-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 z-0" />
                <VStack
                  spacing={16}
                  justify={"end"}
                  className="relative p-4 h-full"
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-spring font-bold">
                    {img.title}
                  </h3>
                  <p className="text-sm text-white/80">{img.alt}</p>
                  <Button
                    size="sm"
                    className={cn("w-fit border-none rounded-none")}
                  >
                    {img.action}
                  </Button>
                </VStack>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </VStack>
  );
}
