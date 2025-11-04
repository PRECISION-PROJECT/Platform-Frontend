import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import Image from "next/image";
import React from "react";
import EquipmentCardUI from "../../components/equipment-card-ui/equipment-card-ui";
const equipmentCards = [
  {
    number: "01",
    name: "Custom Woodwork",
    description:
      "Precision Wood offers bespoke woodwork solutions tailored to your unique design needs, ensuring impeccable craftsmanship and attention to detail.",
  },
  // {
  //   number: "02",
  //   name: "Architectural Millwork",
  //   description:
  //     "Our architectural millwork services provide high-quality, custom-designed wood elements that enhance the aesthetic and functionality of any space.",
  // },
  // {
  //   number: "03",
  //   name: "Interior Wood Finishes",
  //   description:
  //     "We specialize in premium interior wood finishes that elevate the look and feel of your interiors, combining durability with exquisite design.",
  // },
];
const EquipmentContainerUI = () => {
  return (
    <MaxWidthContainer className="w-full">
      <AnimationContainer>
        <div className="relative w-full h-[525px]">
          {/* Background image */}
          <Image
            src="/images/service/service-equipment-bg.png"
            alt="Service background"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          {/* Equipment cards */}
          {equipmentCards.map((card) => (
            <EquipmentCardUI
              key={card.number}
              number={card.number}
              name={card.name}
              description={card.description}
            />
          ))}
          <div className="flex"></div>
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default EquipmentContainerUI;
