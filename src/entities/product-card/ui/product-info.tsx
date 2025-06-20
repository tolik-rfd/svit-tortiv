"use client";
import { Product } from "@/entities/product-list/types/product";
import classNames from "classnames";
import React, { useState } from "react";

type Props = {
  product: Product;
};

export const ProductInfo = ({ product }: Props) => {
  const { name, sale, weights } = product;

  const [selectedWeightId, setSelectedWeightId] = useState(
    product.weights[0].id,
  );

  const selectedWeight =
    weights.find((item) => item.id === selectedWeightId) || weights[0];

  return (
    <div>
      <p className="w-[300px] truncate">{name}</p>

      {weights && selectedWeight.unit === "кг" && (
        <div className="flex items-center gap-4">
          <p className="font-extralight">Вага:</p>
          <div className="flex gap-2">
            {weights.map((item) => (
              <button
                className={classNames(
                  "cursor-pointer rounded-[16px] px-2 py-0.5 leading-none transition-all",
                  { "bg-custom-cofe": selectedWeightId === item.id },
                )}
                key={item.id}
                onClick={() => setSelectedWeightId(item.id)}
              >{`${item.value} ${item.unit}`}</button>
            ))}
          </div>
        </div>
      )}

      {weights && selectedWeight.unit === "шт" && (
        <div className="flex items-center gap-4">
          <p className="font-extralight">Кіл-ть:</p>
          <div className="flex gap-2">
            {weights.map((item) => (
              <button
                className={classNames(
                  "cursor-pointer rounded-[16px] px-2 py-0.5 leading-none transition-all",
                  { "bg-custom-cofe": selectedWeightId === item.id },
                )}
                key={item.id}
                onClick={() => setSelectedWeightId(item.id)}
              >{`${item.value} ${item.unit}`}</button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <p className="font-extralight">Цiна:</p>
        {!sale?.isActive ? (
          <p className="text-xl">{`${selectedWeight.price} ${selectedWeight.currency}`}</p>
        ) : (
          <>
            <p className="text-sm line-through">{`${selectedWeight.price} ${weights?.[0].currency}`}</p>
            <p className="text-xl text-custom-red">
              {selectedWeight && sale.salePercent
                ? (
                    selectedWeight.price *
                    ((100 - sale.salePercent) / 100)
                  ).toFixed(0)
                : ""}
              {selectedWeight.currency}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
