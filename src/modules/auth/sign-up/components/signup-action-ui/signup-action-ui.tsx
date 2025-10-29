import { Button } from "@/components/ui/button";

type Props = {
  isLoading: boolean;
};

const SignupActionUI = ({ isLoading }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <Button
        className="uppercase p-4 text-base rounded-none font-light!"
        type="submit"
        disabled={isLoading}
      >
        CREATE AN ACCOUNT
      </Button>
    </div>
  );
};

export default SignupActionUI;
