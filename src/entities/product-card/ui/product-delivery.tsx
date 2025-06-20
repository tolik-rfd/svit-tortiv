import { Delivery } from "@/entities/product-list/types/delivery";
import { ClockIcon } from "@/shared/assets/icons/clock-icon";
import { LocationIcon } from "@/shared/assets/icons/location-icon";
import { MoneyIcon } from "@/shared/assets/icons/money-icon";
import React from "react";

type Props = {
  delivery: Delivery;
};

export const ProductDelivery = ({ delivery }: Props) => {
  const { timeDays, cost } = delivery;

  return (
    <div className="flex justify-between gap-4 text-xs">
      <div className="flex items-center gap-2">
        <LocationIcon />
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
