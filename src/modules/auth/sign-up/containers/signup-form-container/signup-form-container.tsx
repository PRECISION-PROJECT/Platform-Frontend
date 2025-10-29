"use client";

import { VStack } from "@/components/utilities";
import { SignupActionUI, SignupFormUI } from "../../components";

type Props = {
  isLoading: boolean;
};

const SignupFormContainer = ({ isLoading }: Props) => {
  return (
    <VStack spacing={40} className="w-full basis-1/2">
      <SignupFormUI />
      <SignupActionUI isLoading={isLoading} />
    </VStack>
  );
};

export default SignupFormContainer;
