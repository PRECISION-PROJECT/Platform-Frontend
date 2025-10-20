import AnimationContainer from "@/components/containers/animation-container";
import { Button } from "@/components/ui/button";
import { HStack, VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const images = [
  {
    src: "https://placehold.co/400",
    name: "2D Graphics",
  },
  {
    src: "https://placehold.co/400",
    name: "3D Animation",
  },
  {
    src: "https://placehold.co/400",
    name: "2D Animation",
  },
  {
    src: "https://placehold.co/400",
    name: "UI/UX Design",
  },
  {
    src: "https://placehold.co/400",
    name: "Branding",
  },
  {
    src: "https://placehold.co/400",
    name: "Print Design",
  },
];

const ProductListUI = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <div
          className="relative overflow-hidden w-full aspect-[3/4]"
          key={image.name}
        >
          <div className="absolute h-full">
            <img
              src={image.src}
              alt={image.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 z-0" />
          <VStack spacing={0} justify={"end"} className="relative p-4 h-full">
            <h3 className="text-2xl uppercase font-spring font-bold">
              {image.name}
            </h3>
          </VStack>
        </div>
      ))}
    </div>
  );
};

export default ProductListUI;
