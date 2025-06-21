import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Smile } from "lucide-react";
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
import { CartIcon } from "@/shared/assets/icons/cart-icon";
import { MessageIcon } from "@/shared/assets/icons/message-icon";

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
      </div>
    );
  },
};
