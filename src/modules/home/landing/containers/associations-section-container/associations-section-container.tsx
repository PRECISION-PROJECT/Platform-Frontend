import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import InfiniteMovingCards from "@/components/shared/infinitie-moving-card";

export const COMPANIES_LIST: { href: string }[] = [
  {
    href: "/svg/company-01.svg",
  },
  {
    href: "/svg/company-02.svg",
  },
  {
    href: "/svg/company-03.svg",
  },
  {
    href: "/svg/company-04.svg",
  },
  {
    href: "/svg/company-05.svg",
  },
] as const;

const AssociationsSectionContainer = () => {
  return (
    <div className="bg-primary text-primary-foreground border-t">
      <MaxWidthContainer className="py-10 md:py-20 overflow-hidden">
        <AnimationContainer delay={0.1}>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Our Trusted Associations
          </h2>
          <p className="mb-12 text-center text-sm opacity-90">
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <div className="mt-8">
            <InfiniteMovingCards
              items={COMPANIES_LIST}
              direction="right"
              speed="slow"
            />
          </div>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default AssociationsSectionContainer;
