import { FC } from "react";
import { Navbar } from "../navbar/navbar";
import { PageContainer } from "@/shared/ui/page-container";
import { tv } from "tailwind-variants";

const headerStyles = tv({
  slots: {
    header: "sticky top-0 left-0 z-50 w-full bg-custom-background",
  },
});

const { header } = headerStyles();

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const {} = props;
  return (
    <header className={header()}>
      <PageContainer>
        <Navbar />
      </PageContainer>
    </header>
  );
};
