"use client";

import AnimationContainer from "@/components/containers/animation-container";
import { Tabs } from "@/components/ui/tabs";
import { VStack } from "@/components/utilities";
import { groupByKey } from "@/utils/common";
import { useMemo, useState } from "react";
import {
  HistoryBackgroundUI,
  HistoryContentUI,
  HistoryTabUI,
  HistoryTitleUI,
} from "../../components/history-section";

const TAB_LIST = [
  {
    value: "1986",
    label: "1986",
  },
  {
    value: "1999",
    label: "1999",
  },
  {
    value: "1977",
    label: "1977",
  },
  {
    value: "2016",
    label: "2016",
  },
  {
    value: "2025",
    label: "2025",
  },
];

const timelineData = [
  {
    year: "1986",
    backgroundImage: "/images/about/history-bg.png",
    content:
      "Alexandria Moulding was established in 1986, beginning a legacy of excellence in moulding and millwork. Our founders envisioned creating superior architectural products that would stand the test of time, combining traditional craftsmanship with innovative techniques.",
  },
  {
    year: "1999",
    backgroundImage: "/images/about/history-bg.png",
    content:
      "A pivotal year of expansion and modernization. We invested heavily in state-of-the-art manufacturing equipment and expanded our product line to meet growing demand. This period marked our transition from a regional supplier to a nationally recognized brand.",
  },
  {
    year: "1977",
    backgroundImage: "/images/about/history-bg.png",
    content:
      "The foundation of precision woodworking that would later inspire Alexandria Moulding. Our craftsmanship roots trace back to this era, where quality and attention to detail became the cornerstone of our philosophy.",
  },
  {
    year: "2016",
    backgroundImage: "/images/about/history-bg.png",
    content:
      "Celebrating 30 years of innovation and growth. We launched our e-commerce platform and enhanced our digital presence, making our premium products more accessible to customers nationwide while maintaining our commitment to quality and service.",
  },
  {
    year: "2025",
    backgroundImage: "/images/about/history-bg.png",
    content:
      "Looking ahead to the future of Alexandria Moulding. We continue to innovate with sustainable practices, advanced manufacturing technologies, and an unwavering dedication to providing exceptional architectural products for generations to come.",
  },
];

const HistoryContainer = () => {
  const [currentTab, setCurrentTab] = useState(TAB_LIST[2].value);
  const tabContent = useMemo(() => groupByKey(timelineData, "year"), []);
  return (
    <div className="bg-foreground relative w-full">
      <AnimationContainer delay={0.1}>
        <HistoryBackgroundUI />
        <Tabs
          value={currentTab}
          defaultValue={TAB_LIST[2].value}
          className="w-full relative"
          onValueChange={setCurrentTab}
        >
          <VStack spacing={32} className="py-24">
            <HistoryTitleUI />
            <HistoryTabUI currentTab={currentTab} tabList={TAB_LIST} />
            <HistoryContentUI tabList={TAB_LIST} tabContent={tabContent} />
          </VStack>
        </Tabs>
      </AnimationContainer>
    </div>
  );
};

export default HistoryContainer;
