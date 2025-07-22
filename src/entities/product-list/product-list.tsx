import React, { FC } from "react";
import { ProductCard } from "../product-card";
import { ProductType } from "./types/product";
import classNames from "classnames";

type ProductListProps = {
  products: ProductType[];
  className?: string;
};

export const ProductList: FC<ProductListProps> = ({ products, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col flex-wrap items-center justify-center gap-4 md-custom:flex-row",
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard.Root key={product.id}>
          <div className="flex flex-col gap-3">
            <ProductCard.Seller seller={product.seller}></ProductCard.Seller>
            <ProductCard.Picture product={product}></ProductCard.Picture>
            <ProductCard.Info product={product}></ProductCard.Info>
            <ProductCard.Actions product={product}></ProductCard.Actions>
          </div>

          <ProductCard.Delivery
            delivery={product.delivery}
          ></ProductCard.Delivery>
        </ProductCard.Root>
      ))}
    </div>
  );
};
