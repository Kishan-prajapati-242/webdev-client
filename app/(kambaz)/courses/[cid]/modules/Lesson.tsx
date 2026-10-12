import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";
export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson border-t border-l-4 border-t-neutral-300 border-l-green-600 p-3">
      <div className="flex items-center justify-between">
        <span className="wd-title font-medium">{title}</span>
        <GreenCheckmark />
      </div>
      <ul className="wd-content mt-2 list-disc pl-6 text-sm text-neutral-600">
        {children}
      </ul>
    </li>
  );
}
