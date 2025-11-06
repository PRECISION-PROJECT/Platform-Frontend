import { VStack } from "@/components/utilities";

const JourneyHeaderUI = () => {
  return (
    <VStack align="center" spacing={12} className="text-center">
      <span className="text-tan text-sm tracking-widest uppercase">
        YOUR CONSULTATION JOURNEY
      </span>
      <h2 className="font-spring text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
        HOW IT WORKS
      </h2>
    </VStack>
  );
};

export default JourneyHeaderUI;
