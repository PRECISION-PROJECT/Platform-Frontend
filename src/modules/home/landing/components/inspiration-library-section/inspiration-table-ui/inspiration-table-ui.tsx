import { VStack } from "@/components/utilities";
import Image from "next/image";
import React from "react";

type Props = {};

const InspirationTableUI = (props: Props) => {
  return (
    <VStack spacing={20}>
      {/* Hero Image Banner */}
      <div className="h-[400px] md:h-[487px] relative w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg font-medium">
            Image Placeholder
          </span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
        {/* Left Column - Large Block */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-end text-white">
          <h3 className="text-xl font-bold mb-2">Prime Location</h3>
          <p className="text-gray-300">
            Stay steps away from top restaurants, shops, and local attractions -
            no car needed.
          </p>
        </div>

        {/* Right Column - Two Blocks */}
        <div className="flex flex-col gap-4">
          {/* Top Right Block */}
          <div className="bg-gray-100 rounded-lg p-6 flex-1 flex flex-col justify-end">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Comfortable Living
            </h3>
            <p className="text-gray-600">
              Modern spaces designed with both aesthetics and functionality in
              mind.
            </p>
          </div>

          {/* Bottom Right - Two Small Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit md:h-[120px]">
            {/* Bottom Left */}
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1 text-gray-800">
                Thoughtful Design
              </h3>
              <p className="text-sm text-gray-600">
                Enjoy a luxurious, functional space with modern amenities and
                cozy touches throughout.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="bg-gray-800 rounded-lg p-4 flex flex-col justify-end text-white">
              <h3 className="text-lg font-bold mb-1">Prime Location</h3>
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
