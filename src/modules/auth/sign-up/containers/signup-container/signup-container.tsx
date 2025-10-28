import { Card } from "@/components/ui/card";
import { SignupHeaderUI } from "../../components";
import SignupFormContainer from "../signup-form-container";

const SignupContainer = () => {
  return (
    <Card>
      <SignupHeaderUI />
      <SignupFormContainer />
    </Card>
  );
};

export default SignupContainer;
