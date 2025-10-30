"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
import { FormWrapper } from "@/components/ui/form";
import { HStack } from "@/components/utilities";
import React from "react";
import {
  HeroContentActionUI,
  HeroContentFormInfoUI,
  HeroContentFormUI,
} from "../../components";
import { useContactFormContainer } from "../../hooks";

const HeroFormContainer = () => {
  const { form, onSubmit } = useContactFormContainer();
  return (
    <MaxWidthContainer className="p-0! w-full flex items-center justify-center">
      <FormWrapper className="w-full" form={form} onSubmit={onSubmit}>
        <HStack align="default" className="gap-16 w-full" spacing={0}>
          <HeroContentFormUI isLoading={false} />
          <HeroContentFormInfoUI />
        </HStack>
        <HeroContentActionUI />
      </FormWrapper>
    </MaxWidthContainer>
  );
};

export default HeroFormContainer;
