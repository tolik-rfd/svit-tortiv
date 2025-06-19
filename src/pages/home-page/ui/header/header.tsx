import { FC } from "react";
import { Navbar } from "../navbar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const {} = props;
  return (
    <header style={{ display: "unset" }}>
      <Navbar />
    </header>
  );
};
