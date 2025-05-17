"use client";

import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";

import { cn } from "@/shared/lib/utils";
import { createContext } from "@/shared/hooks/context";

//////////////////////////////////////////////////////////////////////////////////////////////
type TabsContextValue = Pick<TabsProps, "variant">;

const [TabsContextProvider, useTabsContext] = createContext<TabsContextValue>({
  strict: true,
  name: "TabsContext",
  errorMessage:
    "useTabsContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
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

interface TabsListProps extends ComponentPropsWithoutRef<typeof List> {}

const TabsList = forwardRef<ComponentRef<typeof List>, TabsListProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const { variant } = useTabsContext();
    console.log(variant);

    return (
      <List
        ref={ref}
        className={cn(
          "inline-flex bg-custom-cofe rounded-custom-50 p-1 leading-custom-16",
          className
        )}
        {...rest}
      />
    );
  }
);
TabsList.displayName = List.displayName;

////////////////////////////////////////////////////////////////////////////////////

interface TabsTriggerProps extends ComponentPropsWithoutRef<typeof Trigger> {}

const TabsTrigger = forwardRef<ComponentRef<typeof Trigger>, TabsTriggerProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const { variant } = useTabsContext();

    return (
      <Trigger
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap transition-all rounded-custom-80 px-10 py-5 text-xl text-dark uppercase bg-custom-cofe disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-dark data-[state=active]:text-white data-[state=active]:shadow-sm ",
          className
        )}
        {...rest}
      />
    );
  }
);
TabsTrigger.displayName = Trigger.displayName;

////////////////////////////////////////////////////////////////////////////////////

const TabsContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>((props, ref) => {
  const { className, ...rest } = props;
  const { variant } = useTabsContext();

  return (
    <Content
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...rest}
    />
  );
});
TabsContent.displayName = Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
