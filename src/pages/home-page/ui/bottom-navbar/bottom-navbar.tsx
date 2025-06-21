"use client";
import { CartIcon } from "@/shared/assets/icons/cart-icon";
import { CatalogIcon } from "@/shared/assets/icons/catalog-icon";
import { HeartIcon } from "@/shared/assets/icons/heart-icon";
import { MessageIcon } from "@/shared/assets/icons/message-icon";
import {
  MobileNavbar,
  MobileNavbarIcon,
  MobileNavbarItem,
  MobileNavbarLabel,
  MobileNavbarList,
  MobileNavbarTrigger,
} from "@/shared/ui/mobile-navbar";
import { Smile } from "lucide-react";

import { FC } from "react";
import { tv } from "tailwind-variants";

const NAVBAR_ITEMS: MobileNavbarItem[] = [
  {
    value: "catalog",
    label: "Каталог",
    href: "/catalog",
    icon: <CatalogIcon />,
  },

  {
    value: "favorites",
    label: "Обране",
    href: "/favorites",
    icon: <HeartIcon />,
  },

  {
    value: "chat",
    label: "Чат",
    href: "/chat",
    icon: <MessageIcon />,
  },
  {
    value: "profile",
    label: "Профіль",
    href: "/profile",
    icon: <Smile />,
  },
  {
    value: "orders",
    label: "Кошик",
    href: "/orders",
    icon: <CartIcon />,
  },
];

const bottomNavbarStyles = tv({
  slots: {
    navbar: "fixed bottom-0 left-0 z-50 bg-custom-cofe lg:hidden",
  },
});

const { navbar } = bottomNavbarStyles();

interface BottomNavbarProps {}

export const BottomNavbar: FC<BottomNavbarProps> = (props) => {
  const {} = props;
  return (
    <MobileNavbar items={NAVBAR_ITEMS} className={navbar()}>
      <MobileNavbarList>
        {NAVBAR_ITEMS.map(({ value, icon, label }) => {
          return (
            <MobileNavbarTrigger value={value} key={value}>
              <MobileNavbarIcon icon={icon} value={value} />
              <MobileNavbarLabel label={label} value={value} />
            </MobileNavbarTrigger>
          );
        })}
      </MobileNavbarList>
    </MobileNavbar>
  );
};
