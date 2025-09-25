import React from 'react';

type PageProps = { params: Promise<{ productId: string }> };

const CategoryDetail = async (props: PageProps) => {
  const params = await props.params;
  return (
    <div>CategoryDetail</div>
  )
}

export default CategoryDetail