"use client";

import SocialButtons from "@/components/shared/social-buttons";
import { VStack } from "@/components/utilities";

const HeroContentActionUI = () => {
  return (
    <VStack align="center" justify="center" className="pt-12">
      <SocialButtons
        isLoading={false}
        onInstagramLogin={() => {}}
        onGoogleLogin={() => {}}
      />
    </VStack>
  );
};

export default HeroContentActionUI;
