import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import React from "react";

export const NavTabs = () => {
  return (
    <Tabs defaultValue="Кондитерам">
      <TabsList>
        <TabsTrigger value="Кондитерам">Кондитерам</TabsTrigger>
        <TabsTrigger value="Замовникам">Замовникам</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
