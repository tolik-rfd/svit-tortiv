"use client";
import { FC } from "react";
import classNames from "classnames";
import { SlotType } from "../../../pages/catalog-page/ui/catalog-card/types/slot";

const Root: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-3 rounded-custom-24 bg-white p-4 text-custom-chocolate-dark",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const Header: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

const Body: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

const Footer: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

interface TitleProps {
  name: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ name, className, ...rest }) => {
  return (
    <p className={classNames("w-[300px] truncate", className)} {...rest}>
      {name}
    </p>
  );
};

const Actions: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("flex flex-col gap-3", className)} {...rest}>
      {children}
    </div>
  );
};

const Media: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("relative h-[16.5625rem] w-[18.75rem]", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

const TopLeft: FC<SlotType> = ({ children, className, ...rest }) => (
  <div
    className={classNames("absolute top-[8px] left-[12px]", className)}
    {...rest}
  >
    {children}
  </div>
);

const TopRight: FC<SlotType> = ({ children, className, ...rest }) => (
  <div
    className={classNames("absolute top-[8px] right-[12px]", className)}
    {...rest}
  >
    {children}
  </div>
);

export { Root, Header, Body, Footer, Title, Actions, Media, TopLeft, TopRight };
