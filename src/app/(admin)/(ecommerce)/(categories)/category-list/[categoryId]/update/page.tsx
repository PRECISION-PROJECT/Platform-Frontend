import UpdateCategoryModule from "@/modules/ecommerce/categories/update-category";
import { ROUTES } from "@/utils/routes";
import { redirect } from "next/navigation";
import React from "react";

type PageProps = { params: Promise<{ categoryId: string }> };

const CategoryUpdate = async (props: PageProps) => {
  const params = await props.params;
  if (!params.categoryId) {
    return redirect(ROUTES.NOT_FOUND);
  }

  return <UpdateCategoryModule id={params.categoryId} />;
};

export default CategoryUpdate;
