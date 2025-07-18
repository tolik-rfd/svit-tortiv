import React, { ComponentPropsWithoutRef, FC } from "react";
import { ProductCard } from "../../entities/product-card";
import Link from "next/link";
import { Sale } from "./sale";
import { AddToFavoritesButton } from "./features/add-to-favorites-button";
import { AddToCartButton } from "./features/add-to-cart-button";
import { Button } from "@/shared/ui/button";
import { CardTabs } from "./card-tabs";
import { Seller } from "./seller";
import { Media } from "./media";
import { Delivery } from "./delivery";
import { DeliveryLocationIcon } from "@/shared/assets/icons/delivery-location-icon";
import { ClockIcon } from "@/shared/assets/icons/clock-icon";
import { MoneyIcon } from "@/shared/assets/icons/money-icon";
import { ProductType } from "@/entities/product-list/types/product";

interface CatalogCardProps extends ComponentPropsWithoutRef<"div"> {
  product: ProductType;
}

export const CatalogCard: FC<CatalogCardProps> = ({
  product,
  className,
  ...rest
}) => {
  return (
    <ProductCard.Root className={className} {...rest}>
      <ProductCard.Header>
        <Seller.Root>
          <Seller.Top>
            <Seller.Avatar seller={product.seller} />
            <Seller.Name name={product.seller.name} />
          </Seller.Top>

          <Seller.Bottom>
            <Seller.Location location={product.seller.location} />
          </Seller.Bottom>
        </Seller.Root>
      </ProductCard.Header>

      <ProductCard.Body className="flex flex-col gap-3">
        <Media.Root>
          <Link href="#">
            <Media.Photo imageUrl={product.imageUrl}></Media.Photo>
          </Link>

          <Media.TopLeft>{product.sale?.isActive && <Sale />}</Media.TopLeft>

          <Media.TopRight>
            <AddToFavoritesButton isFavorite={product.isFavorite} />
          </Media.TopRight>
        </Media.Root>

        <ProductCard.Title name={product.name} className="mb-1" />

        <CardTabs product={product}></CardTabs>

        <ProductCard.Actions>
          <AddToCartButton />

          <Button size="full" color="gray" asChild>
            <Link href={`../products/${product.id}`}>Детальніше</Link>
          </Button>
        </ProductCard.Actions>
      </ProductCard.Body>

      <ProductCard.Footer>
        <Delivery.Root>
          <Delivery.Item>
            <DeliveryLocationIcon />
            <Delivery.Title title={"доставка"} />
          </Delivery.Item>

          <Delivery.Item>
            <ClockIcon />
            <Delivery.Title title={`${product.delivery.timeDays} дні`} />
          </Delivery.Item>

          <Delivery.Item>
            <MoneyIcon />
            <Delivery.Title title={`${product.delivery.cost} грн`} />
          </Delivery.Item>
        </Delivery.Root>
      </ProductCard.Footer>
    </ProductCard.Root>
  );
};
