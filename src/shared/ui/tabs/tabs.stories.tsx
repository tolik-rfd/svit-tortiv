import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="Кондитерам">
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

export const Secondary: Story = {
  render: (args) => (
    <Tabs {...args} variant="secondary" defaultValue="Алергії">
      <TabsList>
        <TabsTrigger value="Опис">Опис</TabsTrigger>
        <TabsTrigger value="Алергії">Алергії</TabsTrigger>
        <TabsTrigger value="Про Кондитера">Про Кондитера</TabsTrigger>
      </TabsList>
      <TabsContent value="Опис">
        <p>Lorem ipsum dolor sit,</p>
      </TabsContent>
      <TabsContent value="Алергії">
        <p>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </TabsContent>
      <TabsContent value="Про Кондитера">
        <p>This is the Про кондитера tab content.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const NavTabs: Story = {
  render: (args) => (
    <div className="flex gap-6 flex-col">
      <Tabs {...args} defaultValue="Кондитерам">
        <TabsList>
          <TabsTrigger value="Кондитерам">Кондитерам</TabsTrigger>
          <TabsTrigger value="Замовникам">Замовникам</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs {...args} defaultValue="Нові замовлення">
        <TabsList>
          <TabsTrigger value="Нові замовлення">Нові замовлення</TabsTrigger>
          <TabsTrigger value="Виконано">Виконано</TabsTrigger>
          <TabsTrigger value="Відмовлено">Відмовлено</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
};
