import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { GoogleIcon } from '../../assets/icons/GoogleIcon';
import { ViewAllIcon } from '../../assets/icons/ViewAllIcon';
import { CatalogIcon } from '../../assets/icons/CatalogIcon';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'default',
		variantColor: 'orange',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outlined-primary',
        'outlined-secondary',
        'google',
        'link',
        'link-enter',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'link', 'md', 'lg', 'full'],
    },
    variantColor: {
      control: 'select',
      options: ['default', 'orange', 'gray', 'white', 'whiteToDark', 'dark'],
    },
    asChild: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className='flex gap-4 flex-wrap'>
      <Button {...args}>default</Button>

      <Button {...args} size='lg'>
        default lg
      </Button>

      <Button {...args} size='sm'>
        default sm
      </Button>

      <Button {...args} variant='outlined-primary' variantColor='white'>
        outlined-primary
      </Button>

      <Button {...args} variant='outlined-secondary' variantColor='whiteToDark'>
        outlined-secondary
      </Button>

      <Button {...args} variantColor='gray'>
        Gray
      </Button>

      <Button {...args} variantColor='dark'>
        Dark
      </Button>

      <Button {...args} variant='link-enter' variantColor='gray' size='xs'>
        <span className="relative after:content-[''] after:absolute after:bottom-0 after:h-[1px] after:w-[130%] after:bg-current after:left-1/2 after:-translate-x-1/2">
          вхід
        </span>
      </Button>

      <Button {...args} size='full'>
        Додати в кошик
      </Button>

      <Button {...args} variantColor='gray' size='full'>
        Детальніше
      </Button>

      <Button
        {...args}
        variant='google'
        variantColor='gray'
        size='md'
        startIcon={<GoogleIcon />}
      >
        Google
      </Button>

      <Button
        {...args}
        variant='link'
        variantColor='dark'
        size='link'
        startIcon={<CatalogIcon />}
      >
        Каталог
      </Button>

      <Button
        {...args}
        variantColor='default'
        size='xs'
        endIcon={<ViewAllIcon />}
      >
        Дивитися всі
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className='flex gap-4 flex-wrap items-center'>
      <Button {...args} size='default'>
        Default
      </Button>
      <Button {...args} size='xs'>
        XSmall
      </Button>
      <Button {...args} size='sm'>
        Small
      </Button>
      <Button {...args} size='link'>
        Link
      </Button>
      <Button {...args} size='md'>
        Medium
      </Button>
      <Button {...args} size='lg'>
        Large
      </Button>
    </div>
  ),
};
