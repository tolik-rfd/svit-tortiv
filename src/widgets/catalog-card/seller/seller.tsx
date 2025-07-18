import { FC, useMemo } from "react";
import classNames from "classnames";
import { SellerType } from "../../../entities/product-list/types/seller";
import {
  Avatar as BaseAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/ui/avatar";
import { SlotType } from "../types/slot";

const Root: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("flex flex-col gap-2", className)} {...rest}>
      {children}
    </div>
  );
};

const Top: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("flex items-center gap-1.5", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

const Bottom: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

// Avatar
interface AvatarProps {
  seller: SellerType;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ seller, className }) => {
  const { avatarUrl, name } = seller;

  const getInitials = (fullName: string | null): string => {
    if (!fullName) return "";

    const fullNameArr = fullName.trim().split(" ");

    if (fullNameArr.length === 0) return "";
    if (fullNameArr.length === 1) return fullNameArr[0][0].toUpperCase();

    return (fullNameArr[0][0] + fullNameArr[1][0]).toUpperCase();
  };

  const initials = useMemo(() => getInitials(name), [name]);

  return (
    <BaseAvatar className={className}>
      <AvatarImage className="size-6" src={avatarUrl} alt={name} />

      <AvatarFallback className="size-6 text-sm">{initials}</AvatarFallback>
    </BaseAvatar>
  );
};

// SellerName
interface NameProps {
  name: string;
  className?: string;
}

const Name: FC<NameProps> = ({ name, className }) => {
  return <p className={classNames("text-sm", className)}>{name}</p>;
};

// SellerLocation
interface LocationProps {
  location: string;
  className?: string;
}

const Location: FC<LocationProps> = ({ location, className }) => {
  return <p className={classNames("text-sm", className)}>{location}</p>;
};

export { Root, Top, Bottom, Avatar, Name, Location };
