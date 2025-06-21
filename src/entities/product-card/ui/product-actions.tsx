import { Product } from "@/entities/product-list/types/product";
import { CustomButton } from "@/shared/ui/custom-button";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  product: Product;
};

export const ProductActions: FC<Props> = ({ product }) => {
  const {} = product;
  const handleAddToCart = () => {};

  return (
    <>
      <CustomButton size="full" onClick={handleAddToCart}>
        Додати в кошик
      </CustomButton>
      <CustomButton size="full" color="gray" asChild>
        <Link href="#">Детальніше</Link>
      </CustomButton>
    </>
  );
};
