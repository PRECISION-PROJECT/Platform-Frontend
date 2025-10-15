import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  ContactActionUI,
  ContactHeaderUI,
} from "../../components/contact-section";

const ContactSectionContainer = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20">
      <AnimationContainer delay={0.1}>
        <div className="space-y-12">
          <ContactHeaderUI />
          <ContactActionUI />
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default ContactSectionContainer;
