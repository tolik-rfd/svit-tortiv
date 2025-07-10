"use client";
import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { LikeIcon } from "@/shared/assets/icons/like-icon";
import { IconButton } from "@/shared/ui/icon-button";
import { FlameIcon } from "lucide-react";
import { ProductType } from "../product-list/types/product";
import { CustomButton } from "@/shared/ui/custom-button";
import Link from "next/link";
import { DeliveryType } from "../product-list/types/delivery";
import { DeliveryLocationIcon } from "@/shared/assets/icons/delivery-location-icon";
import { ClockIcon } from "@/shared/assets/icons/clock-icon";
import { MoneyIcon } from "@/shared/assets/icons/money-icon";
import { SaleType } from "../product-list/types/sale";

interface RootProps {
  children: ReactNode;
  className?: string;
}

const Root: FC<RootProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-3 rounded-custom-24 bg-white p-4 text-custom-chocolate-dark",
        className,
      )}
    >
      {children}
    </div>
  );
};

// AddToFavorites
interface AddToFavoritesProps {
  isFavorite: boolean;
  className?: string;
}

const AddToFavorites: FC<AddToFavoritesProps> = ({ isFavorite, className }) => {
  const handleAddToFavorites = () => {};
  return (
    <IconButton
      className={classNames(
        "absolute top-[8px] right-[12px] h-9 w-9 bg-white text-custom-light-gray transition-all hover:text-black",
        isFavorite && "text-black",
        className,
      )}
      onClick={handleAddToFavorites}
    >
      <LikeIcon />
    </IconButton>
  );
};

// Sale
interface SaleProps {
  sale?: SaleType;
  className?: string;
}

const Sale: FC<SaleProps> = ({ sale, className }) => {
  return (
    sale?.isActive && (
      <FlameIcon
        className={classNames(
          "absolute top-[8px] left-[12px] h-9 w-9",
          className,
        )}
      />
    )
  );
};

// Photo
interface PhotoProps {
  imageUrl: string;
  className?: string;
}

const Photo: FC<PhotoProps> = ({ imageUrl, className }) => {
  return (
    <Image
      className={className}
      width={300}
      height={265}
      src={imageUrl}
      alt="Product photo"
    />
  );
};

// Picture
interface PictureProps {
  children: ReactNode;
  className?: string;
}

const Picture: FC<PictureProps> = ({ children, className }) => {
  return <div className={classNames("relative", className)}>{children}</div>;
};

// Info
interface InfoProps {
  product: ProductType;
  className?: string;
}

const Info: FC<InfoProps> = ({ product, className }) => {
  const { name, sale, price, unit, currency, weights, amounts } = product;

  const [selectedWeightId, setSelectedWeightId] = useState<string | null>(
    weights ? weights[0].id : null,
  );

  const [selectedAmountId, setSelectedAmountId] = useState<string | null>(
    amounts ? amounts[0].id : null,
  );

  const selectedWeight =
    weights?.find((item) => item.id === selectedWeightId) || undefined;

  const selectedAmount =
    amounts?.find((item) => item.id === selectedAmountId) || undefined;

  const selectedValue = selectedWeight ?? selectedAmount;

  const currentPrice =
    selectedValue && selectedValue.value ? price * selectedValue.value : price;

  return (
    <div className={className}>
      <p className="w-[300px] truncate">{name}</p>

      {weights && unit === "кг" && (
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
              >{`${item.value} ${unit}`}</button>
            ))}
          </div>
        </div>
      )}

      {amounts && unit === "шт" && (
        <div className="flex items-center gap-4">
          <p className="font-extralight">Кіл-ть:</p>
          <div className="flex gap-2">
            {amounts.map((item) => (
              <button
                className={classNames(
                  "cursor-pointer rounded-[16px] px-2 py-0.5 leading-none transition-all",
                  { "bg-custom-cofe": selectedAmountId === item.id },
                )}
                key={item.id}
                onClick={() => setSelectedAmountId(item.id)}
              >{`${item.value} ${unit}`}</button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <p className="font-extralight">Цiна:</p>
        {!sale?.isActive ? (
          <p className="text-xl">{`${currentPrice} ${currency}`}</p>
        ) : (
          <>
            <p className="text-sm line-through">{`${currentPrice} ${currency}`}</p>
            <p className="text-xl text-custom-red">
              {sale?.salePercent
                ? (currentPrice * ((100 - sale.salePercent) / 100)).toFixed(0)
                : ""}
              {currency}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

// Actions
interface ActionsProps {
  product: ProductType;
  className?: string;
}

const Actions: FC<ActionsProps> = ({ product, className }) => {
  const {} = product;
  const handleAddToCart = () => {};

  return (
    <div className={classNames("flex flex-col gap-3", className)}>
      <CustomButton size="full" onClick={handleAddToCart}>
        Додати в кошик
      </CustomButton>
      <CustomButton size="full" color="gray" asChild>
        <Link href="#">Детальніше</Link>
      </CustomButton>
    </div>
  );
};

// Delivery
interface DeliveryProps {
  delivery: DeliveryType;
  className?: string;
}

const Delivery: FC<DeliveryProps> = ({ delivery, className }) => {
  const { timeDays, cost } = delivery;

  return (
    <div
      className={classNames(
        "mt-3 flex justify-between gap-4 text-xs",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <DeliveryLocationIcon />
        <p>доставка</p>
      </div>

      <div className="flex items-center gap-2">
        <ClockIcon />
        <p>{`${timeDays} дні`}</p>
      </div>

      <div className="flex items-center gap-2">
        <MoneyIcon />
        <p>{`${cost} грн`}</p>
      </div>
    </div>
  );
};

export {
  Root,
  // SellerAvatar,
  // Seller,
  Photo,
  AddToFavorites,
  Sale,
  Picture,
  Info,
  Actions,
  Delivery,
};
