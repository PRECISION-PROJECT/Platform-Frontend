"use client";

import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

const craftsmanshipCategories = [
  {
    id: "tools",
    label: "TOOLS",
    images: [
      "/images/pexels-photo-1.jpeg",
      "/images/pexels-photo-2.jpeg",
      "/images/pexels-photo-3.jpeg",
      "/images/pexels-photo-4.jpeg",
    ],
  },
  {
    id: "moulding",
    label: "MOULDING",
    images: [
      "/images/pexels-photo-1.jpeg",
      "/images/pexels-photo-2.jpeg",
      "/images/pexels-photo-3.jpeg",
      "/images/pexels-photo-4.jpeg",
    ],
  },
  {
    id: "framing",
    label: "FRAMING",
    images: [
      "/images/pexels-photo-1.jpeg",
      "/images/pexels-photo-2.jpeg",
      "/images/pexels-photo-3.jpeg",
      "/images/pexels-photo-4.jpeg",
    ],
  },
  {
    id: "countertops",
    label: "COUNTERTOPS",
    images: [
      "/images/pexels-photo-1.jpeg",
      "/images/pexels-photo-2.jpeg",
      "/images/pexels-photo-3.jpeg",
      "/images/pexels-photo-4.jpeg",
    ],
  },
  {
    id: "mantels",
    label: "MANTELS",
    images: [
      "/images/pexels-photo-1.jpeg",
      "/images/pexels-photo-2.jpeg",
      "/images/pexels-photo-3.jpeg",
      "/images/pexels-photo-4.jpeg",
    ],
  },
];

const CraftsmanshipTabsContainer = () => {
  return (
    <div className="bg-white py-24">
      <MaxWidthContainer>
        <VStack spacing={32} align="center">
          {/* Header */}
          <AnimationContainer delay={0.1}>
            <h2 className="text-center text-background font-bold font-spring text-3xl sm:text-4xl md:text-5xl">
              PRECISION CRAFTSMANSHIP
            </h2>
          </AnimationContainer>

          {/* Tabs */}
          <Tabs defaultValue="tools" className="w-full">
            <TabsList className="mb-12 grid h-auto w-full grid-cols-2 gap-2 bg-transparent lg:grid-cols-5">
              {craftsmanshipCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=inactive]:bg-white px-6 py-3 rounded-none front-spring text-sm tracking-wider data-[state=active]:bg-[#695441]! data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {craftsmanshipCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {category.images.map((image, index) => (
                    <AnimationContainer key={index} delay={0.1 * index}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={image}
                          alt={`${category.label} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </AnimationContainer>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </VStack>
      </MaxWidthContainer>
    </div>
  );
};

export default CraftsmanshipTabsContainer;
