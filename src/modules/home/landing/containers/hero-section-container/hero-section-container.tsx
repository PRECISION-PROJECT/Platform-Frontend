import { HeroCarouselUI, HeroContentUI, HeroVideoUI } from "../../components";

const HeroSectionContainer = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <section className="relative min-h-[1100px] flex flex-col items-center justify-center overflow-hidden">
        <HeroVideoUI />
        <HeroContentUI />
        <HeroCarouselUI />
      </section>
    </div>
  );
};

export default HeroSectionContainer;
