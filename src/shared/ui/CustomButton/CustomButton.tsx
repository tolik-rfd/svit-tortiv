import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'orange' | 'gray';
};

export const CustomButton = ({ children, className, variant }: Props) => {
  const base =
    'uppercase rounded-[60px] py-[11.5px] min-w-[235px] font-manrope leading-[1.2] transition-colors duration-300';
  const styles = {
    orange: 'bg-custom-orange text-white hover:bg-custom-orange-hover',
    gray: 'bg-custom-gray text-dark hover:bg-custom-gray-hover',
  };

  return (
    <button className={`${base} ${styles[variant]} ${className ?? ''}`}>
      {children}
    </button>
  );
};
