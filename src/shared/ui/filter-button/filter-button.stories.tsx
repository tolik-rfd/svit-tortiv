import { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./filter-button";

const meta: Meta<typeof FilterButton> = {
  component: FilterButton,
  tags: ["autodocs"],
  args: {
    color: "coral",
  },
  argTypes: {
    color: {
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Default: Story = {
  render: (args) => <FilterButton {...args}>400 - 500 ₴/кг</FilterButton>,
};
