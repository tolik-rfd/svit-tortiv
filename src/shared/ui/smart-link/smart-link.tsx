"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { forwardRef } from "react";

interface SmartLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  allowSamePathNavigation?: boolean;
}

export const SmartLink: React.FC<SmartLinkProps> = forwardRef(
  ({ href, children, className, allowSamePathNavigation = false, ...rest }) => {
    const pathname = usePathname();
    const isSamePath = typeof href === "string" && pathname === href;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!allowSamePathNavigation && isSamePath) {
        e.preventDefault();
      }
    };

    return (
      <Link href={href} onClick={handleClick} className={className} {...rest}>
        {children}
      </Link>
    );
  },
);
