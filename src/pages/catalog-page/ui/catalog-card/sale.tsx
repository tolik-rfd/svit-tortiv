import { FC } from "react";
import classNames from "classnames";
import { FlameIcon } from "@/shared/assets/icons/flame-icon";

interface SaleProps {
  className?: string;
}

export const Sale: FC<SaleProps> = ({ className }) => {
  return <FlameIcon className={classNames("h-9 w-9", className)} />;
};
