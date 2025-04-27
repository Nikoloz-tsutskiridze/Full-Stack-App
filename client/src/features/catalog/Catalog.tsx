import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

type Props = {
  product: Product[];
};

export default function Catalog({ product }: Props) {
  return (
    <div>
      <ProductList products={product} />
    </div>
  );
}
