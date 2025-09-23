import { ForgotPasswordHeaderUI } from "../../components";
import ForgotPasswordFormContainer from "../forgot-password-form-container";

const ForgotPasswordContainer = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <ForgotPasswordHeaderUI />
      <ForgotPasswordFormContainer />
    </div>
  );
};

export default ForgotPasswordContainer;
