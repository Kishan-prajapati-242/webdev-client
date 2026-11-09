import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";
import "./a3-kambaz.css";
import "./a4-kambaz.css";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return <AccountProvider><div className="wd-a3-shell">
    <Navigation />
    <div className="wd-a3-content">{children}</div>
  </div></AccountProvider>;
}
