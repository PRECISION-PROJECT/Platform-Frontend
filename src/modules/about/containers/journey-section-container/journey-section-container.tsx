"use client";

import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import React from "react";
import { JourneySectionUI } from "../../components";

const JourneySectionContainer = () => {
  const journeyData = {
    label: "OUR STORY",
    heading: "PRECISION JOURNEY",
    subtitle:
      "Precision Moulding opened in 1989 to provide milling and kiln drying",
    images: {
      team: "/images/about/journey-1.png",
      workshop: "/images/about/journey-2.png",
      equipment: "/images/about/journey-3.png",
    },
    paragraphs:
      "Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in  NC area and now spans the ",
    signature: "/images/about/yip-decon.png",
    verticalText:
      "Precision Moulding opened in 1989 to provide milling and kiln drying services to",
  };

  return (
    <div className="bg-paper">
      <AnimationContainer delay={0.3}>
        <MaxWidthContainer className="py-10 md:py-20 px-0!">
          <JourneySectionUI {...journeyData} />
        </MaxWidthContainer>
      </AnimationContainer>
    </div>
  );
};

export default JourneySectionContainer;
