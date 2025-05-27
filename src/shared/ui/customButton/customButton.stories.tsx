import { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './customButton';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  tags: ['autodocs'],
  args: {
    children: 'Дивиться всі',
    variant: 'contained',
    color: 'orange',
    size: 'xs',
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  render: (args) => <CustomButton {...args} />,
};
