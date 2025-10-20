import AnimationContainer from "@/components/containers/animation-container";
import { Button } from "@/components/ui/button";
import { HStack, VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const images = [
  {
    src: "https://placehold.co/400",
    name: "Motion Graphics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
  {
    src: "https://placehold.co/400",
    name: "3D Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
  {
    src: "https://placehold.co/400",
    name: "2D Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
];

const BlogListUI = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {images.map((image) => (
        <VStack spacing={16} key={image.name}>
          <div className="shrink-0">
            <img
              src={image.src}
              alt={image.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <VStack className="flex-1">
            <h3 className="text-base font-background font-bold uppercase font-spring">
              {image.name}
            </h3>
            <p className="text-sm opacity-70">{image.description}</p>
          </VStack>
          <div className="mt-auto">
            <Button variant="underline" className="text-background px-0 py-0">
              Read more
            </Button>
          </div>
        </VStack>
      ))}
    </div>
  );
};

export default BlogListUI;
