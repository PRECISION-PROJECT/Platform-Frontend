import { ProductDetailModule } from "@/modules/ecommerce/products";

type PageProps = { params: Promise<{ productId: string }> };

const ProductDetail = async (props: PageProps) => {
  const params = await props.params;
  return <ProductDetailModule id={params.productId} />;
};

export default ProductDetail;
