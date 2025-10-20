import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

type Props = {};

const InspirationTableUI = (props: Props) => {
  return (
    <VStack spacing={0}>
      {/* Hero Image Banner */}
      <div className="md:h-[487px] relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg font-medium">
            Image Placeholder
          </span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[487px] lg:h-[600px]">
        {/* Left Column - Large Block */}
        <div className="bg-text-secondary px-5 py-12 flex flex-col justify-end">
          <h3 className="text-lg font-semibold mb-2 text-primary font-spring">
            Prime Location
          </h3>
          <p className="text-sm">
            Stay steps away from top restaurants, shops, and local attractions -
            no car needed.
          </p>
        </div>

        {/* Right Column - Two Blocks */}
        <div className="flex flex-col">
          {/* Top Right Block */}
          <div className="bg-surface px-5 py-12 flex flex-col justify-end h-80 shrink-0">
            <h3 className="text-lg font-semibold mb-2 font-spring">
              Comfortable Living
            </h3>
            <p className="text-sm">
              Modern spaces designed with both aesthetics and functionality in
              mind.
            </p>
          </div>

          {/* Bottom Right - Two Small Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Bottom Left */}
            <div className="bg-surface-light px-5 py-12 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1 text-primary">
                Thoughtful Design
              </h3>
              <p className="text-sm text-gray-600">
                Enjoy a luxurious, functional space with modern amenities and
                cozy touches throughout.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="bg-text-secondary px-5 py-12 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1 text-primary">
                Prime Location
              </h3>
              <p className="text-sm text-gray-300">
                Stay steps away from top restaurants, shops, and local
                attractions - no car needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </VStack>
  );
};

export default InspirationTableUI;
