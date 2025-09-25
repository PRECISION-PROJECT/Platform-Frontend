import React from 'react';

type PageProps = { params: Promise<{ categoryId: string }> };

const CategoryDetail = async (props: PageProps) => {
  const params = await props.params;
  return (
    <div>CategoryDetail {params.categoryId}</div>
  )
}

export default CategoryDetail