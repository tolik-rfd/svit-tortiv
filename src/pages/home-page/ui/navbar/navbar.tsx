"use client";

import Image from "next/image";
import { FC } from "react";
import { tv } from "tailwind-variants";

import logoXSVertical from "@/shared/assets/images/logo/logo-xs-vertical.svg";

import logoMDHorizontal from "@/shared/assets/images/logo/logo-md-horizontal.svg";
import { SearchIcon } from "@/shared/assets/icons/search-icon";

import { SmartLink } from "@/shared/ui/smart-link";
import { LocationIcon } from "@/shared/assets/icons/location-icon";

const navbarStyles = tv({
  slots: {
    root: "flex items-center justify-between  bg-white  px-3 py-2 text-custom-dark ",
    logo: "order-1 text-xl font-bold",
    location: "order-3 text-sm",
    catalogButton: "hidden rounded bg-blue-600 px-4 py-2 hover:bg-blue-700",
    searchBar: "order-2",
    actions: "hidden",
    languageSwitcher: "order-4 text-sm",
  },
});

const {
  root,
  logo,
  location,
  catalogButton,
  searchBar,
  actions,
  languageSwitcher,
} = navbarStyles();

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
      <div className={catalogButton()}>catalog button</div>
      <div className={searchBar()}>
        <SearchBar />
      </div>
      <div className={actions()}>actions</div>
      <div className={languageSwitcher()}>language switcher</div>
    </div>
  );
};

////////////////////////////

const Logo = () => {
  return (
    <SmartLink href={"/"}>
      <Image src={logoXSVertical} alt="Logo" className="md:hidden" />
      <Image src={logoMDHorizontal} alt="Logo" className="hidden md:block" />
    </SmartLink>
  );
};

const SearchBar = () => {
  return <SearchIcon />;
};

const Location = () => {
  return <LocationIcon />;
};
