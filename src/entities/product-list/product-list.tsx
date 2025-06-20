import React from "react";
// .
import { ProductCard } from "../product-card";
import { Product } from "./types/product";
import classNames from "classnames";

type Props = {
  products: Product[];
  className?: string;
};

export const ProductList = ({ products, className }: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col flex-wrap items-center justify-center gap-4 md-custom:flex-row",
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
