"use client";

import { useTabs } from "@/components/ui/shadcn-io/tabs";
import type { TimelineItem } from "../history-section-ui";

interface HistoryContentUIProps {
  timelineData: TimelineItem[];
}

const HistoryContentUI = ({ timelineData }: HistoryContentUIProps) => {
  const { activeValue } = useTabs<string>();
  const activeItem = timelineData.find((item) => item.year === activeValue);

  if (!activeItem) return null;

  return (
    <div className="flex justify-end">
      <div className="max-w-md rounded-sm bg-transparent p-6  md:max-w-lg md:p-8">
        <p className="font-light text-xs leading-relaxed text-foreground md:text-sm">
          {activeItem.content}
        </p>
      </div>
    </div>
  );
};

export default HistoryContentUI;
