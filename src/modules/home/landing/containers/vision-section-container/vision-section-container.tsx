import { VStack } from "@/components/utilities";
import {
  VisionContentUI,
  VisionHeaderUI,
} from "../../components/vision-section";

const VisionSectionContainer = () => {
  return (
    <VStack className="gap-20">
      <VisionHeaderUI />
      <VisionContentUI />
    </VStack>
  );
};

export default VisionSectionContainer;
