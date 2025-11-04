import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import Image from "next/image";
import React from "react";
import EquipmentCardUI from "../../components/equipment-card-ui/equipment-card-ui";
import WoodWorkingTitleUI from "../../components/woodworkings-section/woodworking-title-ui";
import WoodWorkingCardUI from "../../components/woodworkings-section/woodworkings-card/woodworkings-card";
const woodworkingsGallory = [
  {
    name: "MOULDING",
    description:
      "Crafted with precision and tailored to your space, our custom cabinets combine functionality with aesthetic appeal, enhancing the beauty of your home.",
    image: "/images/service/moulding.png",
    link: "/services/service/moulding",
  },
  {
    name: "OTHER PRODUCTS",
    description:
      "Our wooden furniture pieces are designed to bring warmth and elegance to any room, showcasing the natural beauty of wood through expert craftsmanship.",
    image: "/images/service/other-products.png",
    link: "/services/service/other-products",
  },
  {
    name: "ARCHITECTUAL ELEMENTSENTS",
    description:
      "Enhance your living spaces with our interior woodwork solutions, including moldings, trims, and paneling that add character and charm to your home.",
    image: "/images/service/architechtual-elements.png",
    link: "/services/service/architechtual-elements",
  },
  {
    name: "PACKAGING",
    description:
      "Enhance your living spaces with our interior woodwork solutions, including moldings, trims, and paneling that add character and charm to your home.",
    image: "/images/service/packaging.png",
    link: "/services/service/packaging",
  },
  {
    name: "JOINERY",
    description:
      "Enhance your living spaces with our interior woodwork solutions, including moldings, trims, and paneling that add character and charm to your home.",
    image: "/images/service/joinery.png",
    link: "/services/service/joinery",
  },
];
const WoodContainerUI = () => {
  return (
    <MaxWidthContainer className="w-full">
      <AnimationContainer>
        <WoodWorkingTitleUI />

        <div className="grid grid-cols-3">
          {woodworkingsGallory.map((item, index) => (
            <WoodWorkingCardUI
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </AnimationContainer>
    </MaxWidthContainer>
  );
};

export default WoodContainerUI;
