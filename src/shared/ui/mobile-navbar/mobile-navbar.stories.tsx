import type { Meta, StoryObj } from "@storybook/react";
import {
  MobileNavbar,
  MobileNavbarIcon,
  MobileNavbarItem,
  MobileNavbarLabel,
  MobileNavbarList,
  MobileNavbarTrigger,
} from "./mobile-navbar";
import { CatalogIcon } from "@/shared/assets/icons/catalog-icon";
import { HeartIcon } from "@/shared/assets/icons/heart-icon";
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
    value: "orders",
    label: "Кошик",
    href: "/orders",
    icon: <CatalogIcon />,
  },
  {
    value: "profile",
    label: "Профіль",
    href: "/profile",
    icon: <CatalogIcon />,
  },
  {
    value: "chat",
    label: "Чат",
    href: "/chat",
    icon: <CatalogIcon />,
  },
];
const meta = {
  component: MobileNavbar,
  args: {
    items: NAVBAR_ITEMS,
  },
} satisfies Meta<typeof MobileNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return (
      <div className="bg-[#FCF7F4] py-10">
        <MobileNavbar items={NAVBAR_ITEMS}>
          <MobileNavbarList>
            {({ value, label, icon }) => {
              return (
                <MobileNavbarTrigger value={value} key={value}>
                  <MobileNavbarIcon icon={icon} value={value} />
                  <MobileNavbarLabel label={label} value={value} />
                </MobileNavbarTrigger>
              );
            }}
          </MobileNavbarList>
        </MobileNavbar>
      </div>
    );
  },
};
