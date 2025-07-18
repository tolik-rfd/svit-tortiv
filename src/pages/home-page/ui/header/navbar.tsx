import { Navbar as NavbarUi } from "@/shared/ui/navbar";
import { FC } from "react";
import Image from "next/image";
import { tv } from "tailwind-variants";

import logoXSVertical from "@/shared/assets/images/logo/logo-xs-vertical.svg";
import logoMDHorizontal from "@/shared/assets/images/logo/logo-md-horizontal.svg";
import { Button } from "@/shared/ui/button";
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
import { MOBILE_NAV_ITEMS, AppRoutes } from "@/shared/config/routes";

const NAVBAR_ITEMS: Item[] = MOBILE_NAV_ITEMS.map((item) => ({
  ...item,
  icon: item.icon || getIconForRoute(item.href),
}));

// Helper function to get icon for route
function getIconForRoute(route: string) {
  switch (route) {
    case AppRoutes.CATALOG:
      return <CatalogIcon />;
    case AppRoutes.FAVORITES:
      return <HeartIcon />;
    case AppRoutes.CHAT:
      return <MessageIcon />;
    case AppRoutes.PROFILE:
      return <Smile />;
    case AppRoutes.ORDERS:
      return <CartIcon />;
    default:
      return null;
  }
}

const topNavbarStyles = tv({
  slots: {
    catalogButton: "hidden lg:block",
    profile: "hidden lg:block",
    favorite: "hidden lg:block",
    cart: "hidden lg:block",
  },
});

const { catalogButton, profile, favorite, cart } = topNavbarStyles();

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
      <NavbarUi.Root>
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
            <Button style={{ padding: "12px 20px" }}>Вхід | Реєстрація</Button>
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
    <SmartLink href={AppRoutes.HOME}>
      <picture>
        <source srcSet={logoMDHorizontal.src} media="(min-width: 1024px)" />
        <img src={logoXSVertical.src} alt="Logo" loading="eager" />
      </picture>
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
    <SmartLink href={AppRoutes.CATALOG}>
      <Button style={{ padding: "12px 20px" }} color="dark">
        <CatalogIcon width={18} height={18} /> Каталог
      </Button>
    </SmartLink>
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
