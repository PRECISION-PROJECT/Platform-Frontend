"use client";

import AnimationContainer from "@/components/containers/animation-container";
import { VStack } from "@/components/utilities";
import { ContactContentHeaderUI, HeroSectionUI } from "./components";
import EquipmentContainerUI from "./containers/equipment-container/equipment-container";

const ContactModule = () => {
  return (
    <AnimationContainer delay={0.1}>
      <div className="scrollbar-hide size-full text-foreground">
        <HeroSectionUI />
        <VStack className="py-24" spacing={56}>
          <ContactContentHeaderUI />
          <EquipmentContainerUI />
        </VStack>
      </div>
    </AnimationContainer>
  );
};

export default ContactModule;
