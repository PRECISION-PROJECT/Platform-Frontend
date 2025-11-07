import MaxWidthContainer from "@/components/containers/max-width-container";
import { BannerSectionUI } from "../../components";

const BannerSectionContainer = () => {
  return (
    <div className="bg-background">
      <MaxWidthContainer className="py-10 md:py-20">
        <BannerSectionUI />
      </MaxWidthContainer>
    </div>
  );
};

export default BannerSectionContainer;
