import { VStack } from "@/components/utilities";
import React from "react";

const ProductListHeaderUI = () => {
  return (
    <VStack spacing={20} className="text-white">
      <p className="text-right text-tan text-sm font-light">
        PRECISION PRODUCTS
      </p>
      <p className="text-left text-sm max-w-xl">
        Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
        Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
        .Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
      </p>
    </VStack>
  );
};

export default ProductListHeaderUI;
