import { BaseButtonProps } from "../base-button";
import { BaseButton } from "../base-button";
import { tv, VariantProps } from "tailwind-variants";
import React from "react";

export const customButtonVariants = tv({
  base: "inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-[60px] font-manrope text-sm leading-[1.2] font-semibold whitespace-nowrap text-white uppercase transition-all outline-none disabled:pointer-events-none disabled:opacity-50",

  variants: {
    variant: {
      contained: "",
      outlined: "bg-white",
      text: "p-[5px] text-custom-dark hover:text-custom-orange",
    },

    color: {
      orange: "",
      dark: "",
      gray: "",
    },

    size: {
      xs: "px-[66px] py-[13px]",
      sm: "px-[103px] py-[16px]",
      md: "px-[103px] py-[21px] text-base",
      lg: "px-[96px] py-[24px] text-lg",
      full: "w-full py-[11.5px] text-base",
    },
  },

  compoundVariants: [
    {
      variant: "contained",
      color: "orange",
      class: "bg-custom-orange hover:bg-custom-dark active:bg-custom-dark",
    },
    {
      variant: "contained",
      color: "dark",
      class: "bg-custom-dark hover:bg-custom-orange active:bg-custom-orange",
    },
    {
      variant: "contained",
      color: "gray",
      class:
        "bg-custom-gray text-custom-dark hover:bg-custom-cofe active:bg-custom-gray",
    },

    {
      variant: "outlined",
      color: "dark",
      class:
        "border border-custom-dark text-custom-dark hover:bg-custom-dark hover:text-white active:bg-custom-dark active:text-white",
    },
    {
      variant: "outlined",
      color: "gray",
      class:
        "border border-custom-gray text-custom-dark hover:border-custom-orange active:bg-custom-orange active:text-white",
    },
    {
      variant: "outlined",
      color: "orange",
      class:
        "border border-custom-orange text-custom-dark hover:bg-custom-orange hover:text-white active:bg-custom-orange active:text-white",
    },
  ],

  defaultVariants: {
    variant: "contained",
    color: "orange",
    size: "sm",
  },
});

interface CustomButtonProps
  extends Omit<BaseButtonProps, "color">,
    VariantProps<typeof customButtonVariants> {
  children: React.ReactNode;
}

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(({ className, color, variant, size, children, ...rest }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={customButtonVariants({ color, variant, size, className })}
      {...rest}
    >
      {children}
    </BaseButton>
  );
});

CustomButton.displayName = "CustomButton";
