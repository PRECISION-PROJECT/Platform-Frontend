import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

const AboutUsLiveEdgeUI = () => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 mt-10">
      <VStack spacing={16} justify="end" align="default">
        <h3 className="font-spring text-2xl font-semibold text-balance">
          Live Edge Handcrafted with Love
        </h3>
        <div className="h-px w-3/4 bg-primary-foreground/30" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
          Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
          .Aliquam erat volutpat.
        </p>
        <Button
          variant="default"
          size="sm"
          className="font-poppins w-fit rounded-none"
        >
          READ MORE
        </Button>
      </VStack>

      <div className="relative h-80 border border-dashed bg-foreground border-border-dashed">
        <Image
          src="/images/pexels-photo-3.jpeg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUsLiveEdgeUI;
