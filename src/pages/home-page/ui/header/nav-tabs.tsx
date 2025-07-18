"use client";
import { SmartLink } from "@/shared/ui/smart-link";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { AppRoutes, RouteNames, MAIN_NAV_ITEMS } from "@/shared/config/routes";
import React from "react";
import { usePathname } from "next/navigation";

export const NavTabs = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Tabs value={pathname || AppRoutes.HOME}>
      <TabsList>
        {MAIN_NAV_ITEMS.map((item) => (
          <TabsTrigger key={item.value} value={item.value} asChild>
            <SmartLink href={item.href}>{item.label}</SmartLink>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
