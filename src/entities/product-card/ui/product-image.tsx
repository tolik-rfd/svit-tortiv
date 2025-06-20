import { Product } from "@/entities/product-list/types/product";
import { FlameIcon } from "@/shared/assets/icons/flame-icon";
import { LikeIcon } from "@/shared/assets/icons/like-icon";
import { IconButton } from "@/shared/ui/icon-button";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  product: Product;
};

export const ProductImage = ({ product }: Props) => {
  const { imageUrl, sale } = product;

  const handleAddToFavorites = () => {};

  return (
    <div className="relative">
      <Image width={300} height={265} src={imageUrl} alt="Product photo" />
      <IconButton
        className={classNames(
          "absolute top-[8px] right-[12px] h-9 w-9 bg-white text-custom-light-gray transition-all hover:text-black",
          product.isFavorite && "text-black",
        )}
        onClick={handleAddToFavorites}
      >
        <LikeIcon />
      </IconButton>

      {sale?.isActive && (
        <FlameIcon className="absolute top-[8px] left-[12px] h-9 w-9" />
      )}
    </div>
  );
};
