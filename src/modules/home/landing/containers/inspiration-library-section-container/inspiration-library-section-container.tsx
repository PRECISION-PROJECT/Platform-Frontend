"use client";

import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn-io/tabs";
import { cn } from "@/lib/utils";
import React from "react";
import {
  InspirationTableUI,
  InspirationTitleUI,
} from "../../components/inspiration-library-section";

const TAB_VALUE = {
  TABLE: "table",
  DECKING: "decking",
  FLOORING: "flooring",
  COUTERTOPS: "countertops",
  MOULDING: "moulding",
  MANTLE: "mantle",
};

const TAB_LIST = [
  {
    value: TAB_VALUE.TABLE,
    label: "Table",
  },

  {
    value: TAB_VALUE.DECKING,
    label: "Decking",
  },

  {
    value: TAB_VALUE.FLOORING,
    label: "Flooring",
  },

  {
    value: TAB_VALUE.COUTERTOPS,
    label: "Countertops",
  },
  {
    value: TAB_VALUE.MOULDING,
    label: "Moulding",
  },

  {
    value: TAB_VALUE.MANTLE,
    label: "Mantle",
  },
];

const InspirationLibrarySectionContainer = () => {
  return (
    <div className="bg-background text-primary">
      <AnimationContainer delay={0.1}>
        <InspirationTitleUI />
        <Tabs
          defaultValue={TAB_VALUE.TABLE}
          className="w-full bg-background rounded-lg"
        >
          <MaxWidthContainer>
            <TabsList
              className="grid w-full grid-cols-3 md:grid-cols-6 gap-1 bg-background"
              activeClassName="bg-brand"
            >
              {TAB_LIST.map(({ value, label }) => (
                <TabsTrigger
                  key={label}
                  value={value}
                  className={cn(
                    "p-4 uppercase md:tracking-widest text-primary transition-all",
                    "hover:bg-gray-100",
                    "data-[state=active]:text-white",
                    "data-[state=active]:hover:bg-brand/90"
                  )}
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </MaxWidthContainer>
          <TabsContents className="my-20 bg-background h-fit">
            <TabsContent value={TAB_VALUE.TABLE}>
              <InspirationTableUI />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </AnimationContainer>
    </div>
  );
};

export default InspirationLibrarySectionContainer;
