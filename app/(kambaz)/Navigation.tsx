"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBook,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaRegUserCircle,
  FaThLarge,
  FaQuestionCircle,
} from "react-icons/fa";
const links = [
  {
    href: "/account",
    id: "wd-account-link",
    label: "Account",
    Icon: FaRegUserCircle,
  },
  {
    href: "/dashboard",
    id: "wd-dashboard-link",
    label: "Dashboard",
    Icon: FaThLarge,
  },
  { href: "/dashboard", id: "wd-course-link", label: "Courses", Icon: FaBook },
  {
    href: "/calendar",
    id: "wd-calendar-link",
    label: "Calendar",
    Icon: FaCalendarAlt,
  },
  { href: "/inbox", id: "wd-inbox-link", label: "Inbox", Icon: FaEnvelope },
  { href: "/labs", id: "wd-labs-link", label: "Labs", Icon: FaHome },
];
export default function KambazNavigation() {
  const pathname = usePathname();
  return (
    <nav
      id="wd-kambaz-navigation"
      aria-label="Kambaz"
      className="fixed inset-y-0 left-0 z-30 hidden w-[112px] flex-col items-center bg-black text-white md:flex"
    >
      <a
        id="wd-neu-link"
        href="https://www.northeastern.edu/"
        className="flex h-16 items-center text-3xl font-bold text-red-500"
        aria-label="Northeastern University"
      >
        N
      </a>
      {links.map(({ href, id, label, Icon }) => {
        const active =
          id === "wd-dashboard-link"
            ? pathname === "/dashboard"
            : id === "wd-course-link"
              ? pathname.startsWith("/courses/")
              : pathname.startsWith(href);
        return (
          <Link
            key={id}
            id={id}
            href={href}
            className={`wd-nav-tile flex w-full flex-col items-center gap-1 px-1 py-3 text-center text-xs ${active ? "bg-white text-red-700" : "text-white"}`}
          >
            <Icon
              className={`text-xl ${active ? "text-red-700" : id === "wd-account-link" ? "text-white" : "text-red-500"}`}
              aria-hidden="true"
            />
            <span>{label}</span>
          </Link>
        );
      })}
      <Link
        id="wd-ai-nav-help"
        href="/labs"
        className="mt-auto flex flex-col items-center gap-1 p-2 text-xs text-white"
      >
        <FaQuestionCircle className="text-xl" />
        Help
      </Link>
    </nav>
  );
}
