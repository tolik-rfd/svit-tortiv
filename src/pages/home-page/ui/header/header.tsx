import { FC } from "react";
import { Navbar } from "../navbar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const {} = props;
  return (
    <header>
      <Navbar />
      <div>Tabs</div>
      <div>Mobile Navbar</div>
    </header>
  );
};
