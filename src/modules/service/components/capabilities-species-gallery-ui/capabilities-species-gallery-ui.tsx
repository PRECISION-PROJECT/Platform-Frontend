import { VStack } from "@/components/utilities";
import Image from "next/image";

type CapabilitiesSpecies = {
  id: string;
  name: string;
  image: string;
};

type Props = {
  capabilitiesSpecies: CapabilitiesSpecies[];
};

const CapabilitiesSpeciesGalleryUI = ({ capabilitiesSpecies }: Props) => {
  return (
    <div className="w-full">
      {/* Snap scroll container for mobile, grid for desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:snap-none">
        {capabilitiesSpecies.map((capabilitiesSpecies) => (
          <VStack
            key={capabilitiesSpecies.id}
            spacing={12}
            className="group cursor-pointer w-[75vw] shrink-0 snap-start md:w-full md:shrink"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={capabilitiesSpecies.image}
                alt={capabilitiesSpecies.name}
                fill
                quality={100}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h4 className="text-sm md:text-base font-light text-center">
              {capabilitiesSpecies.name}
            </h4>
          </VStack>
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesSpeciesGalleryUI;
