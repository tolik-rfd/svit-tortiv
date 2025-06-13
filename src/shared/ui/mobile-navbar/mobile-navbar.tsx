"use client";

import { createContext } from "@/shared/hooks/context";
import { List, Root, Trigger } from "@radix-ui/react-tabs";
import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { useMobileNavbar } from "./use-mobile-navbar";

///////////////////////////////////////////////////////////
const styles = tv({
  slots: {
    navbar:
      "flex h-16 w-full items-center rounded-[0.375rem] bg-custom-cofe px-3",
    panel: "relative flex w-full",
    trigger:
      " relative flex h-11 w-15.5 flex-auto cursor-pointer items-end justify-center text-xs font-medium uppercase ",
    slider:
      "invisible absolute z-1 flex h-13.5 w-13.5 -translate-x-1/2 items-center justify-center rounded-[0.938rem] bg-custom-background opacity-0 duration-300 ease-in-out before:absolute before:top-[1.688rem] before:right-[-0.438rem] before:h-[0.938rem] before:w-[0.438rem]  before:rounded-tl-[0.625rem] before:bg-custom-cofe before:shadow-[-1px_-4px_#FCF7F4] before:content-[''] after:absolute after:top-[1.688rem] after:left-[-0.438rem] after:h-[0.938rem] after:w-[0.438rem]  after:rounded-tr-[0.625rem] after:bg-custom-cofe after:shadow-[1px_-4px_#FCF7F4] after:content-['']",
    sliderItem: "h-11 w-11 rounded-[1rem] bg-custom-dark ",
    icon: "text-custbg-custom-dark absolute top-1/2 left-1/2  z-2 -translate-x-1/2  -translate-y-1/2 duration-500 ease-in-out",
    text: "invisible absolute -bottom-2.5 left-1/2 -translate-x-1/2 opacity-0 duration-500 ease-in-out",
  },
  variants: {
    isActive: {
      true: {
        slider: "visible bottom-[1.688rem] opacity-100",
        text: "visible bottom-0 opacity-100",
        icon: "-top-2.5 text-white",
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

const { navbar, panel, trigger, slider, sliderItem, icon, text } = styles();

////////////////////////////////////////////////////////////////////
type MobileNavbarContextValue = Omit<MobileNavbarProps, "isActive"> &
  MobileNavbarState;

interface MobileNavbarState {
  currentTabValue: string;
  setCurrentTabValue: (value: string) => void;
  sliderStyles: CSSProperties | undefined;
  onValueChange: (value: string) => void;
}

const [MobileNavbarContextProvider, useMobileNavbarContext] =
  createContext<MobileNavbarContextValue>({
    strict: true,
    name: "MobileNavbarContext",
    errorMessage: "useMobileNavbarContext: `context` is undefined...",
  });

//////////////////////////////////////////////////////////////////////////

type StylesVariants = VariantProps<typeof styles>;

interface MobileNavbarItem {
  value: string;
  label: string;
  icon: ReactNode;
  href?: string;
}

interface MobileNavbarProps
  extends ComponentPropsWithoutRef<typeof Root>,
    StylesVariants {
  items: MobileNavbarItem[];
}

const MobileNavbar: FC<MobileNavbarProps> = (props) => {
  const { items, children, ...rest } = props;
  const { currentTabValue, setCurrentTabValue, sliderStyles, onValueChange } =
    useMobileNavbar({ items });

  const context: MobileNavbarContextValue = {
    items,
    currentTabValue,
    setCurrentTabValue,
    sliderStyles,
    onValueChange,
  };

  return (
    <MobileNavbarContextProvider value={context}>
      <Root className={navbar()} onValueChange={onValueChange} {...rest}>
        {children}
      </Root>
    </MobileNavbarContextProvider>
  );
};

///////////////////////////////////////////////////
interface MobileNavbarListProps
  extends Omit<ComponentPropsWithoutRef<typeof List>, "children"> {
  children: (item: MobileNavbarItem, index: number) => ReactNode;
}

const MobileNavbarList: FC<MobileNavbarListProps> = (props) => {
  const { children } = props;
  const { items } = useMobileNavbarContext();
  return (
    <List className={panel()}>
      <Slider />
      {items.map(children as any)}
    </List>
  );
};

//////////////////////////////////////////////////
const Slider = () => {
  const { currentTabValue, sliderStyles } = useMobileNavbarContext();
  return (
    <div
      className={slider({ isActive: Boolean(currentTabValue) })}
      style={sliderStyles}
    >
      <div className={sliderItem()}></div>
    </div>
  );
};

//////////////////////////////////////////////////

interface MobileNavbarTriggerProps
  extends ComponentPropsWithoutRef<typeof Trigger> {
  value: string;
}

const MobileNavbarTrigger: FC<MobileNavbarTriggerProps> = (props) => {
  const { children, value, ...rest } = props;
  return (
    <Trigger className={trigger()} value={value} {...rest}>
      {children}
    </Trigger>
  );
};

///////////////////////////////////////////////////

interface MobileNavbarIconProps {
  icon: ReactNode;
  value: string;
}

const MobileNavbarIcon: FC<MobileNavbarIconProps> = (props) => {
  const { icon: Icon, value } = props;
  const { currentTabValue } = useMobileNavbarContext();

  const isActive = currentTabValue === value;

  return (
    <div
      className={icon({
        isActive,
      })}
    >
      {Icon}
    </div>
  );
};

////////////////////////////////////////////
interface MobileNavbarLabelProps {
  label: string;
  value: string;
}

const MobileNavbarLabel: FC<MobileNavbarLabelProps> = (props) => {
  const { label, value } = props;
  const { currentTabValue } = useMobileNavbarContext();

  return (
    <div className={text({ isActive: currentTabValue === value })}>{label}</div>
  );
};

export {
  MobileNavbar,
  MobileNavbarList,
  MobileNavbarTrigger,
  MobileNavbarIcon,
  MobileNavbarLabel,
  type MobileNavbarState,
  type MobileNavbarProps,
  type MobileNavbarListProps,
  type MobileNavbarTriggerProps,
  type MobileNavbarIconProps,
  type MobileNavbarLabelProps,
  type MobileNavbarItem,
};
