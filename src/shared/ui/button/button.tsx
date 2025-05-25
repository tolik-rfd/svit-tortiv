import { ComponentProps, FC } from 'react';
import styles from './button.module.css';
import { cn } from '@/shared/lib/utils';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'orange' | 'dark' | 'gray';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = 'contained',
    size = 'sm',
    color = 'orange',
    children,
    disabled,
  } = props;

  return (
    <button
      disabled={disabled}
      className={cn(
        styles.base,
        styles[variant],
        styles[`size-${size}`],
        styles[`color-${color}`]
      )}
    >
      {children}
    </button>
  );
};
