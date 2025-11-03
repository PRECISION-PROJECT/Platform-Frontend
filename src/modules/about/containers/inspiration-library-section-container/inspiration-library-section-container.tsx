"use client";

import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";

import { Tabs } from "@/components/ui/tabs";
import {
  InspirationTabsContentUI,
  InspirationTabsUI,
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
    label: "TABLE",
  },

  {
    value: TAB_VALUE.DECKING,
    label: "DECKING",
  },

  {
    value: TAB_VALUE.FLOORING,
    label: "FLOORING",
  },

  {
    value: TAB_VALUE.COUTERTOPS,
    label: "COUTERTOPS",
  },
  {
    value: TAB_VALUE.MOULDING,
    label: "MOULDING",
  },

  {
    value: TAB_VALUE.MANTLE,
    label: "MANTLE",
  },
];

const tabContent = {
  table: {
    mainImage: "/images/pexels-photo-16.jpeg",
    leftImage: "/images/pexels-photo-17.jpeg",
    leftTitle: "Prime Location",
    centerImage: "/images/pexels-photo-18.jpeg",
    centerTitle: "Comfortable Living",
    bottomLeftImage: "/images/pexels-photo-19.jpeg",
    bottomLeftTitle: "Thoughtful Design",
    bottomRightImage: "/images/pexels-photo-20.jpeg",
    bottomRightTitle: "Prime Location",
  },
  decking: {
    mainImage: "/images/pexels-photo-21.jpeg",
    leftImage: "/images/pexels-photo-22.jpeg",
    leftTitle: "Prime Location",
    centerImage: "/images/pexels-photo-23.jpeg",
    centerTitle: "Comfortable Living",
    bottomLeftImage: "/images/pexels-photo-24.jpeg",
    bottomLeftTitle: "Thoughtful Design",
    bottomRightImage: "/images/pexels-photo-25.jpeg",
    bottomRightTitle: "Prime Location",
  },
  flooring: {
    mainImage: "/images/pexels-photo-26.jpeg",
    leftImage: "/images/pexels-photo-27.jpeg",
    leftTitle: "Prime Location",
    centerImage: "/images/pexels-photo-28.jpeg",
    centerTitle: "Comfortable Living",
    bottomLeftImage: "/images/pexels-photo-29.jpeg",
    bottomLeftTitle: "Thoughtful Design",
    bottomRightImage: "/images/pexels-photo-30.jpeg",
    bottomRightTitle: "Prime Location",
  },
  countertops: {
    mainImage: "/images/pexels-photo-11.jpeg",
    leftImage: "/images/pexels-photo-12.jpeg",
    leftTitle: "Prime Location",
    centerImage: "/images/pexels-photo-13.jpeg",
    centerTitle: "Comfortable Living",
    bottomLeftImage: "/images/pexels-photo-14.jpeg",
    bottomLeftTitle: "Thoughtful Design",
    bottomRightImage: "/images/pexels-photo-15.jpeg",
    bottomRightTitle: "Prime Location",
  },
  moulding: {
    mainImage: "/images/pexels-photo-18.jpeg",
    leftImage: "/images/pexels-photo-17.jpeg",
    leftTitle: "Prime Location",
    centerImage: "/images/pexels-photo-19.jpeg",
    centerTitle: "Comfortable Living",
    bottomLeftImage: "/images/pexels-photo-10.jpeg",
    bottomLeftTitle: "Thoughtful Design",
    bottomRightImage: "/images/pexels-photo-11.jpeg",
    bottomRightTitle: "Prime Location",
  },
  mantle: {
    mainImage: "/images/pexels-photo-22.jpeg",
    leftImage: "/images/pexels-photo-13.jpeg",
    leftTitle: "Prime Location",
    centerImage: "/images/pexels-photo-4.jpeg",
    centerTitle: "Comfortable Living",
    bottomLeftImage: "/images/pexels-photo-5.jpeg",
    bottomLeftTitle: "Thoughtful Design",
    bottomRightImage: "/images/pexels-photo-6.jpeg",
    bottomRightTitle: "Prime Location",
  },
};

const InspirationLibrarySectionContainer = () => {
  return (
    <div className="bg-foreground">
      <AnimationContainer delay={0.1}>
        <InspirationTitleUI />
        <Tabs defaultValue={TAB_VALUE.TABLE} className="w-full rounded-lg">
          <MaxWidthContainer>
            <InspirationTabsUI tabList={TAB_LIST} />
          </MaxWidthContainer>
          <InspirationTabsContentUI
            tabList={TAB_LIST}
            tabContent={tabContent}
          />
        </Tabs>
      </AnimationContainer>
    </div>
  );
};

export default InspirationLibrarySectionContainer;
