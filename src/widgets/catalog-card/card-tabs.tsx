import { ProductType } from "@/entities/product-list/types/product";
import { ProductValueType } from "@/entities/product-list/types/product-value";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import React, { ComponentPropsWithoutRef, FC, useMemo, useState } from "react";

interface CardTabsProps extends ComponentPropsWithoutRef<"div"> {
  product: ProductType;
}

export const CardTabs: FC<CardTabsProps> = ({ product }) => {
  const { weights, amounts, unit, price, sale, currency } = product;

  const options: ProductValueType[] | null = weights ?? amounts;

  const defaultValue = options?.[0]?.value.toString();

  const [tabValue, setTabValue] = useState(defaultValue);

  const currentPrice = useMemo(() => {
    return tabValue ? Number(tabValue) * price : 0;
  }, [tabValue, price]);

  return (
    <Tabs
      variant="third"
      className="flex flex-col gap-4"
      value={tabValue}
      onValueChange={setTabValue}
    >
      <div className="flex items-center gap-4">
        {weights ? (
          <p className="font-extralight">Вага:</p>
        ) : (
          <p className="font-extralight">Кіл-ть:</p>
        )}

        <TabsList>
          {options?.map((item) => (
            <TabsTrigger key={item.id} value={item.value.toString()}>
              {`${item.value} ${unit}`}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {options?.map((item) => (
        <TabsContent key={item.id} value={item.value.toString()}>
          <div className="flex items-center gap-4">
            <p className="font-extralight">Цiна:</p>
            {!sale?.isActive ? (
              <p className="text-xl">{`${currentPrice} ${currency}`}</p>
            ) : (
              <>
                <p className="text-sm line-through">{`${currentPrice} ${currency}`}</p>
                <p className="text-xl text-custom-red">
                  {sale?.salePercent
                    ? (currentPrice * ((100 - sale.salePercent) / 100)).toFixed(
                        0,
                      )
                    : ""}
                  {` ${currency}`}
                </p>
              </>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
