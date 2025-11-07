import { VStack } from "@/components/utilities";
import { CustomSectionUI } from "../../components";

const images = [
  {
    src: "/images/service/moulding.jpeg",
    alt: "MOULDING",
    title: "MOULDING",
  },
  {
    src: "/images/service/product.jpeg",
    alt: "PRODUCTS",
    title: "OTHER PRODUCTS",
  },
  {
    src: "/images/service/supply.jpeg",
    alt: "SUPPLY",
    title: "LUMBER SUPPLY",
  },
  {
    src: "/images/service/element.jpeg",
    alt: "ELEMENTS",
    title: "ARCHITECTURAL ELEMENTS",
  },
  {
    src: "/images/service/packaging.jpeg",
    alt: "PACKAGING",
    title: "PACKAGING",
  },
  {
    src: "/images/service/export.jpeg",
    alt: "JOINERY",
    title: "JOINERY",
  },
];

const CustomSectionContainer = () => {
  return (
    <div className="bg-background py-10 md:py-20 text-paper">
      <VStack spacing={56}>
        <h2 className="text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-spring font-semibold leading-tight">
          CUSTOM WOOD WORKINGS
        </h2>
        <CustomSectionUI images={images} />
      </VStack>
    </div>
  );
};

export default CustomSectionContainer;
