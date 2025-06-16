import { ComponentProps, FC } from "react";
import { cn } from "@/shared/lib/utils";
import { tv, VariantProps } from "tailwind-variants";

const coloredFrameVariants = tv({
  base: "relative",
  variants: {
    backgroundColor: {
      tiffany: "bg-custom-tiffany",
      peach: "bg-custom-peach",
      yellow: "bg-custom-yellow",
      cofe: "bg-custom-cofe",
      light: "bg-custom-light",
      lilac: "bg-custom-lilac",
      chocolate: "bg-custom-chocolate",
    },
    size: {
      xs: "h-[8.3rem] w-[12.5rem]",
      sm: "h-[14.125rem] w-[15.625rem]",
      md: "h-[15.375rem] w-[21.5rem]",
      lg: "h-[18.875rem] w-[27.625rem]",
      xl: "h-[33.25rem] w-[34.25rem]",
    },
    rounded: {
      xs: "rounded-custom-24",
      sm: "rounded-custom-32",
      md: "rounded-custom-80",
    },
  },
  defaultVariants: {
    backgroundColor: "tiffany",
    size: "md",
    rounded: "sm",
  },
});

export interface ColoredFrameProps
  extends ComponentProps<"div">,
    VariantProps<typeof coloredFrameVariants> {}

export const ColoredFrame: FC<ColoredFrameProps> = (props) => {
  const { backgroundColor, size, rounded, children, className } = props;
  return (
    <div
      className={coloredFrameVariants({
        backgroundColor,
        size,
        rounded,
        className,
      })}
    >
      {children}
    </div>
  );
};
