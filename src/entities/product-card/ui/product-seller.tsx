import { Seller } from "@/entities/product-list/types/seller";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  seller: Seller;
};

export const ProductSeller: FC<Props> = ({ seller }) => {
  const { name, avatarUrl, location } = seller;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        {avatarUrl && (
          <Image
            className="rounded-[50px]"
            width={25}
            height={25}
            src={avatarUrl}
            alt="Photo"
          />
        )}

        <p className="text-sm">{name}</p>
      </div>

      <p className="text-xs">{location}</p>
    </div>
  );
};
