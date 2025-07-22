import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Smile } from "lucide-react";
import { MobileNavbar, type Item } from "./index";
import { CatalogIcon } from "@/shared/assets/icons/catalog-icon";
import { HeartIcon } from "@/shared/assets/icons/heart-icon";
import { CartIcon } from "@/shared/assets/icons/cart-icon";
import { MessageIcon } from "@/shared/assets/icons/message-icon";
import { MOBILE_NAV_ITEMS } from "@/shared/config/routes";

const NAVBAR_ITEMS: Item[] = MOBILE_NAV_ITEMS.map((item) => ({
  ...item,
  icon: item.icon || getIconForRoute(item.href),
}));

// Helper function to get icon for route
function getIconForRoute(route: string) {
  switch (route) {
    case "/catalog":
      return <CatalogIcon />;
    case "/favorites":
      return <HeartIcon />;
    case "/chat":
      return <MessageIcon />;
    case "/profile":
      return <Smile />;
    case "/orders":
      return <CartIcon />;
    default:
      return null;
  }
}

const meta = {
  component: MobileNavbar.Root,
  args: {
    items: NAVBAR_ITEMS,
  },
} satisfies Meta<typeof MobileNavbar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args: any) => {
    return (
      <div className="bg-[#FCF7F4] py-10">
        <MobileNavbar.Root items={args.items}>
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
      </div>
    );
  },
};
