import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import {
  AboutUsContentUI,
  AboutUsImagesUI,
  AboutUsLiveEdgeUI,
} from "../../components/about-us-section";

const AboutUsSectionContainer = () => {
  return (
    <MaxWidthContainer className="py-10 md:py-20">
      <AnimationContainer delay={0.3}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <AboutUsImagesUI
            topImage="/images/pexels-photo-1.jpeg"
            bottomImage="/images/pexels-photo-2.jpeg"
          />
          <AboutUsContentUI />
        </div>
        <AboutUsLiveEdgeUI />
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default AboutUsSectionContainer;
