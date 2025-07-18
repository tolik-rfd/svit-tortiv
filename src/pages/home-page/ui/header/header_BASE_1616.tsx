import { FC } from "react";
import { TopNavbar } from "../navbar";
import { BottomNavbar } from "../bottom-navbar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const {} = props;
  return (
    <header style={{ display: "unset" }}>
      <TopNavbar />
      <BottomNavbar />
    </header>
  );
};
