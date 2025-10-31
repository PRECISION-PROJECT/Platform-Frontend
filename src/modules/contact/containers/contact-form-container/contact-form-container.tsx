"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
import { FormWrapper } from "@/components/ui/form";
import { HStack } from "@/components/utilities";
import React from "react";
import {
  ContactContentActionUI,
  ContactContentFormInfoUI,
  ContactContentFormUI,
} from "../../components";
import { useContactFormContainer } from "../../hooks";

const ContactFormContainer = () => {
  const { form, onSubmit } = useContactFormContainer();
  return (
    <MaxWidthContainer className="px-4! w-full flex items-center justify-center">
      <FormWrapper className="w-full" form={form} onSubmit={onSubmit}>
        <HStack
          align="default"
          className="gap-16 w-full flex-col md:flex-row"
          spacing={0}
        >
          <ContactContentFormUI isLoading={false} />
          <ContactContentFormInfoUI />
        </HStack>
        <ContactContentActionUI />
      </FormWrapper>
    </MaxWidthContainer>
  );
};

export default ContactFormContainer;
