"use client";
import { Heading } from "@/components/shared/heading";
import React from "react";

const CategoryListHeaderUI = () => {
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Categories"
        description="Manage product categories and their properties"
      />
    </div>
  );
};

export default CategoryListHeaderUI;
