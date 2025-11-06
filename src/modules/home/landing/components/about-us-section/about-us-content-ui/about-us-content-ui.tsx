import { Separator } from "@/components/ui/separator";
import { HStack, VStack } from "@/components/utilities";

const AboutUsContentUI = () => {
  return (
    <VStack justify="center" spacing={16}>
      <h2 className="font-spring text-2xl font-semibold md:text-3xl text-balance">
        ABOUT US
      </h2>
      <p className="font-spring font-light text-base leading-relaxed md:text-xl text-pretty">
        Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
        Aliquam erat volutpat. Donec
      </p>

      <Separator orientation="horizontal" className="h-px w-full bg-tan" />

      <VStack spacing={10} className="ml-5 text-secondary">
        <HStack spacing={10} noWrap justify="start" align="start">
          <div className="shrink-0">
            <span className="text-2xl md:text-3xl text-tan font-normal">P</span>
          </div>
          <p className="text-sm leading-relaxed max-w-80">
            orem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </HStack>
        <p className="text-sm leading-relaxed whitespace-pre-line break-words">
          Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu.
          Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu.
          Aliquam erat volutpat.
        </p>
      </VStack>
    </VStack>
  );
};

export default AboutUsContentUI;
