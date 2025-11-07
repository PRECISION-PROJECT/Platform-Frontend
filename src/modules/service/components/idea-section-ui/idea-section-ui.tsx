import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";

const IdeaSectionUI = () => {
  return (
    <div className="relative w-full h-[55vh] md:h-[65vh] xl:h-[550px] max-h-[652px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/service/idea.jpeg"
        alt="Idea background"
        fill
        quality={100}
        className="object-cover"
      />

      {/* Content */}
      <MaxWidthContainer className="relative h-full">
        <div className="flex items-center justify-center h-full">
          <div className="max-w-3xl text-center">
            <VStack spacing={28} justify="center" align="center">
              {/* Subtitle */}
              <h2 className="mb-4 text-xl md:text-4xl font-normal font-spring">
                CUSTOM YOUR IDEAL
              </h2>

              {/* Description */}
              <p className="text-base md:text-base font-light leading-relaxed max-w-2xl">
                Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
                arcu . Aliquam erat volutpat. Donec placerat nisl magna, et
                faucibus arcu .Aliquam erat volutpat. Donec placerat nisl magna,
                Aliquam erat volutpat.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-12 justify-center mt-7">
                <Button
                  asChild
                  className="w-fit bg-transparent px-6"
                  variant="outline"
                >
                  <Link href={ROUTES.SERVICES}>MADE A DEMAND</Link>
                </Button>
                <Button asChild className="w-fit px-6">
                  <Link href={ROUTES.HOME}>EXPLORE OUR SHOP</Link>
                </Button>
              </div>
            </VStack>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default IdeaSectionUI;
