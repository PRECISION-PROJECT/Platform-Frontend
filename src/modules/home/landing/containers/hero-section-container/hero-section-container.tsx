import {
  HeroCarouselUI,
  HeroContentUI,
  HeroVideoUI,
} from "../../components/hero-section";

const HeroSectionContainer = () => {
  return (
    <section className="relative min-h-[1100px] flex flex-col items-center justify-center overflow-hidden">
      <HeroVideoUI />
      <HeroContentUI />
      <HeroCarouselUI />
    </section>
  );
};

export default HeroSectionContainer;
