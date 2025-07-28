"use client";
import React, { FC } from "react";
import { ProductType } from "./types/product";
import classNames from "classnames";
import { CatalogCard } from "../catalog-card/catalog-card";

type CatalogListProps = {
  products: ProductType[];
  className?: string;
};

export const CatalogList: FC<CatalogListProps> = ({ products, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col flex-wrap items-center justify-center gap-4 md-custom:flex-row",
        className,
      )}
    >
      {products.map((product) => (
        <CatalogCard key={product.id} product={product} />
      ))}
    </div>
  );
};
