"use client";

import Image from "next/image";
import { FC } from "react";
import { tv } from "tailwind-variants";

import logoXSVertical from "@/shared/assets/images/logo/logo-xs-vertical.svg";
import logoMDHorizontal from "@/shared/assets/images/logo/logo-md-horizontal.svg";
import { SearchIcon } from "@/shared/assets/icons/search-icon";
import { SmartLink } from "@/shared/ui/smart-link";
import { LocationIcon } from "@/shared/assets/icons/location-icon";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "@/shared/ui/button";
import { CatalogIcon } from "@/shared/assets/icons/catalog-icon";
import { CartIcon } from "@/shared/assets/icons/cart-icon";
import { Navbar, NavbarActions, NavbarActionsItem, NavbarItem } from "./navbar";
import { HeartIcon } from "@/shared/assets/icons/heart-icon";

const topNavbarStyles = tv({
  slots: {
    navbar: "sticky top-0 z-50 bg-custom-background px-0",
    catalogButton: "hidden lg:block",
    profile: "hidden lg:block",
    favorite: "hidden lg:block",
    cart: "hidden lg:block",
  },
});

const { navbar, catalogButton, profile, favorite, cart } = topNavbarStyles();

interface TopNavbarProps {}

export const TopNavbar: FC<TopNavbarProps> = (props) => {
  const {} = props;
  return (
    <Navbar className={navbar()}>
      <NavbarItem>
        <Logo />
      </NavbarItem>
      <NavbarItem>
        <Location />
      </NavbarItem>
      <NavbarItem className={catalogButton()}>
        <CatalogButton />
      </NavbarItem>
      <NavbarActions>
        <NavbarActionsItem>
          <SearchBar />
        </NavbarActionsItem>
        <NavbarActionsItem className={profile()}>
          <Button style={{ padding: "12px 20px" }}>Вхід | Реєстрація</Button>
        </NavbarActionsItem>
        <NavbarActionsItem className={favorite()}>
          <HeartIcon />
        </NavbarActionsItem>
        <NavbarActionsItem className={cart()}>
          <CartIcon />
        </NavbarActionsItem>
        <NavbarActionsItem>
          <LanguageSwitcher />
        </NavbarActionsItem>
      </NavbarActions>
    </Navbar>
  );
};

/////////////////////////////////////

// This section contains the components used in the TopNavbar. It can be separated into its own file if needed. Like features in features layer or in shared layer.
// This is just a quick implementation.

const Logo = () => {
  return (
    <SmartLink href={"/"}>
      <Image src={logoXSVertical} alt="Logo" className="lg:hidden" />
      <Image src={logoMDHorizontal} alt="Logo" className="hidden lg:block" />
    </SmartLink>
  );
};

const SearchBar = () => {
  return <SearchIcon />;
};

const Location = () => {
  return (
    <div className="flex gap-1">
      <LocationIcon /> <span className="hidden lg:block">Київ</span>
    </div>
  );
};
/////////////////////////////////////

const CatalogButton = () => {
  return (
    <Button style={{ padding: "12px 20px" }} color="dark">
      <CatalogIcon width={18} height={18} /> Каталог
    </Button>
  );
};

//////////////////////////////////

const languageSwitcherStyles = tv({
  slots: {
    root: "rounded-custom-32 bg-white p-1 ",
    tabsList: "",
    tabsTrigger:
      "cursor-pointer rounded-custom-32 px-3.5 py-3 text-sm leading-1 text-custom-dark transition-all  data-[state=active]:bg-[#0A0A0A] data-[state=active]:text-white ",
  },
});

const { root: switcherRoot, tabsList, tabsTrigger } = languageSwitcherStyles();

const LanguageSwitcher = () => {
  return (
    <Tabs className={switcherRoot()} defaultValue="ua">
      <TabsList className={tabsList()}>
        <TabsTrigger value="ua" className={tabsTrigger()}>
          UA
        </TabsTrigger>
        <TabsTrigger value="en" className={tabsTrigger()}>
          EN
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
