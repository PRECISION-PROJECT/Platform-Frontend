import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";

const BannerSectionUI = () => {
  return (
    <VStack spacing={20} className="items-center text-center max-w-4xl mx-auto">
      <p className="text-sm md:text-base uppercase tracking-wider font-light text-tan">
        WHAT WE DO
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-spring font-semibold leading-tight">
        BUILD YOUR CUSTOM PRODUCT
      </h2>

      <p className="text-base md:text-lg font-light leading-relaxed max-w-xl">
        We understand that for discerning architects, interior designers, and
        visionary project owners, off-the-shelf solutions are simply not an
        option. You require bespoke details, premium materials, and flawless
        execution to bring your unique vision to life. Precision exists to
        deliver exactly that
      </p>

      <blockquote className="text-base md:text-lg font-spring italic font-normal leading-relaxed max-w-xl text-tan">
        " We understand that for discerning architects, interior designers, and
        visionary project owners, off-the-shelf solutions are simply not an
        option. "
      </blockquote>

      <Button asChild className="w-fit">
        <Link href={ROUTES.APPOINTMENTS}>MAKE AN APPOINTMENT NOW</Link>
      </Button>
    </VStack>
  );
};

export default BannerSectionUI;
