import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5148/api/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <ProductList products={product} />
    </div>
  );
}
