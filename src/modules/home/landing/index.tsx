import {
  AboutUsSectionContainer,
  AssociationsSectionContainer,
  BlogSectionContainer,
  CapabilitiesSectionContainer,
  ContactSectionContainer,
  HeroSectionContainer,
  InspirationLibrarySectionContainer,
  ProductsSectionContainer,
  TestimonialSectionContainer,
  VisionSectionContainer,
} from "./containers";

const LandingModule = () => {
  return (
    <div className="scrollbar-hide size-full">
      <HeroSectionContainer />
      <AboutUsSectionContainer />
      <CapabilitiesSectionContainer />
      <VisionSectionContainer />
      <ProductsSectionContainer />
      <AssociationsSectionContainer />
      <InspirationLibrarySectionContainer />
      <TestimonialSectionContainer />
      <BlogSectionContainer />
      <ContactSectionContainer />
    </div>
  );
};

export default LandingModule;
