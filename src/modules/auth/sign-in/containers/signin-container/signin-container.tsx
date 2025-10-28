import { HStack } from "@/components/utilities";
import { SigninIntroUI } from "../../components";
import SigninFormContainer from "../signin-form-container";

const SigninContainer = () => {
  return (
    <HStack
      spacing={44}
      justify="start"
      className="flex-col md:flex-row w-full"
      noWrap
    >
      <SigninIntroUI />
      <SigninFormContainer />
    </HStack>
  );
};

export default SigninContainer;
