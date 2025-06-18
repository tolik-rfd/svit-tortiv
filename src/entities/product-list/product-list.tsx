import React from "react";
import products from "./products.json";
import { ProductCard } from "../product-card";

// type ProductListProps = {
//   className?: string;
// };

export const ProductList = () => {
  return (
    <div className="flex gap-4 flex-col items-center md-custom:flex-row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
