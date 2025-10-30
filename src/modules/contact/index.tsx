import { VStack } from "@/components/utilities";
import React from "react";
import { HeroContentHeaderUI, HeroSectionUI } from "./components";
import { HeroFormContainer } from "./containers";

const ContactModule = () => {
  return (
    <div className="scrollbar-hide size-full text-foreground">
      <HeroSectionUI />
      <VStack className="py-24" spacing={56}>
        <HeroContentHeaderUI />
        <HeroFormContainer />
      </VStack>
    </div>
  );
};

export default ContactModule;
