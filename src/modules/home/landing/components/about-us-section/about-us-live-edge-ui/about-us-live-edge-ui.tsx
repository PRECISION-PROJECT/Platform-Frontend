import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

const AboutUsLiveEdgeUI = () => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 mt-2 text-secondary">
      <VStack spacing={16} justify="end" align="default">
        <h3 className="font-spring text-xl font-semibold text-balance">
          Live Edge Handcrafted with Love
        </h3>
        <Separator orientation="horizontal" className="h-px w-full bg-tan" />
        <p className="text-sm font-light leading-relaxed">
          Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
          Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
          .Aliquam erat volutpat.
        </p>
        <Button className="w-fit">READ MORE</Button>
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
