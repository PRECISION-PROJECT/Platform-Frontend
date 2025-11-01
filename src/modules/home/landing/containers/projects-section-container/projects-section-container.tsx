"use client";
import AnimationContainer from "@/components/containers/animation-container";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { HStack } from "@/components/utilities";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const projects = [
  {
    id: 1,
    beforeImage: "/images/pexels-photo-10.jpeg",
    afterImage: "/images/pexels-photo-11.jpeg",
    title: "Custom Dining Table",
    challenge:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    solution:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 2,
    beforeImage: "/images/pexels-photo-12.jpeg",
    afterImage: "/images/pexels-photo-13.jpeg",
    title: "Outdoor Deck Refinishing",
    challenge:
      "The existing deck had weathered significantly over the years, with faded stain and minor structural concerns that needed addressing.",
    solution:
      "We completely refinished the deck with premium weather-resistant materials, ensuring both aesthetic appeal and long-term durability.",
  },
  {
    id: 3,
    beforeImage: "/images/pexels-photo-14.jpeg",
    afterImage: "/images/pexels-photo-15.jpeg",
    title: "Kitchen Countertop Upgrade",
    challenge:
      "The outdated laminate countertops were showing wear and tear, limiting the kitchen's functionality and visual appeal.",
    solution:
      "We installed custom hardwood countertops that perfectly complement the kitchen's design while providing superior durability.",
  },
];

const ProjectsSectionContainer = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <AnimationContainer delay={0.1}>
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          slidesToScroll: 1,
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 gap-0 lg:grid-cols-[65fr_35fr] h-auto md:h-[500px]"
                >
                  {/* Left Side - Before/After Images */}
                  <div className="relative h-96 md:h-full overflow-hidden">
                    {/* Before Image */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="absolute left-0 top-0 h-full w-1/2 overflow-hidden"
                    >
                      <img
                        src={project.beforeImage || "/placeholder.svg"}
                        alt="Before"
                        className="h-full w-full object-cover"
                      />
                      {/* BEFORE Label */}
                      <div className="absolute bottom-8 left-8">
                        <span className="font-spring text-base tracking-wider text-background font-medium">
                          BEFORE
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/40" />
                    </motion.div>

                    {/* After Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="absolute right-0 top-0 h-full w-1/2 overflow-hidden"
                    >
                      <img
                        src={project.afterImage || "/placeholder.svg"}
                        alt="After"
                        className="h-full w-full object-cover"
                      />
                      {/* AFTER Label */}
                      <div className="absolute right-8 top-8">
                        <span className="font-spring text-base tracking-wider text-background font-medium">
                          AFTER
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/40" />
                    </motion.div>

                    {/* Custom Navigation - positioned near after image corner */}
                    <HStack
                      spacing={0}
                      justify="end"
                      className="absolute bottom-8 right-8 z-30 flex items-center gap-2 md:bottom-12 md:right-12"
                    >
                      <Button
                        variant="link"
                        onClick={() => api?.scrollPrev()}
                        disabled={!api?.canScrollPrev()}
                        className="text-base text-primary px-2"
                      >
                        PRE
                      </Button>
                      <Separator
                        orientation="vertical"
                        className="h-0.5! w-10! bg-primary"
                      />
                      <Button
                        variant="link"
                        className="text-base text-primary px-2"
                        onClick={() => api?.scrollNext()}
                        disabled={!api?.canScrollNext()}
                      >
                        NEXT
                      </Button>
                    </HStack>

                    {/* PROJECT Label in Center */}
                    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-foreground px-8 py-4 shadow-lg md:px-12 md:py-6"
                      >
                        <span className="font-spring text-base tracking-wider text-background">
                          PROJECT
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative flex h-full flex-col justify-start bg-paper p-8 md:p-12 lg:p-14 overflow-hidden"
                  >
                    <h2 className="mb-8 font-spring text-2xl tracking-tight text-background md:mb-12">
                      {project.title}
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-4 font-spring font-bold text-base tracking-wide text-primary">
                          Challenge:
                        </h3>
                        <p className="leading-relaxed text-sm font-light text-background">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="mb-4 font-spring font-bold text-base tracking-wide text-primary">
                          Solution:
                        </h3>
                        <p className="leading-relaxed text-sm font-light text-background">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Slide Number */}
                    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
                      <span className="font-spring text-sm tracking-wider text-primary">
                        {String(current + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </AnimationContainer>
  );
};

export default ProjectsSectionContainer;
