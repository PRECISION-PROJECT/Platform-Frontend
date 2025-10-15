import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import InfiniteMovingCards from "@/components/shared/infinitie-moving-card";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";

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
          <Marquee>
            <MarqueeContent>
              {COMPANIES_LIST.map((item, index) => (
                <MarqueeItem
                  className="w-40 mx-6 rounded-2xl object-contain opacity-80"
                  key={index}
                >
                  <Image
                    src={item.href}
                    alt={item.href}
                    width={160}
                    height={160}
                    quality={100}
                    className="overflow-hidden"
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default AssociationsSectionContainer;
