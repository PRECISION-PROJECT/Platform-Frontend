import {
  AboutUsSectionContainer,
  AssociationsSectionContainer,
  BlogSectionContainer,
  CapabilitiesSectionContainer,
  HeroSectionContainer,
  InspirationLibrarySectionContainer,
  ProductsSectionContainer,
  TestimonialSectionContainer,
  VisionSectionContainer,
} from "./containers";

const LandingModule = () => {
  return (
    <div className="scrollbar-hide size-full text-foreground">
      <HeroSectionContainer />
      <AboutUsSectionContainer />
      <CapabilitiesSectionContainer />
      <VisionSectionContainer />
      <ProductsSectionContainer />
      <AssociationsSectionContainer />
      <InspirationLibrarySectionContainer />
      <TestimonialSectionContainer />
      <BlogSectionContainer />
    </div>
  );
};

export default LandingModule;
