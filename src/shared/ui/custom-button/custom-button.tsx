import { FC } from "react";
import { BaseButtonProps } from "../base-button";
import styles from "./custom-button.module.css";
import { cn } from "@/shared/lib/utils";
import { BaseButton } from "../base-button";

interface CustomButtonProps extends BaseButtonProps {
  variant?: "contained" | "outlined" | "text";
  size?: "xs" | "sm" | "md" | "lg" | "full";
  color?: "orange" | "dark" | "gray";
}

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const {
    variant = "contained",
    size = "sm",
    color = "orange",
    children,
    className,
    ...rest
  } = props;

  return (
    <BaseButton
      className={cn(
        styles.base,
        styles[variant],
        styles[`size-${size}`],
        styles[`color-${color}`],
        className,
      )}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
