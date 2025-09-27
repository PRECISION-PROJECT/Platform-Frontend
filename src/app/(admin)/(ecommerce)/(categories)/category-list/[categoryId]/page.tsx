import { CategoryDetailModule } from '@/modules/ecommerce/categories';
import React from 'react';

type PageProps = { params: Promise<{ categoryId: string }> };

const CategoryDetail = async (props: PageProps) => {
  const params = await props.params;
  return (
    <CategoryDetailModule id={params.categoryId} />
  )
}

export default CategoryDetail