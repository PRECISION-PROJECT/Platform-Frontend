"use client";

import { VStack } from "@/components/utilities";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
interface JourneySectionUIProps {
  label: string;
  heading: string;
  subtitle: string;
  images: {
    team: string;
    workshop: string;
    equipment: string;
  };
  paragraphs: string;
  signature: string;
  verticalText: string;
}

const JourneySectionUI = (props: JourneySectionUIProps) => {
  const {
    label,
    heading,
    subtitle,
    images,
    paragraphs,
    signature,
    verticalText,
  } = props;
  return (
    <div className="relative md:mb-10">
      <div className="absolute left-6 bottom-0 -translate-y-1/2 -rotate-90 w-44 hidden lg:block text-background">
        <p className="text-xs tracking-wider ">{verticalText}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* left images */}
        <VStack spacing={0} className="relative gap-6 md:flex-row md:gap-0">
          <div className="w-full md:w-7/12">
            <Image
              src={images.team}
              alt=""
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-5/12 md:mt-16">
            <div className="relative aspect-[217/255] w-full">
              <Image
                src={images.workshop}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* IMAGE 3 overlay */}
          <Image
            src={images.equipment}
            alt=""
            width={210}
            height={255}
            className="hidden lg:block lg:absolute lg:-bottom-12 lg:left-1/2 lg:-translate-x-1/2"
          />
        </VStack>

        {/* right text */}
        <VStack
          align="center"
          justify="center"
          spacing={28}
          className="text-background text-center"
        >
          <VStack spacing={12}>
            <p className="text-sm font-light tracking-wide text-accent">
              {label}
            </p>

            <h2 className="font-spring text-xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
              {heading}
            </h2>
          </VStack>

          <p className="font-spring text-base font-semibold md:w-80 mx-auto">
            {subtitle}
          </p>
          <p className="text-sm font-light text-background">{paragraphs}</p>
          <div className="flex justify-center items-center">
            <Image
              alt="signature"
              src={signature}
              width={200}
              height={200}
              className="w-auto h-auto"
            />
          </div>
        </VStack>
      </div>
    </div>
  );
};

export default JourneySectionUI;
