import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2.5 uppercase rounded-[60px] font-manrope leading-[1.2] whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        orange: 'bg-custom-orange text-white hover:bg-dark',
        white:
          'bg-white text-dark border border-dark hover:bg-dark hover:text-white',
        gray: 'bg-custom-gray text-dark hover:bg-custom-cofe active:bg-custom-gray',
        google:
          'bg-custom-gray text-dark capitalize hover:bg-custom-cofe active:bg-custom-gray',
        link: 'text-dark hover:text-custom-orange',
        'link-enter': 'text-dark hover:bg-custom-cofe active:bg-none',
      },
      size: {
        default: 'h-[52px] py-[11.5px] w-[324px]',
        xs: 'h-[39px] w-[99px] px-[30px]',
        sm: 'h-[42px] w-[235px]',
        md: 'h-[62px] w-[324px] text-lg font-medium',
        lg: 'h-[70px] py-[24px] text-lg w-[324px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
