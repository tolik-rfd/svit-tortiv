import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import { BaseButton, type BaseButtonProps } from "../base-button";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center p-1.5 rounded-[50%] transition-all disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:bg-custom-gray",
        solid: "hover:opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

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
        className={cn(iconButtonVariants({ variant }), className)}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  }
);

IconButton.displayName = "IconButton";
