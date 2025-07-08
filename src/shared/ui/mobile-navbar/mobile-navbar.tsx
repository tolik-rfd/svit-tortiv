"use client";

import { createContext } from "@/shared/hooks/context";
import {
  List as ListTabs,
  Root as RootTabs,
  Trigger as TriggerTabs,
} from "@radix-ui/react-tabs";
import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { useMobileNavbar } from "./use-mobile-navbar";

///////////////////////////////////////////////////////////
const styles = tv({
  slots: {
    navbar:
      "flex h-16 w-full items-center overflow-x-clip rounded-[0.375rem] bg-custom-cofe px-3",
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
type ContextValue = State;

interface State {
  currentTabValue: string;
  setCurrentTabValue: (value: string) => void;
  sliderStyles: CSSProperties | undefined;
  onValueChange: (value: string) => void;
}

const [MobileNavbarContextProvider, useMobileNavbarContext] =
  createContext<ContextValue>({
    strict: true,
    name: "MobileNavbarContext",
    errorMessage: "useMobileNavbarContext: `context` is undefined...",
  });

//////////////////////////////////////////////////////////////////////////

type StylesVariants = VariantProps<typeof styles>;

interface Item {
  value: string;
  label: string;
  icon: ReactNode;
  href?: string;
}

interface RootProps
  extends ComponentPropsWithoutRef<typeof RootTabs>,
    StylesVariants {
  items: Item[];
}

const Root: FC<RootProps> = (props) => {
  const { items, children, className, ...rest } = props;
  const { currentTabValue, setCurrentTabValue, sliderStyles, onValueChange } =
    useMobileNavbar({ items });

  const context: ContextValue = {
    currentTabValue,
    setCurrentTabValue,
    sliderStyles,
    onValueChange,
  };

  return (
    <MobileNavbarContextProvider value={context}>
      <RootTabs
        className={navbar({ className })}
        onValueChange={onValueChange}
        {...rest}
      >
        {children}
      </RootTabs>
    </MobileNavbarContextProvider>
  );
};

///////////////////////////////////////////////////
interface ListProps extends ComponentPropsWithoutRef<typeof ListTabs> {}

const List: FC<ListProps> = (props) => {
  const { children, className } = props;

  return (
    <ListTabs className={panel({ className })}>
      <Slider />
      {children}
    </ListTabs>
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

interface TriggerProps extends ComponentPropsWithoutRef<typeof TriggerTabs> {
  value: string;
}

const Trigger: FC<TriggerProps> = (props) => {
  const { children, value, className, ...rest } = props;
  return (
    <TriggerTabs className={trigger({ className })} value={value} {...rest}>
      {children}
    </TriggerTabs>
  );
};

///////////////////////////////////////////////////

interface IconProps {
  icon: ReactNode;
  value: string;
}

const Icon: FC<IconProps> = (props) => {
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
interface LabelProps {
  label: string;
  value: string;
}

const Label: FC<LabelProps> = (props) => {
  const { label, value } = props;
  const { currentTabValue } = useMobileNavbarContext();

  return (
    <div className={text({ isActive: currentTabValue === value })}>{label}</div>
  );
};

export {
  Root,
  List,
  Trigger,
  Icon,
  Label,
  type State,
  type RootProps,
  type ListProps,
  type TriggerProps,
  type IconProps,
  type LabelProps,
  type Item,
};
