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
    <AnimationContainer delay={0.1} className="py-10 md:py-20">
      <div className="space-y-10">
        <ContactHeaderUI />
        <ContactActionUI />
      </div>
    </AnimationContainer>
  );
};

export default ContactSectionContainer;
