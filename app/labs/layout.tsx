import type { ReactNode } from "react";
import TOC from "./TOC";
export default function LabsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", width: "100%" }}>
    <aside style={{ flex: "0 0 145px", paddingLeft: 12 }}><TOC /></aside>
    <div style={{ flex: "1 1 330px", minWidth: 0 }}>{children}</div>
  </div>;
}
