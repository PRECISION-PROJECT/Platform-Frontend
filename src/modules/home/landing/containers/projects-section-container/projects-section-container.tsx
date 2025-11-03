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
import {
  ProjectBeforeAfterUI,
  ProjectContentUI,
} from "../../components/project-section";

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
                  <ProjectBeforeAfterUI project={project} api={api} />
                  <ProjectContentUI
                    project={project}
                    slideNumber={String(current + 1).padStart(2, "0")}
                  />
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
