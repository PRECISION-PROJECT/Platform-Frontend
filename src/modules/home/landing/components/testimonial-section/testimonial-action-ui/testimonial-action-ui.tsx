import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { HStack, VStack } from "@/components/utilities";

type Props = {
  api: CarouselApi;
  current: number;
  length: number;
};

const TestimonialActionUI = ({ api, current, length }: Props) => {
  return (
    <VStack className="mt-11">
      <HStack noWrap justify="center" spacing={4}>
        <Button
          variant="link"
          onClick={() => api?.scrollPrev()}
          disabled={!api?.canScrollPrev()}
          className="text-sm md:text-base"
        >
          PRE
        </Button>
        <Separator
          orientation="vertical"
          className="h-px! w-8! bg-foreground"
        />
        <Button
          variant="link"
          onClick={() => api?.scrollNext()}
          disabled={!api?.canScrollNext()}
          className="text-sm md:text-base"
        >
          NEXT
        </Button>
      </HStack>

      <HStack
        spacing={4}
        align="center"
        justify="end"
        className="text-xs sm:text-sm text-foreground"
      >
        <span>{current}</span>
        <Separator
          orientation="vertical"
          className="h-px! w-2.5! bg-foreground"
        />
        <span>{length}</span>
      </HStack>
    </VStack>
  );
};

export default TestimonialActionUI;
