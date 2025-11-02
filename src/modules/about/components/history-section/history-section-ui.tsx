"use client";

import AnimationContainer from "@/components/containers/animation-container";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn-io/tabs";
import { VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import React from "react";
import HistoryBackgroundUI from "./history-background-ui";
import HistoryContentUI from "./history-content-ui";

export interface TimelineItem {
  year: string;
  content: string;
  backgroundImage: string;
}

interface HistorySectionUIProps {
  timelineData: TimelineItem[];
  defaultYear?: string;
}

const HistorySectionUI = ({
  timelineData,
  defaultYear,
}: HistorySectionUIProps) => {
  const firstYear = defaultYear || timelineData[0]?.year;

  return (
    <Tabs defaultValue={firstYear} className="w-full">
      <div className="relative w-full">
        {/* Background Image - changes based on active tab */}
        <HistoryBackgroundUI />

        {/* Content */}
        <div className="relative z-10 w-full">
          <VStack spacing={32} className="py-24">
            {/* Title */}
            <AnimationContainer delay={0.1}>
              <div className="flex items-center justify-start px-28">
                <div className="">
                  <h2 className="whitespace-nowrap font-light font-spring text-3xl sm:text-4xl md:text-5xl">
                    THE
                    <br />
                    PRECISION
                    <br />
                    HISTORY
                  </h2>
                </div>
              </div>
            </AnimationContainer>

            {/* Timeline Navigation */}
            <AnimationContainer delay={0.2} className="w-full">
              <TabsList
                activeClassName="bg-transparent shadow-none"
                className="flex h-auto w-full p-8 items-center rounded-none justify-center gap-4 bg-white md:gap-8 lg:gap-16"
              >
                {timelineData.map((item) => (
                  <TabsTrigger
                    key={item.year}
                    value={item.year}
                    className={cn(
                      "h-auto font-spring bg-transparent text-5xl transition-all duration-300 hover:scale-110 data-[state=active]:scale-125 data-[state=active]:text-tan data-[state=inactive]:text-muted-foreground/40 md:text-5xl data-[state=active]:md:text-7xl data-[state=active]:text-tan "
                    )}
                  >
                    {item.year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </AnimationContainer>

            {/* Content Area */}
            <AnimationContainer delay={0.3}>
              <HistoryContentUI timelineData={timelineData} />
            </AnimationContainer>
          </VStack>
        </div>
      </div>
    </Tabs>
  );
};

export default HistorySectionUI;
