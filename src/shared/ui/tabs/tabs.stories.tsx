import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
  args: {
    defaultValue: "Кондитерам",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="Кондитерам">Кондитерам</TabsTrigger>
        <TabsTrigger value="Замовникам">Замовникам</TabsTrigger>
      </TabsList>
      <TabsContent value="Кондитерам">
        <p>This is the Кондитерам tab content.</p>
      </TabsContent>
      <TabsContent value="Замовникам">
        <p>This is the Замовникам tab content.</p>
      </TabsContent>
    </Tabs>
  ),
};
