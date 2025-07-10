import React, { FC } from "react";
import { ProductCard } from "../product-card";
import { ProductType } from "./types/product";
import classNames from "classnames";
import Link from "next/link";
import { Seller } from "../seller";

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
        <ProductCard.Root key={product.id} className="flex flex-col gap-3">
          <Seller seller={product.seller} />

          <ProductCard.Picture>
            <Link href="#">
              <ProductCard.Photo imageUrl={product.imageUrl} />
            </Link>

            <ProductCard.AddToFavorites isFavorite={product.isFavorite} />
            <ProductCard.Sale sale={product.sale} />
          </ProductCard.Picture>

          <ProductCard.Info product={product}></ProductCard.Info>
          <ProductCard.Actions product={product}></ProductCard.Actions>

          <ProductCard.Delivery
            delivery={product.delivery}
          ></ProductCard.Delivery>
        </ProductCard.Root>
      ))}
    </div>
  );
};
