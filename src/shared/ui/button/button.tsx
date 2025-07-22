import { BaseButtonProps } from "../base-button";
import { BaseButton } from "../base-button";
import { tv, VariantProps } from "tailwind-variants";
import React from "react";

export const buttonVariants = tv({
  base: "inline-flex cursor-pointer items-center justify-center gap-[0.625rem] rounded-[3.75rem] font-manrope text-sm leading-[1.2] font-semibold whitespace-nowrap text-white uppercase transition-all outline-none disabled:pointer-events-none disabled:opacity-50",

  variants: {
    variant: {
      contained: "",
      outlined: "bg-white",
      text: "p-[0.3125rem] text-custom-dark hover:text-custom-orange",
    },

    color: {
      orange: "",
      dark: "",
      gray: "",
    },

    size: {
      xs: "px-[4.125rem] py-[0.8125rem]",
      sm: "px-[6.4375rem] py-[1rem]",
      md: "px-[6.4375rem] py-[1.3125rem] text-base",
      lg: "px-[6rem] py-[1.5rem] text-lg",
      full: "w-full py-[0.71875rem] text-base",
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

interface buttonProps
  extends Omit<BaseButtonProps, "color">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, color, variant, size, children, ...rest }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={buttonVariants({ color, variant, size, className })}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  },
);

Button.displayName = "Button";
