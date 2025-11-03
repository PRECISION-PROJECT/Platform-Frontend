"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
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
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <MaxWidthContainer className="px-0 md:px-12">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full overflow-visible"
      >
        <CarouselContent className="-ml-4">
          {images.map((item, index) => {
            const isActive = index === current;

            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-full lg:basis-[600px]"
              >
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <div
                      className={cn(
                        "relative mx-auto scale-90 opacity-20 aspect-[4/3] w-full transition-all duration-500",
                        {
                          "scale-100 opacity-100": isActive,
                        }
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={cn("object-cover opacity-30", {
                          "opacity-100": isActive,
                        })}
                        priority={isActive}
                      />
                      {/* Overlay text */}
                      <div
                        className={cn(
                          "absolute opacity-0 pointer-events-none inset-0 flex items-center justify-center p-6 text-center text-foreground",
                          {
                            "opacity-100": isActive,
                          }
                        )}
                      >
                        <p className="max-w-md text-sm font-light leading-relaxed opacity-90 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "mt-0 flex items-center opacity-0 pointer-events-none justify-center bg-background py-8 transition-opacity duration-300",
                        {
                          "opacity-100": isActive,
                        }
                      )}
                    >
                      <h3 className="font-spring text-2xl font-light tracking-wide text-foreground sm:text-3xl md:text-4xl">
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
    </MaxWidthContainer>
  );
}
