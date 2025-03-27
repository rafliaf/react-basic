import { useParams } from "react-router";

const ProductDetailPage = () => {
  const params = useParams<{ productSlug: string }>();

  return (
    <div>
      <h1>Halaman Product</h1>
      <h3>{params.productSlug}</h3>
    </div>
  );
};

export default ProductDetailPage;
