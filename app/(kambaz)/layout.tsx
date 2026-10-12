import type { ReactNode } from "react";
import "./kambaz.css";
import KambazNavigation from "./Navigation";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <main className="wd-main-content-offset p-4 md:p-6">{children}</main>
    </div>
  );
}
