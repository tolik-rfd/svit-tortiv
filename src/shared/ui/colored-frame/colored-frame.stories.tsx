import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import ManWithCakes from "@/shared/assets/images/man-with-cakes.png";

import { ColoredFrame } from "./colored-frame";

const meta: Meta<typeof ColoredFrame> = {
  component: ColoredFrame,
  tags: ["autodocs"],
  args: {
    size: "xs",
    backgroundColor: "tiffany",
    rounded: "xs",
  },
  argTypes: {
    size: { control: "radio", options: ["xs", "sm", "md", "lg", "xl"] },
    backgroundColor: {
      control: "select",
      options: [
        "tiffany",
        "peach",
        "yellow",
        "cofe",
        "light",
        "lilac",
        "chocolate",
      ],
    },
    rounded: { control: "radio", options: ["xs", "sm", "md"] },
  },
};

export default meta;

type Story = StoryObj<typeof ColoredFrame>;

export const Default: Story = {
  render: (args) => (
    <div className="flex gap-4 flex-wrap h-[800px] w-[800px] p-20">
      <ColoredFrame {...args} />
    </div>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <div className="flex gap-4 flex-wrap h-[800px] w-[800px] p-20">
      <ColoredFrame {...args} size="xl" rounded="xs" backgroundColor="yellow">
        <Image
          src={ManWithCakes}
          alt="Man with Cakes"
          width={507}
          height={591}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
      </ColoredFrame>
    </div>
  ),
};
