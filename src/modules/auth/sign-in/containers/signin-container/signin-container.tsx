import { SigninHeaderUI } from "../../components";
import SigninFormContainer from "../signin-form-container";

const SigninContainer = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <SigninHeaderUI />
      <SigninFormContainer />
    </div>
  );
};

export default SigninContainer;
