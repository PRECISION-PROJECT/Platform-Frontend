import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import Image from "next/image";

type Props = {
  processes: {
    id: string;
    title: string;
    description: string;
  }[];
};

const ProcessSectionUI = ({ processes }: Props) => {
  return (
    <div className="relative w-full h-[55vh] md:h-[65vh] xl:h-[520px] text-background">
      {/* Background Image */}
      <Image
        src="/images/contact-background.jpeg"
        alt="Process background"
        fill
        quality={100}
        priority
        className="object-cover"
      />

      {/* Content Container with Cards */}
      <MaxWidthContainer className="px-0">
        {/* Desktop Layout - Positioned Cards */}
        <div className="relative hidden lg:block h-full">
          {/* Card 01 - Top Left */}
          <div className="absolute -top-10 left-0 w-full max-w-sm bg-paper">
            <VStack className="relative px-2 py-8">
              <span className="-mt-16 text-6xl md:text-7xl lg:text-9xl text-center font-spring font-normal text-tan">
                {processes[0].id}
              </span>
              <div className="text-center mt-9">
                <h3 className="text-lg font-semibold mb-3">
                  {processes[0].title}
                </h3>
                <p className="text-base font-light leading-relaxed max-w-2xs mx-auto">
                  {processes[0].description}
                </p>
              </div>
            </VStack>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-sm bg-paper">
            <VStack className="relative px-2 py-8">
              <span className="-mt-16 text-6xl md:text-7xl lg:text-9xl text-center font-spring font-normal text-tan">
                {processes[1].id}
              </span>
              <div className="text-center mt-9">
                <h3 className="text-lg font-semibold mb-3">
                  {processes[1].title}
                </h3>
                <p className="text-base font-light leading-relaxed max-w-2xs mx-auto">
                  {processes[1].description}
                </p>
              </div>
            </VStack>
          </div>

          <div className="absolute -bottom-20 left-16 w-full max-w-sm bg-paper">
            <VStack className="relative px-2 py-8">
              <span className="-mt-16 text-6xl md:text-7xl lg:text-9xl text-center font-spring font-normal text-tan">
                {processes[2].id}
              </span>
              <div className="text-center mt-9">
                <h3 className="text-lg font-semibold mb-3">
                  {processes[2].title}
                </h3>
                <p className="text-base font-light leading-relaxed max-w-2xs mx-auto">
                  {processes[2].description}
                </p>
              </div>
            </VStack>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked Cards */}
        <div className="lg:hidden flex flex-col gap-8 items-center justify-center h-full text-background">
          {processes.map((process) => (
            <div key={process.id} className="relative max-w-80 w-full">
              <span className="absolute top-1 left-1 text-5xl md:text-6xl font-spring font-semibold text-tan">
                {process.id}
              </span>
              <div className="bg-paper text-center p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-spring font-semibold mb-2 md:mb-3">
                  {process.title}
                </h3>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default ProcessSectionUI;
