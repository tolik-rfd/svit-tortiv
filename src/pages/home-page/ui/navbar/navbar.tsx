import { Navbar as NavbarUi } from "@/shared/ui/navbar";
import { FC } from "react";
import Image from "next/image";
import { tv } from "tailwind-variants";

import logoXSVertical from "@/shared/assets/images/logo/logo-xs-vertical.svg";
import logoMDHorizontal from "@/shared/assets/images/logo/logo-md-horizontal.svg";
import { CustomButton } from "@/shared/ui/custom-button";
import { HeartIcon } from "@/shared/assets/icons/heart-icon";
import { CartIcon } from "@/shared/assets/icons/cart-icon";
import { CatalogIcon } from "@/shared/assets/icons/catalog-icon";
import { LocationIcon } from "@/shared/assets/icons/location-icon";
import { SmartLink } from "@/shared/ui/smart-link";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { SearchIcon } from "@/shared/assets/icons/search-icon";

import { MessageIcon } from "@/shared/assets/icons/message-icon";
import { Smile } from "lucide-react";
import { Item, MobileNavbar } from "@/shared/ui/mobile-navbar";

const NAVBAR_ITEMS: Item[] = [
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

const bottomNavbarStyles = tv({
  slots: {
    navbar: "fixed bottom-0 left-0 z-50 bg-custom-cofe lg:hidden",
  },
});

const { navbar: bottomNavbar } = bottomNavbarStyles();

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  return (
    <>
      <NavbarUi.Root className={navbar()}>
        <NavbarUi.Item>
          <Logo />
        </NavbarUi.Item>
        <NavbarUi.Item>
          <Location />
        </NavbarUi.Item>
        <NavbarUi.Item className={catalogButton()}>
          <CatalogButton />
        </NavbarUi.Item>
        <NavbarUi.Actions>
          <NavbarUi.ActionsItem>
            <SearchBar />
          </NavbarUi.ActionsItem>
          <NavbarUi.ActionsItem className={profile()}>
            <CustomButton style={{ padding: "12px 20px" }}>
              Вхід | Реєстрація
            </CustomButton>
          </NavbarUi.ActionsItem>
          <NavbarUi.ActionsItem className={favorite()}>
            <HeartIcon />
          </NavbarUi.ActionsItem>
          <NavbarUi.ActionsItem className={cart()}>
            <CartIcon />
          </NavbarUi.ActionsItem>
          <NavbarUi.ActionsItem>
            <LanguageSwitcher />
          </NavbarUi.ActionsItem>
        </NavbarUi.Actions>
      </NavbarUi.Root>
      <MobileNavbar.Root items={NAVBAR_ITEMS} className={bottomNavbar()}>
        <MobileNavbar.List>
          {NAVBAR_ITEMS.map(({ value, icon, label }) => {
            return (
              <MobileNavbar.Trigger value={value} key={value}>
                <MobileNavbar.Icon icon={icon} value={value} />
                <MobileNavbar.Label label={label} value={value} />
              </MobileNavbar.Trigger>
            );
          })}
        </MobileNavbar.List>
      </MobileNavbar.Root>
    </>
  );
};

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
    <CustomButton style={{ padding: "12px 20px" }} color="dark">
      <CatalogIcon width={18} height={18} /> Каталог
    </CustomButton>
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
