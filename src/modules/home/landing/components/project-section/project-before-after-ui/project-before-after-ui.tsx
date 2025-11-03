"use client";

import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { HStack } from "@/components/utilities";
import { motion } from "framer-motion";
import React from "react";
type Props = {
  api: CarouselApi;
  project: {
    id: number;
    beforeImage: string;
    afterImage: string;
    title: string;
    challenge: string;
    solution: string;
  };
};

const ProjectBeforeAfterUI = ({ api, project }: Props) => {
  return (
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
        <div className="absolute bottom-8 left-8 z-2">
          <span className="font-spring text-base tracking-wider text-foreground font-medium">
            BEFORE
          </span>
        </div>
        <div className="absolute inset-0 bg-black/40 z-1" />
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
        <div className="absolute right-8 top-8 z-2">
          <span className="font-spring text-base tracking-wider text-foreground font-medium">
            AFTER
          </span>
        </div>
        <div className="absolute inset-0 bg-black/40 z-1" />
      </motion.div>

      {/* Custom Navigation - positioned near after image corner */}
      <HStack
        spacing={0}
        justify="end"
        className="absolute bottom-8 z-2 right-8 flex items-center gap-2 md:bottom-12 md:right-12"
      >
        <Button
          variant="link"
          onClick={() => api?.scrollPrev()}
          disabled={!api?.canScrollPrev()}
          className="text-base text-foreground px-2"
        >
          PRE
        </Button>
        <Separator
          orientation="vertical"
          className="h-0.5! w-10! bg-foreground"
        />
        <Button
          variant="link"
          className="text-base text-foreground px-2"
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
          className="bg-foreground p-3 px-6 shadow-lg"
        >
          <span className="font-spring text-base tracking-wider text-background">
            PROJECT
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectBeforeAfterUI;
