import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";
import { InstagramIcon } from "@/shared/assets/icons/instagram-icon";
import { CartIcon } from "@/shared/assets/icons/cart-icon";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "solid"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => (
    <IconButton {...args}>
      <CartIcon />
    </IconButton>
  ),
};

export const Solid: Story = {
  render: (args) => (
    <IconButton {...args} variant="solid">
      <InstagramIcon />
    </IconButton>
  ),
};
