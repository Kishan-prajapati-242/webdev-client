import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";
export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden rounded border border-neutral-300 p-0">
      <div className="wd-title flex items-center justify-between gap-3 bg-neutral-200 p-3 font-semibold">
        <span>{title}</span>
        <GreenCheckmark />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
