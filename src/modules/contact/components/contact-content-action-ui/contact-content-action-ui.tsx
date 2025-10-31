"use client";

import SocialButtons from "@/components/shared/social-buttons";
import FacebookButton from "@/components/shared/social-buttons/facebook-button";
import InstagramButton from "@/components/shared/social-buttons/instagram-button";
import { VStack } from "@/components/utilities";

const ContactContentActionUI = () => {
  return (
    <VStack align="center" spacing={4} justify="center" className="pt-12">
      <p className="text-sm font-light text-tan">Follow Us</p>
      <div className="flex gap-4 flex-row">
        <FacebookButton
          isLoading={false}
          className="px-0!"
          onClick={() => {}}
          showTitle={false}
          iconClassName="size-8"
        />
        <InstagramButton
          className="px-0!"
          isLoading={false}
          onClick={() => {}}
          showTitle={false}
          iconClassName="size-8"
        />
      </div>
    </VStack>
  );
};

export default ContactContentActionUI;
