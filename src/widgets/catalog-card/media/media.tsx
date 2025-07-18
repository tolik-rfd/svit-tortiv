import { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import { SlotType } from "../types/slot";

const Root: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div
      style={{ width: 300, height: 265 }}
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

interface PhotoProps {
  imageUrl: string;
  className?: string;
}

const Photo: FC<PhotoProps> = ({ imageUrl, className }) => (
  <Image
    src={imageUrl}
    alt="Product photo"
    className={className}
    width={300}
    height={265}
  />
);

export { Root, TopLeft, TopRight, Photo };
