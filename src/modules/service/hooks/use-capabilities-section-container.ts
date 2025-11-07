import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useMemo, useState } from "react";

export const useCapabilitiesSectionContainer = () => {
  const capabilities = useMemo(
    () => [
      {
        id: "moulding",
        title: "MOULDING",
        description:
          "We use a 6-head Weinig moulder for creating precise custom profiles.",
        image: "/images/service/capabilities.jpg",
      },
      {
        id: "joinery",
        title: "JOINERY",
        description:
          "Expert craftsmanship in creating seamless joints for lasting durability.",
        image: "/images/service/element.jpeg",
      },
      {
        id: "lumber",
        title: "LUMBER SUPPLY",
        description:
          "Premium hardwood selection sourced from sustainable forests worldwide.",
        image: "/images/service/supply.jpeg",
      },
      {
        id: "furniture",
        title: "CUSTOM FURNITURE",
        description:
          "Bespoke furniture pieces designed to match your unique vision.",
        image: "/images/service/product.jpeg",
      },
      {
        id: "packaging",
        title: "PACKAGING",
        description: "Elegant wooden packaging solutions for luxury products.",
        image: "/images/service/packaging.jpeg",
      },
    ],
    []
  );

  const woodSpecies = useMemo(
    () => [
      {
        id: "white-ash",
        name: "White Ash",
        image: "/images/landing/pexels-photo-19.jpeg",
      },
      {
        id: "cherry",
        name: "Cherry",
        image: "/images/landing/pexels-photo-20.jpeg",
      },
      {
        id: "maple",
        name: "Maple",
        image: "/images/landing/pexels-photo-21.jpeg",
      },
      {
        id: "spanish-cedar",
        name: "Spanish Cedar",
        image: "/images/landing/pexels-photo-22.jpeg",
      },
      {
        id: "cypress",
        name: "Cypress",
        image: "/images/landing/pexels-photo-23.jpeg",
      },
    ],
    []
  );

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return {
    capabilities,
    woodSpecies,
    current,
    total: woodSpecies.length,
    api,
    setApi,
  };
};
