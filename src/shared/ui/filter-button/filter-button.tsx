import * as React from "react";
import { BaseButton, type BaseButtonProps } from "../base-button";
import { CloseIcon } from "@/shared/assets/icons/close-icon";
import { VariantProps, tv } from "tailwind-variants";

const filterButtonVariants = tv({
  base: "inline-flex h-[2.5rem] cursor-pointer items-center justify-center gap-3 rounded-[6.25rem] border px-3 py-2 text-sm transition-all disabled:opacity-50",

  variants: {
    color: {
      coral: "border-custom-coral text-custom-coral hover:bg-[#f8e3df]",
      ocean: "border-custom-ocean text-custom-ocean hover:bg-custom-tiffany",
    },
  },

  defaultVariants: {
    color: "coral",
  },
});

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
      className={filterButtonVariants({ color, className })}
      {...rest}
    >
      {children}
      <CloseIcon />
    </BaseButton>
  );
});

FilterButton.displayName = "FilterButton";
