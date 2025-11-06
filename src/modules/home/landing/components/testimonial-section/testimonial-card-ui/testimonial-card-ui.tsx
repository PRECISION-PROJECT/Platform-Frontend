import { Card } from "@/components/ui/card";
import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

type Props = {
  data: {
    id: number;
    image: string;
    description: string;
    name: string;
    role: string;
  }[];
};

const TestimonialCardUI = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {data.map((item) => (
        <VStack
          spacing={16}
          key={item.id}
          className="text-center sm:text-left text-sm"
        >
          <p className="flex-1 text-foreground/90 leading-relaxed italic">
            “ {item.description} ”
          </p>
          <p className="font-semibold mt-auto text-tan">
            — {item.name},{" "}
            <span className="font-light text-tan">{item.role}</span>
          </p>
        </VStack>
      ))}
    </div>
  );
};

export default TestimonialCardUI;
