import SocialButtons from "@/components/shared/social-buttons";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";

type Props = {
  isLoading: boolean;
  onGoogleLogin: () => void;
  onInstagramLogin: () => void;
};

const SigninActionUI = ({
  isLoading,
  onInstagramLogin,
  onGoogleLogin,
}: Props) => {
  return (
    <VStack justify="center" align="center" spacing={24} className="mt-6">
      <p className="text-sm font-light">Sign In with</p>
      <SocialButtons
        isLoading={isLoading}
        onInstagramLogin={onInstagramLogin}
        onGoogleLogin={onGoogleLogin}
      />
      <div>
        <Button
          className="width-fit px-20 h-12 rounded-none font-light!"
          type="submit"
          disabled={isLoading}
        >
          SUBMIT
        </Button>
      </div>
      <Link
        href={ROUTES.FORGOT_PASSWORD}
        className="text-sm hover:underline text-center cursor-pointer"
      >
        Forgot password?
      </Link>
    </VStack>
  );
};

export default SigninActionUI;
