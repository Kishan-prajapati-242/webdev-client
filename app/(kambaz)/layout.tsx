import type { ReactNode } from "react";
import Navigation from "./Navigation";
import "./a3-kambaz.css";
export default function KambazLayout({children}:{children:ReactNode}) {
 return <div className="wd-a3-shell"><Navigation /><div className="wd-a3-content">{children}</div></div>;
}
