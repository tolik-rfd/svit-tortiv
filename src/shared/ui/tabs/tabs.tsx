"use client";

import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";

import { createContext } from "@/shared/hooks/context";
import { VariantProps, tv } from "tailwind-variants";

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

const tabsListVariants = tv({
  base: "inline-flex leading-none",
  variants: {
    variant: {
      primary: "rounded-custom-50 bg-custom-cofe p-1",
      secondary: "gap-6 p-2 sm:gap-6 sm:p-custom-10",
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
        className={tabsListVariants({ variant, className })}
        {...rest}
      />
    );
  },
);
TabsList.displayName = List.displayName;

////////////////////////////////////////////////////////////////////////////////////
const tabsTriggerVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50",

  variants: {
    variant: {
      primary:
        "text-dark rounded-custom-80 bg-custom-cofe px-custom-18 py-4 text-base font-normal uppercase data-[state=active]:bg-custom-dark data-[state=active]:text-white sm:px-10 sm:py-custom-18 sm:text-xl",
      secondary:
        "text-base font-medium text-custom-light-gray data-[state=active]:text-black sm:text-2xl ",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

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
        className={tabsTriggerVariants({ variant, className })}
        {...rest}
      />
    );
  },
);
TabsTrigger.displayName = Trigger.displayName;

////////////////////////////////////////////////////////////////////////////////////

const tabsContentVariants = tv({
  base: "",
  variants: {
    variant: {
      primary:
        "mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
      secondary: "mt-custom-10 px-2 text-sm font-light sm:text-xl",
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
      className={tabsContentVariants({ variant, className })}
      {...rest}
    />
  );
});
TabsContent.displayName = Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
