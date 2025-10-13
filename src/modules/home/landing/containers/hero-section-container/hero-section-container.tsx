"use client";

import { Icons } from "@/assets/icons";
import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useRef, useState } from "react";

const statistics = [
  {
    label: "Projects",
    value: "240+",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "Experience Years",
    value: "75+",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "Evaluation",
    value: "100%",
    description: "Going above expectations in every deliverable we produce.",
  },
];

const HeroSectionContainer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("[v0] Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="bg-primary text-primary-foreground">
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60 z-0" />

        <Button
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={toggleVideo}
          className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          {isPlaying ? (
            <Icons.pause className="w-5 h-5 text-white" />
          ) : (
            <Icons.play className="w-5 h-5 text-white ml-0.5" />
          )}
        </Button>

        <MaxWidthContainer className="py-10 md:py-20 z-10 mt-20">
          <AnimationContainer delay={0.1}>
            <div className="flex flex-col items-center space-y-8 text-center">
              <p className="text-sm font-medium uppercase tracking-wider opacity-90">
                PRECISION WOOD
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-balance">
                LOST IN
                <br />
                THE WOOD
              </h1>
              <Button
                size="lg"
                variant="default"
                className="px-8 py-6 text-base font-medium"
              >
                CUSTOM YOUR PRODUCT
              </Button>
              <p className="text-sm opacity-90">
                Join with us to make an appointment for free
              </p>

              {/* Tilted Image Cards */}
            </div>
          </AnimationContainer>
        </MaxWidthContainer>

        {/* Carousel indicators */}
      </section>
    </div>
  );
};

export default HeroSectionContainer;
