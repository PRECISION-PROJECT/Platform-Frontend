"use client";

import { useTabs } from "@/components/ui/shadcn-io/tabs";
import Image from "next/image";

const HistoryBackgroundUI = () => {
  const { activeValue } = useTabs<string>();
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/about/history-bg.png"
        alt="History background"
        fill
        quality={100}
        priority
        className="object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default HistoryBackgroundUI;
