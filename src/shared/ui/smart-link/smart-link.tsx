"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SmartLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  allowSamePathNavigation?: boolean;
}

<<<<<<< HEAD
export const SmartLink: React.FC<SmartLinkProps> = forwardRef(
  (
    { href, children, className, allowSamePathNavigation = false, ...rest },
    ref,
  ) => {
    const pathname = usePathname();
    const isSamePath = typeof href === "string" && pathname === href;
=======
export const SmartLink: React.FC<SmartLinkProps> = ({
  href,
  children,
  className,
  allowSamePathNavigation = false,
  ...rest
}) => {
  const pathname = usePathname();
  const isSamePath = typeof href === "string" && pathname === href;
>>>>>>> 22b4e9548fe9df1537abd1d29083a72e515e4f9a

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!allowSamePathNavigation && isSamePath) {
      e.preventDefault();
    }
  };

<<<<<<< HEAD
    return (
      <Link
        ref={ref}
        href={href}
        onClick={handleClick}
        className={className}
        {...rest}
      >
        {children}
      </Link>
    );
  },
);

SmartLink.displayName = "SmartLink";
=======
  return (
    <Link href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </Link>
  );
};
>>>>>>> 22b4e9548fe9df1537abd1d29083a72e515e4f9a
