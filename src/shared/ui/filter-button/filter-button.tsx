import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import { BaseButton, type BaseButtonProps } from "../base-button";
import { CloseIcon } from "@/shared/assets/icons/close-icon";

const filterButtonVariants = cva(
  "inline-flex items-center justify-center px-3 py-2 rounded-[100px] transition-all disabled:opacity-50 border gap-3 text-sm h-[40px]",
  {
    variants: {
      color: {
        coral: "border-custom-coral text-custom-coral hover:bg-[#f8e3df]",
        ocean: "border-custom-ocean text-custom-ocean hover:bg-custom-tiffany",
      },
    },

    defaultVariants: {
      color: "coral",
    },
  }
);

export interface FilterButtonProps
  extends Omit<BaseButtonProps, "color">,
    VariantProps<typeof filterButtonVariants> {
  children: React.ReactNode;
}

export const FilterButton = React.forwardRef<
  HTMLButtonElement,
  FilterButtonProps
>(({ className, color, children, ...rest }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(filterButtonVariants({ color }), className)}
      {...rest}
    >
      {children}
      <CloseIcon />
    </BaseButton>
  );
});

FilterButton.displayName = "FilterButton";
