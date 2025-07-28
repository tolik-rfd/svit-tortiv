import { FC } from "react";
import classNames from "classnames";
import { SlotType } from "../types/slot";

const Root: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames(
        "mt-3 flex justify-between gap-4 text-xs",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const Item: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("flex items-center gap-2", className)} {...rest}>
      {children}
    </div>
  );
};

interface TitleProps {
  className?: string;
  title?: string;
}

const Title: FC<TitleProps> = ({ className, title }) => {
  return (
    <p className={classNames("flex items-center gap-2", className)}>{title}</p>
  );
};

export { Root, Item, Title };
