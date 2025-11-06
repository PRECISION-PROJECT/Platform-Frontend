import { HStack, VStack } from "@/components/utilities";

interface JourneySectionUIProps {
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
}

const JourneySectionUI = ({ steps }: JourneySectionUIProps) => {
  return (
    <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 overflow-visible">
      {steps.map((step) => (
        <VStack
          key={step.title}
          spacing={20}
          className="bg-foreground px-7 py-10 w-full text-center"
        >
          <p className="font-spring font-semibold text-4xl">{step.number}</p>
          <span className="text-base font-semibold">{step.title}</span>
          <p className="text-center font-light break-words whitespace-normal">
            {step.description}
          </p>
        </VStack>
      ))}
    </div>
  );
};

export default JourneySectionUI;
