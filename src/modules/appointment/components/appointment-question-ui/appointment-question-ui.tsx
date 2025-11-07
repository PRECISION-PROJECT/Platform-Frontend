import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { VStack } from "@/components/utilities";

interface AppointmentQuestionUIProps {
  questions: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

const AppointmentQuestionUI = ({ questions }: AppointmentQuestionUIProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
      <VStack spacing={20}>
        <div className="space-y-2">
          <p className="text-sm md:text-base uppercase tracking-wider font-light text-tan">
            PRECISION Q&A
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-spring font-semibold leading-tight max-w-full md:max-w-3xs">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <p className="font-light leading-relaxed">
          Precision Moulding opened in 1989 to provide milling and kiln drying
          services to the eastern NC area and now spans the globe! We specialize
          in hardwoods and carry an extensive inventory for home and marine
          construction
        </p>
      </VStack>

      <div className="flex flex-col">
        <Accordion type="single" collapsible className="w-full">
          {questions.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-base md:text-lg font-spring font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-light leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AppointmentQuestionUI;
