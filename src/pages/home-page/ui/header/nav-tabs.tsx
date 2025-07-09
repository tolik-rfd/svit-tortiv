import { SmartLink } from "@/shared/ui/smart-link";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { AppRoutes, RouteNames, MAIN_NAV_ITEMS } from "@/shared/config/routes";
import React from "react";

export const NavTabs = () => {
  return (
    <Tabs defaultValue={RouteNames.HOME}>
      <TabsList>
        {MAIN_NAV_ITEMS.map((item) => (
          <TabsTrigger key={item.value} value={item.label} asChild>
            <SmartLink href={item.href}>{item.label}</SmartLink>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
