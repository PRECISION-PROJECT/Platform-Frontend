import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import React from "react";

type Props = {
  data: {
    label: string;
    value: string;
    description: string;
  }[];
};

const HeroStatisticUI = ({ data }: Props) => {
  return (
    <MaxWidthContainer className="z-1 pb-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {data.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4"
          >
            <p className="text-sm font-medium font-spring uppercase tracking-wider text-tan">
              {stat.label}
            </p>
            <p className="font-spring text-16xl">
              <CountingNumber
                number={Number(stat.value)}
                inView={true}
                transition={{ stiffness: 100, damping: 30 }}
              />
            </p>
            <p className="text-sm leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>
    </MaxWidthContainer>
  );
};

export default HeroStatisticUI;
