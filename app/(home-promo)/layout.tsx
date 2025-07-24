import { NavTabs } from "@/pages/home-promo/ui/nav-tabs";

export default function HomePromoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mb-6 flex w-full justify-center">
        <NavTabs />
      </div>
      {children}
    </>
  );
}
