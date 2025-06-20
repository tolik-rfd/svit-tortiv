import { FC } from "react";
import { MainNavbar } from "../navbar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const {} = props;
  return (
    <header style={{ display: "unset" }}>
      <MainNavbar />
    </header>
  );
};
