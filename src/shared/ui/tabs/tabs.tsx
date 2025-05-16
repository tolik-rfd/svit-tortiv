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
          "inline-flex bg-custom-cofe rounded-custom-50 p-1 leading-custom-16",
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
          "inline-flex items-center justify-center whitespace-nowrap transition-all rounded-custom-80 px-10 py-5 text-xl text-dark uppercase bg-custom-cofe disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-dark data-[state=active]:text-white data-[state=active]:shadow-sm ",
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
