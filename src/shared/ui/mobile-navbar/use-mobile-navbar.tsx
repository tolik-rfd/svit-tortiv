import { CSSProperties, useState } from "react";
import { MobileNavbarProps, MobileNavbarState } from "./mobile-navbar";

type UseMobileNavbarReturn = MobileNavbarState;

export const useMobileNavbar = (
  props: MobileNavbarProps,
): UseMobileNavbarReturn => {
  const { items } = props;
  const [currentTabValue, setCurrentTabValue] = useState<string>("");
  const [sliderStyles, setSliderStyles] = useState<CSSProperties | undefined>();

  const valueIndexMap = items.reduce(
    (acc, item, index) => {
      acc[item.value] = index;
      return acc;
    },
    {} as Record<string, number>,
  );

  const onValueChange = (value: string) => {
    const index = valueIndexMap[value];
    if (index === undefined) return;

    const left = getSliderLeftOffset(index, items.length);

    setSliderStyles({ left });

    setCurrentTabValue(value);
  };

  return {
    currentTabValue,
    setCurrentTabValue,
    sliderStyles,
    onValueChange,
  };
};

const getSliderLeftOffset = (index: number, totalItems: number) => {
  const offset = `(100% / ${totalItems}) * ${index}`;
  const half = `(100% / ${totalItems}) / 2`;
  return `calc(${offset} + ${half})`;
};
