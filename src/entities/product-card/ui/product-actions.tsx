import { Product } from "@/entities/product-list/types/product";
import { CustomButton } from "@/shared/ui/custom-button";
import Link from "next/link";
import React from "react";

type Props = {
  product: Product;
};

export const ProductActions = ({ product }: Props) => {
  const handleAddToCart = (currentProduct: Product) => {
    return currentProduct;
  };

  return (
    <>
      <CustomButton size="full" onClick={() => handleAddToCart(product)}>
        Додати в кошик
      </CustomButton>
      <CustomButton size="full" color="gray" asChild>
        <Link href="#">Детальніше</Link>
      </CustomButton>
    </>
  );
};
