import Loader from "../Loader";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";

export default function Catalog() {
  const { data, isLoading } = useFetchProductsQuery();

  if (isLoading || !data)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <>
      <ProductList products={data} />
    </>
  );
}
