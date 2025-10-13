"use client";

import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";

const HeroVideoUI = () => {
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
    <>
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
        className="absolute bottom-5 left-5 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        {isPlaying ? (
          <Icons.pause className="w-3 h-3 text-white" />
        ) : (
          <Icons.play className="w-3 h-3 text-white ml-0.5" />
        )}
      </Button>
    </>
  );
};

export default HeroVideoUI;
