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
import { CustomButton } from "@/shared/ui/custom-button";
import { CatalogIcon } from "@/shared/assets/icons/catalog-icon";
import { HeartIcon } from "lucide-react";
import { CartIcon } from "@/shared/assets/icons/cart-icon";

const navbarStyles = tv({
  slots: {
    root: "sticky top-0 z-50 flex items-center justify-between bg-custom-cofe px-3 py-2 text-custom-dark",
    logo: " text-xl font-bold",
    location: " text-sm ",
    catalogButton: "hidden lg:block",
    actions: "",
  },
});

const { root, logo, location, catalogButton } = navbarStyles();

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  return (
    <div className={root()}>
      <div className={logo()}>
        <Logo />
      </div>
      <div className={location()}>
        <Location />
      </div>
      <div className={catalogButton()}>
        <CatalogButton />
      </div>
      <div>
        <Actions />
      </div>
    </div>
  );
};

////////////////////////////

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
    <CustomButton style={{ padding: "12px 20px" }} color="dark">
      <CatalogIcon width={18} height={18} /> Каталог
    </CustomButton>
  );
};

/////////////////////////////////////

const actionsStyles = tv({
  slots: {
    actionsRoot: "flex items-center justify-between gap-8",
    searchBar: "",
    profile: "hidden lg:block",
    favorite: "hidden lg:block",
    cart: "hidden lg:block",
    languageSwitcher: "",
  },
});

const { actionsRoot, searchBar, profile, favorite, cart, languageSwitcher } =
  actionsStyles();

const Actions = () => {
  return (
    <div className={actionsRoot()}>
      <div className={searchBar()}>
        <SearchBar />
      </div>
      <div className={profile()}>
        <CustomButton style={{ padding: "12px 20px" }}>
          Вхід | Реєстрація
        </CustomButton>
      </div>
      <div className={favorite()}>
        <HeartIcon />
      </div>
      <div className={cart()}>
        <CartIcon />
      </div>
      <div className={languageSwitcher()}>
        <LanguageSwitcher />
      </div>
    </div>
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
