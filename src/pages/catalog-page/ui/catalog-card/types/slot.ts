import { ComponentPropsWithoutRef } from "react";

export interface SlotType extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}
