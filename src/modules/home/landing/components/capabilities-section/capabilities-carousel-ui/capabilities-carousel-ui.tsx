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
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/routes";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const images = [
  {
    src: "/images/landing/pexels-photo-10.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "MOULDING",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-11.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "JOINERY",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-3.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "FURNITURE",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-4.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "CABINETRY",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-5.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "DESK",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-6.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "PACKAGING",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-7.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "PRINTING",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-8.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "BRANDING",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
  {
    src: "/images/landing/pexels-photo-9.jpeg",
    alt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis sunt quam, aut quod illum officia est cumque non consequuntur.",
    title: "WEB DEVELOPMENT",
    action: "EXPLORE",
    actionLink: ROUTES.HOME,
  },
];

export default function CapabilitiesCarouselUI() {
  const [api, setApi] = React.useState<CarouselApi>();

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
          loop: false,
        }}
        className="w-full"
      >
        <HStack spacing={4} justify="end" className="mb-2">
          <Button
            variant="link"
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
          >
            PRE
          </Button>
          <Separator
            orientation="vertical"
            className="h-px! w-10! bg-foreground"
          />
          <Button
            variant="link"
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
          >
            NEXT
          </Button>
        </HStack>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative overflow-hidden w-full h-image">
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
                  <h3 className="text-base md:text-xl font-spring font-bold">
                    {img.title}
                  </h3>
                  <p className="text-sm text-foreground">{img.alt}</p>
                  <Button className={cn("w-fit")}>{img.action}</Button>
                </VStack>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </VStack>
  );
}
