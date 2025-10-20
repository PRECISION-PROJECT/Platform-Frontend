import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  description: string;
  name: string;
  role: string;
};

const TestimonialCardUI = ({ description, image, name, role }: Props) => {
  return (
    <Card className="flex w-80 flex-row gap-12 p-6 bg-card border-border hover:shadow-lg transition-shadow">
      {/* Image on the left */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div>

      {/* Content on the right */}
      <div className="flex flex-col justify-center flex-1 text-background">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
        <p className="text-sm leading-relaxed mt-4 line-clamp-3">
          "{description}"
        </p>
      </div>
    </Card>
  );
};

export default TestimonialCardUI;
