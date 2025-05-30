import { ComponentProps, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const coloredFrameVariants = cva("relative", {
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
      xs: "w-[12.5rem] h-[8.3rem]",
      sm: "w-[15.625rem] h-[14.125rem]",
      md: "w-[21.5rem] h-[15.375rem]",
      lg: "w-[27.625rem] h-[18.875rem]",
      xl: "w-[34.25rem] h-[33.25rem]",
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
      className={cn(
        coloredFrameVariants({ backgroundColor, size, rounded, className })
      )}
    >
      {children}
    </div>
  );
};
