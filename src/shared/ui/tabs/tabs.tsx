"use client";

import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";

import { cn } from "@/shared/lib/utils";
import { createContext } from "@/shared/hooks/context";
import { VariantProps, cva } from "class-variance-authority";

//////////////////////////////////////////////////////////////////////////////////////////////
type TabsContextValue = Pick<TabsProps, "variant">;

const [TabsContextProvider, useTabsContext] = createContext<TabsContextValue>({
  strict: true,
  name: "TabsContext",
  errorMessage:
    "useTabsContext: `context` is undefined. Seems you forgot to wrap tabs components in `<Tabs />`",
});

////////////////////////////////////////////////////////////////////////////////////

interface TabsProps extends ComponentPropsWithoutRef<typeof Root> {
  variant?: "primary" | "secondary";
}

const Tabs = forwardRef<ComponentRef<typeof Root>, TabsProps>((props, ref) => {
  const { variant = "primary", ...rest } = props;
  const context = { variant };

  return (
    <TabsContextProvider value={context}>
      <Root ref={ref} {...rest} />
    </TabsContextProvider>
  );
});
Tabs.displayName = List.displayName;

////////////////////////////////////////////////////////////////////////////////////

const tabsListVariants = cva("inline-flex leading-none", {
  variants: {
    variant: {
      primary: "bg-custom-cofe rounded-custom-50 p-1",
      secondary: "p-2 gap-6",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TabsListProps
  extends ComponentPropsWithoutRef<typeof List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = forwardRef<ComponentRef<typeof List>, TabsListProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const { variant } = useTabsContext();

    return (
      <List
        ref={ref}
        className={cn(tabsListVariants({ variant, className }))}
        {...rest}
      />
    );
  }
);
TabsList.displayName = List.displayName;

////////////////////////////////////////////////////////////////////////////////////
const tabsTriggerVariants = cva(
  "inline-flex  whitespace-nowrap uppercase transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-custom-80 px-10 py-custom-18 text-xl font-normal text-dark  bg-custom-cofe  data-[state=active]:bg-dark data-[state=active]:text-white ",
        secondary:
          "text-custom-light-gray text-2xl font-medium data-[state=active]:text-black ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface TabsTriggerProps
  extends ComponentPropsWithoutRef<typeof Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = forwardRef<ComponentRef<typeof Trigger>, TabsTriggerProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const { variant } = useTabsContext();

    return (
      <Trigger
        ref={ref}
        className={cn(tabsTriggerVariants({ variant, className }))}
        {...rest}
      />
    );
  }
);
TabsTrigger.displayName = Trigger.displayName;

////////////////////////////////////////////////////////////////////////////////////

const tabsContentVariants = cva("", {
  variants: {
    variant: {
      primary:
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      secondary: "text-xl p-2 mt-[10px] font-normal",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const TabsContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>((props, ref) => {
  const { className, ...rest } = props;
  const { variant } = useTabsContext();

  return (
    <Content
      ref={ref}
      className={cn(tabsContentVariants({ variant, className }))}
      {...rest}
    />
  );
});
TabsContent.displayName = Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
