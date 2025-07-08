"use client";

import { ComponentProps, FC } from "react";
import { tv } from "tailwind-variants";

const navbarStyles = tv({
  slots: {
    navbar: "flex items-center justify-between px-3 py-2 text-custom-dark",
    navbarItem: "",
    actions: "flex items-center justify-between gap-8",
    actionsItem: "",
  },
});

const { navbar, navbarItem, actions, actionsItem } = navbarStyles();

interface NavbarProps extends ComponentProps<"div"> {}

const Root: FC<NavbarProps> = (props) => {
  const { children, className } = props;
  return <div className={navbar({ className })}>{children}</div>;
};

///////////////////////////////////////////////////////////////////////////////////

interface NavbarItemProps extends ComponentProps<"div"> {}

const Item: FC<NavbarItemProps> = (props) => {
  const { children, className } = props;
  return <div className={navbarItem({ className })}>{children}</div>;
};

///////////////////////////////////////////////////////////////////////////////////

interface NavbarActionsProps extends ComponentProps<"div"> {}

const Actions: FC<NavbarActionsProps> = (props) => {
  const { children, className } = props;
  return <div className={actions({ className })}>{children}</div>;
};

///////////////////////////////////////////////////////////////////////////////////

interface NavbarActionsItemProps extends ComponentProps<"div"> {}

const ActionsItem: FC<NavbarActionsItemProps> = (props) => {
  const { children, className } = props;
  return <div className={actionsItem({ className })}>{children}</div>;
};

///////////////////////////////////////////////////////////////////////////////////

export { Root, Item, Actions, ActionsItem };
