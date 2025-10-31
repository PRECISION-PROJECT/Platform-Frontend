import GoogleButton from "./social-buttons/google-button";
import InstagramButton from "./social-buttons/instagram-button";

type Props = {
  isLoading: boolean;
  onInstagramLogin: () => void;
  onGoogleLogin: () => void;
};

const SocialButtons = ({
  isLoading,
  onInstagramLogin,
  onGoogleLogin,
}: Props) => {
  return (
    <div className="flex gap-4 flex-row">
      <InstagramButton
        showTitle
        isLoading={isLoading}
        onClick={onInstagramLogin}
        iconClassName="size-4"
      />
      <GoogleButton
        showTitle
        iconClassName="size-4"
        isLoading={isLoading}
        onClick={onGoogleLogin}
      />
    </div>
  );
};

export default SocialButtons;
