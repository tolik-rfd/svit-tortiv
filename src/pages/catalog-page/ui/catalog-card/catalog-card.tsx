import React, { ComponentPropsWithoutRef, FC } from "react";
import { ProductCard } from "@/entities/product-card";
import Link from "next/link";
import { Sale } from "./sale";
import { AddToFavoritesButton } from "@/pages/catalog-page/ui/catalog-card/features/add-to-favorites-button";
import { AddToCartButton } from "@/pages/catalog-page/ui/catalog-card/features/add-to-cart-button";
import { Button } from "@/shared/ui/button";
import { CatalogCardTabs } from "./card-tabs/catalog-card-tabs";
import { Seller } from "@/pages/catalog-page/ui/catalog-card/seller";
import { Media } from "@/entities/product-card/ui/media";
import { Delivery } from "./delivery";
import { DeliveryLocationIcon } from "@/shared/assets/icons/delivery-location-icon";
import { ClockIcon } from "@/shared/assets/icons/clock-icon";
import { MoneyIcon } from "@/shared/assets/icons/money-icon";
import { ProductType } from "@/pages/catalog-page/ui/catalog-list/types/product";
import { AppRoutes } from "@/shared/config/routes";

interface CatalogCardProps extends ComponentPropsWithoutRef<"div"> {
  product: ProductType;
}

export const CatalogCard: FC<CatalogCardProps> = ({
  product,
  className,
  ...rest
}) => {
  const { id, seller, imageUrl, isFavorite, name, sale, delivery } = product;

  const path = `${AppRoutes.CATALOG}/${id}`;

  return (
    <ProductCard.Root className={className} {...rest}>
      <ProductCard.Header>
        <Seller.Root>
          <Seller.Top>
            <Seller.Avatar seller={seller} />
            <Seller.Name name={seller.name} />
          </Seller.Top>

          <Seller.Bottom>
            <Seller.Location location={seller.location} />
          </Seller.Bottom>
        </Seller.Root>
      </ProductCard.Header>

      <ProductCard.Body className="flex flex-col gap-3">
        <Media.Root>
          <Link href="#">
            <Media.Photo imageUrl={imageUrl}></Media.Photo>
          </Link>

          <Media.TopLeft>{sale?.isActive && <Sale />}</Media.TopLeft>

          <Media.TopRight>
            <AddToFavoritesButton isFavorite={isFavorite} />
          </Media.TopRight>
        </Media.Root>

        <ProductCard.Title name={name} className="mb-1" />

        <CatalogCardTabs product={product}></CatalogCardTabs>

        <ProductCard.Actions>
          <AddToCartButton />

          <Button size="full" color="gray" asChild>
            <Link href={path}>Детальніше</Link>
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
            <Delivery.Title title={`${delivery.timeDays} дні`} />
          </Delivery.Item>

          <Delivery.Item>
            <MoneyIcon />
            <Delivery.Title title={`${delivery.cost} грн`} />
          </Delivery.Item>
        </Delivery.Root>
      </ProductCard.Footer>
    </ProductCard.Root>
  );
};
