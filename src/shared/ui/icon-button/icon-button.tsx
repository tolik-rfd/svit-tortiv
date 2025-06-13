import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { BaseButton, type BaseButtonProps } from "../base-button";

const iconButtonVariants = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded-[50%] p-1.5 transition-all disabled:opacity-50",

  variants: {
    variant: {
      default: "hover:bg-custom-gray",
      solid: "hover:opacity-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface IconButtonProps
  extends BaseButtonProps,
    VariantProps<typeof iconButtonVariants> {
  variant?: "default" | "solid";
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, children, ...rest }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={iconButtonVariants({ variant, className })}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  },
);

IconButton.displayName = "IconButton";
