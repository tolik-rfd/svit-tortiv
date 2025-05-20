import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import Image from 'next/image';

const meta: Meta<typeof Button> = {
  title: 'UI Components/Shadcn Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'orange',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
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
      <Button {...args} variant='orange'>
        Дивитися всі
      </Button>
      <Button {...args} variant='orange' size='lg'>
        Дивитися всі
      </Button>
      <Button {...args} variant='orange' size='sm'>
        Дивитися всі
      </Button>
      <Button {...args} variant='white'>
        Дивитися всі
      </Button>
      <Button {...args} variant='gray'>
        Дивитися всі
      </Button>
      <Button {...args} variant='google' size='md'>
        <Image src='/icons/google.svg' width={30} height={30} alt='Google' />
        Google
      </Button>
      <Button {...args} variant='link' size='sm'>
        Дивитися всі
        <Image
          src='/icons/view-all.svg'
          width={17}
          height={17}
          alt='Google'
          className='fill-current'
        />
      </Button>
      <Button {...args} variant='link-exit' size='xs'>
        <span className="relative after:content-[''] after:absolute after:bottom-0 after:h-[1px] after:w-[120%] after:bg-current after:left-1/2 after:-translate-x-1/2">
          вхід
        </span>
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className='flex gap-4 flex-wrap items-center'>
      <Button {...args} size='sm'>
        Small
      </Button>
      <Button {...args} size='default'>
        Default
      </Button>
      <Button {...args} size='lg'>
        Large
      </Button>
      <Button {...args} size='icon' aria-label='Icon Button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='size-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 12h14M12 5l7 7-7 7'
          />
        </svg>
      </Button>
    </div>
  ),
};
