"use client";

import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Heading } from "@/components/shared/heading";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import * as React from "react";
import {
  TestimonialActionUI,
  TestimonialCardUI,
} from "../../components/testimonial-section";

const dataTestimonials = [
  {
    id: 1,
    data: [
      {
        id: 0,
        image: "/images/living-room.jpeg",
        description:
          "This product completely transformed how I manage my workflow. The interface is intuitive and the support team is incredibly responsive.",
        name: "Sarah Johnson",
        role: "Moulding",
      },
      {
        id: 2,
        image: "/images/living-room.jpeg",
        description:
          "I was skeptical at first, but after using it for a month, I cannot imagine working without it. Highly recommended!",
        name: "Michael Chen",
        role: "Table",
      },
      {
        id: 3,
        image: "/images/living-room.jpeg",
        description:
          "The best investment our team made this year. It has saved us countless hours and improved our productivity significantly.",
        name: "Emily Rodriguez",
        role: "Wood",
      },
      {
        id: 4,
        image: "/images/living-room.jpeg",
        description:
          "Outstanding customer service and a product that actually delivers on its promises. Five stars all around!",
        name: "David Thompson",
        role: "Window",
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 8,
        image: "/images/living-room.jpeg",
        description:
          "The best investment our team made this year. It has saved us countless hours and improved our productivity significantly.",
        name: "Emily Rodriguez",
        role: "Table",
      },
      {
        id: 10,
        image: "/images/living-room.jpeg",
        description:
          "Outstanding customer service and a product that actually delivers on its promises. Five stars all around!",
        name: "David Thompson",
        role: "Table",
      },
      {
        id: 5,
        image: "/images/living-room.jpeg",
        description:
          "The features are comprehensive yet easy to use. Our entire team adopted it within the first week.",
        name: "Jessica Lee",
        role: "Chair",
      },
      {
        id: 6,
        image: "/images/living-room.jpeg",
        description:
          "Exceptional value for money. The ROI was evident within the first month of implementation.",
        name: "Robert Martinez",
        role: "Chair",
      },
    ],
  },
];

export default function TestimonialSectionContainer() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <AnimationContainer delay={0.1} className="py-10 md:py-20 bg-background">
      <MaxWidthContainer>
        <Heading
          className="text-center mb-10 md:mb-16 text-3xl md:text-5xl"
          title="TESTIMONIALS"
        />
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {dataTestimonials.map((group) => (
              <CarouselItem key={group.id} className="w-full">
                <TestimonialCardUI data={group.data} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <TestimonialActionUI
            api={api}
            current={current + 1}
            length={dataTestimonials.length}
          />
        </Carousel>
      </MaxWidthContainer>
    </AnimationContainer>
  );
}
