import { VStack } from "@/components/utilities";
import {
  HeroCarouselUI,
  HeroContentUI,
  HeroStatisticUI,
  HeroVideoUI,
} from "../../components/hero-section";

const data = [
  {
    label: "FIGURE A",
    value: "80",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "FIGURE A",
    value: "75",
    description: "Going above expectations in every deliverable we produce.",
  },
  {
    label: "FIGURE A",
    value: "100",
    description: "Going above expectations in every deliverable we produce.",
  },
];

const HeroSectionContainer = () => {
  return (
    <VStack
      align="center"
      justify="center"
      className="relative overflow-hidden"
      spacing={80}
    >
      <HeroVideoUI />
      <HeroContentUI />
      <HeroCarouselUI />
      <HeroStatisticUI data={data} />
    </VStack>
  );
};

export default HeroSectionContainer;
