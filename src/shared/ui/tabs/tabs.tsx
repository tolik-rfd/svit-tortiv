"use client";

import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";

import { cn } from "@/shared/lib/utils";

const Tabs = Root;

interface TabsListProps extends ComponentPropsWithoutRef<typeof List> {}

const TabsList = forwardRef<ComponentRef<typeof List>, TabsListProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <List
        ref={ref}
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          className
        )}
        {...rest}
      />
    );
  }
);
TabsList.displayName = List.displayName;

interface TabsTriggerProps extends ComponentPropsWithoutRef<typeof Trigger> {}

const TabsTrigger = forwardRef<ComponentRef<typeof Trigger>, TabsTriggerProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <Trigger
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          className
        )}
        {...rest}
      />
    );
  }
);
TabsTrigger.displayName = Trigger.displayName;

const TabsContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>((props, ref) => {
  const { className, ...rest } = props;
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
