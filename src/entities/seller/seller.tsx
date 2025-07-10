import { FC, useMemo } from "react";
import classNames from "classnames";
import { SellerType } from "../product-list/types/seller";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

// Seller
interface SellerProps {
  seller: SellerType;
  className?: string;
}

const Seller: FC<SellerProps> = ({ seller, className }) => {
  const { name, location } = seller;
  return (
    <div className={classNames("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-1.5">
        <SellerAvatar seller={seller} />
        <SellerName name={name} />
      </div>

      <SellerLocation location={location} />
    </div>
  );
};

// SellerAvatar
interface SellerAvatarProps {
  seller: SellerType;
  className?: string;
}

const SellerAvatar: FC<SellerAvatarProps> = ({ seller, className }) => {
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
    <Avatar className={className}>
      <AvatarImage className="size-6" src={avatarUrl} alt={name} />

      <AvatarFallback className="size-6 text-sm">{initials}</AvatarFallback>
    </Avatar>
  );
};

// SellerName
interface SellerNameProps {
  name: string;
  className?: string;
}

const SellerName: FC<SellerNameProps> = ({ name, className }) => {
  return <p className={classNames("text-sm", className)}>{name}</p>;
};

// SellerLocation
interface SellerLocationProps {
  location: string;
  className?: string;
}

const SellerLocation: FC<SellerLocationProps> = ({ location, className }) => {
  return <p className={classNames("text-sm", className)}>{location}</p>;
};

export { Seller, SellerAvatar, SellerName, SellerLocation };
