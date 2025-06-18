import React from "react";
import { Product } from "../product-list/types/product";
import Image from "next/image";
import { IconButton } from "@/shared/ui/icon-button";
import { LikeIcon } from "@/shared/assets/icons/like-icon";
import { CustomButton } from "@/shared/ui/custom-button";
import classNames from "classnames";
// import { HeartIcon } from "@/shared/assets/icons/heart-icon";
import { FlameIcon } from "@/shared/assets/icons/flame-icon";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-6 rounded-custom-24 bg-white p-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            {product.seller.avatarUrl && (
              <Image
                className="rounded-[50px]"
                width={25}
                height={25}
                src={product.seller.avatarUrl}
                alt="Photo"
              />
            )}

            <p className="text-sm">{product.seller.name}</p>
          </div>

          <p className="text-xs">{product.seller.location}</p>
        </div>

        <div className="relative">
          <Image
            width={300}
            height={265}
            src={product.imageUrl}
            alt="Product photo"
          />
          <IconButton
            className={classNames(
              "absolute top-[8px] right-[12px] h-9 w-9 bg-white text-custom-light-gray transition-all hover:text-black",
              product.isFavorite && "text-black",
            )}
          >
            <LikeIcon />
          </IconButton>

          {product.sale?.isActive && (
            <FlameIcon className="absolute top-[8px] left-[12px] h-9 w-9" />
          )}
        </div>

        <div className="text-custom-chocolate-dark">
          <p className="w-[300px] truncate">{product.name}</p>

          {product?.weights && product.weights[0].unit === "кг" && (
            <div className="flex items-center gap-4">
              <p className="font-extralight">Вага:</p>
              <div className="flex gap-2">
                {product.weights.map((item) => (
                  <p
                    className="rounded-[16px] bg-custom-cofe px-2  py-0.5 leading-none"
                    key={item.id}
                  >{`${item.value} ${item.unit}`}</p>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <p className="font-extralight">Цiна:</p>
            {!product.sale?.isActive ? (
              <p className="text-xl">{`${product.weights?.[0].price} ${product.weights?.[0].currency}`}</p>
            ) : (
              <>
                <p className="text-sm line-through">{`${product.weights?.[0].price} ${product.weights?.[0].currency}`}</p>
                <p className="text-xl text-red-600">
                  {product.weights?.[0] && product.sale?.salePercent
                    ? (
                        product.weights[0].price *
                        ((100 - product.sale.salePercent) / 100)
                      ).toFixed(0)
                    : ""}
                  {product.weights?.[0]?.currency}
                </p>
                {/* <p className="text-xl text-red-600">{`${
                  product.weights?.[0].price *
                  ((100 - product.sale.salePercent) / 100)
                } ${product.weights?.[0].currency}`}</p> */}
              </>
            )}
          </div>
        </div>

        <CustomButton size="full">Додати в кошик</CustomButton>
        <CustomButton size="full" color="gray">
          Детальніше
        </CustomButton>
      </div>
    </div>
  );
};
