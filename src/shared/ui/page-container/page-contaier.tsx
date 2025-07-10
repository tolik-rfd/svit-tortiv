import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

interface PageContainerProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export const PageContainer: FC<PageContainerProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("px-3 lg:px-8", className)} {...rest}>
      {children}
    </div>
  );
};
