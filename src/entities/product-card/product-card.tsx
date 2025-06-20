"use client";
import React from "react";
import { Product } from "../product-list/types/product";
import { ProductSeller } from "./ui/product-seller";
import { ProductImage } from "./ui/product-image";
import { ProductInfo } from "./ui/product-info";
import { ProductActions } from "./ui/product-actions";
import { ProductDelivery } from "./ui/product-delivery";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const { seller, delivery } = product;

  return (
    <div className="flex flex-col gap-6 rounded-custom-24 bg-white p-4 text-custom-chocolate-dark">
      <div className="flex flex-col gap-3">
        <ProductSeller seller={seller} />

        <ProductImage product={product} />

        <ProductInfo product={product} />

        <ProductActions product={product} />
      </div>

      <ProductDelivery delivery={delivery} />
    </div>
  );
};
