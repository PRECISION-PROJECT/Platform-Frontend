import { VStack } from "@/components/utilities";

const CapabilitiesHeaderUI = () => {
  return (
    <VStack spacing={32} className="relative w-full md:h-60 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden md:flex md:flex-col md:gap-2 max-w-xl font-spring"
      >
        <span className="font-light tracking-wider whitespace-nowrap leading-none text-background/10 opacity-80 lg:text-[8vw]">
          PRECISION
        </span>
        <span className="font-light tracking-wider whitespace-nowrap leading-none text-background/10 opacity-80 lg:text-[8vw]">
          SOURCES
        </span>
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-left font-spring font-semibold leading-tight text-3xl md:text-4xl lg:text-5xl">
        OUR SPECIES AND CAPABILITIES
      </h2>

      {/* Description */}
      <p className="relative z-10 max-w-2xl text-left text-base font-light leading-relaxed">
        We understand that for discerning architects, interior designers, and
        visionary project owners, off-the-shelf solutions are simply not an
        option. You require bespoke details, premium materials, and flawless
        execution to bring your unique vision to life. Precision exists to
        deliver exactly that
      </p>
    </VStack>
  );
};

export default CapabilitiesHeaderUI;
