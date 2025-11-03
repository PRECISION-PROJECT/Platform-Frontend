import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUsSectionContainer = () => {
  return (
    <MaxWidthContainer className="py-6 md:py-10 mx-auto">
      <AnimationContainer delay={0.3}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Overlapping Images */}
          <div className="relative h-[600px] w-[510px] max-w-full lg:mx-0">
            {/* Large top image with decorative border */}
            <div className="absolute right-0 top-0 h-[252px] w-[319px] border bg-foreground">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                <Image
                  src="/images/pexels-photo-1.jpeg"
                  alt="About small"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Smaller overlapping image */}
            <div className="absolute top-[59px] bottom-10 left-[249px] h-[255px] w-[217px] bg-foreground">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                <Image
                  src="/images/pexels-photo-2.jpeg"
                  alt="About small"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="font-spring text-5xl font-semibold md:text-3xl lg:text-5xl text-balance">
              ABOUT US
            </h2>
            <p className="font-spring font-light text-xl leading-relaxed md:text-2xl text-pretty ml-6">
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
              . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
              arcu
            </p>

            {/* Divider line */}
            <div className="h-px w-full bg-primary-foreground/30" />

            {/* Body text with decorative P */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <span className="text-2xl md:text-3xl lg:text-6xl font-bold text-foreground">
                  P
                </span>
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  orem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at orem ipsum dolor sit amet, consectetur
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
                  arcu . Aliquam erat volutpat. Donec placerat nisl magna, et
                  faucibus arcu .Aliquam erat volutpat. Donec placerat nisl
                  magna, et faucibus arcu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Edge Section */}
        <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-spring text-2xl font-semibold text-balance">
              Live Edge Handcrafted with Love
            </h3>
            <div className="h-px w-3/4 bg-primary-foreground/30" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat
              nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Donec placerat nisl magna,
              et faucibus arcu condimentum sed.
            </p>
            <Button
              variant="default"
              size="sm"
              className="font-poppins w-fit rounded-none"
            >
              READ MORE
            </Button>
          </div>
          <div className="relative h-80 border border-dashed bg-foreground border-border-dashed">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              <Image
                src="/images/pexels-photo-3.jpeg"
                alt="About small"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default AboutUsSectionContainer;
