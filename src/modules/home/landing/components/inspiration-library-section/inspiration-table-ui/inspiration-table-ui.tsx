import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

type Props = {};

const InspirationTableUI = (props: Props) => {
  return (
    <VStack spacing={0}>
      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <Image
            src="/images/pexels-photo-5.jpeg"
            alt="About small"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left big block */}
        <div className="bg-text-secondary p-8 flex flex-col justify-end">
          <h3 className="text-lg font-semibold mb-2 text-primary font-spring">
            Prime Location
          </h3>
          <p className="text-sm">
            Stay steps away from top restaurants, shops, and local attractions —
            no car needed.
          </p>
        </div>

        {/* Right stacked blocks */}
        <div className="grid grid-rows-[2fr_1fr]">
          {/* Top large block */}
          <div className="bg-surface p-8 flex flex-col justify-end">
            <h3 className="text-lg font-semibold mb-2 font-spring">
              Comfortable Living
            </h3>
            <p className="text-sm">
              Modern spaces designed with both aesthetics and functionality in
              mind.
            </p>
          </div>

          {/* Bottom 2 small blocks */}
          <div className="grid grid-cols-2">
            <div className="bg-surface-light p-8 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1 text-primary">
                Thoughtful Design
              </h3>
              <p className="text-sm text-gray-600">
                Enjoy a luxurious, functional space with modern amenities and
                cozy touches throughout.
              </p>
            </div>

            <div className="bg-text-secondary p-8 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1 text-primary">
                Prime Location
              </h3>
              <p className="text-sm text-gray-300">
                Stay steps away from top restaurants, shops, and local
                attractions — no car needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </VStack>
  );
};

export default InspirationTableUI;
