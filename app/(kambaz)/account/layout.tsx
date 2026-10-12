import type { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account" className="flex flex-col gap-6 md:flex-row">
      <AccountNavigation />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
