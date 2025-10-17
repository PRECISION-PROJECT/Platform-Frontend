import {
  AboutUsSectionContainer,
  AssociationsSectionContainer,
  BlogSectionContainer,
  CapabilitiesSectionContainer,
  ContactSectionContainer,
  HeroSectionContainer,
  InspirationLibrarySectionContainer,
  ProductsSectionContainer,
  VisionSectionContainer,
} from "./containers";

const LandingModule = () => {
  return (
    <div className="scrollbar-hide size-full overflow-x-hidden">
      <HeroSectionContainer />
      <AboutUsSectionContainer />
      <CapabilitiesSectionContainer />
      <VisionSectionContainer />
      <ProductsSectionContainer />
      <AssociationsSectionContainer />
      <InspirationLibrarySectionContainer />
      <BlogSectionContainer />
      <ContactSectionContainer />
    </div>
  );
};

export default LandingModule;
