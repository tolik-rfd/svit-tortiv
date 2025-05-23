import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2.5 uppercase rounded-[60px] font-manrope leading-[1.2] whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: '',
        'outlined-primary': 'border border-gray hover:border-custom-orange',
        'outlined-secondary': 'border border-dark',
        google: 'capitalize',
        link: 'font-bold',
        'link-enter': 'active:bg-none',
      },
      size: {
        default: 'h-[52px] w-[324px]',
        xs: 'h-[39px] px-[30px]',
        sm: 'h-[42px] w-[235px]',
        link: 'h-[49px] px-[20px]',
        md: 'h-[62px] w-[324px] text-lg font-medium',
        lg: 'h-[70px] w-[324px] text-lg',
        full: 'h-[42px] w-full',
      },
      variantColor: {
        default: 'bg-none text-dark hover:text-custom-orange',
        orange: 'bg-custom-orange text-white hover:bg-dark',
        gray: 'bg-custom-gray text-dark hover:bg-custom-cofe active:bg-custom-gray',
        white: 'bg-white text-dark',
        whiteToDark: 'bg-white text-dark hover:bg-dark hover:text-white',
        dark: 'bg-dark text-white hover:bg-custom-orange active:bg-custom-orange',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      variantColor: 'orange',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, variantColor, children, asChild = false, startIcon, endIcon, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, variantColor, className })
        )}
        ref={ref}
        {...props}
      >
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
